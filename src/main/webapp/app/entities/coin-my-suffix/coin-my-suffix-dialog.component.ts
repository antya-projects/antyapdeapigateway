import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { CoinMySuffix } from './coin-my-suffix.model';
import { CoinMySuffixPopupService } from './coin-my-suffix-popup.service';
import { CoinMySuffixService } from './coin-my-suffix.service';

@Component({
    selector: 'jhi-coin-my-suffix-dialog',
    templateUrl: './coin-my-suffix-dialog.component.html'
})
export class CoinMySuffixDialogComponent implements OnInit {

    coin: CoinMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private coinService: CoinMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.coin.id !== undefined) {
            this.subscribeToSaveResponse(
                this.coinService.update(this.coin));
        } else {
            this.subscribeToSaveResponse(
                this.coinService.create(this.coin));
        }
    }

    private subscribeToSaveResponse(result: Observable<CoinMySuffix>) {
        result.subscribe((res: CoinMySuffix) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: CoinMySuffix) {
        this.eventManager.broadcast({ name: 'coinListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-coin-my-suffix-popup',
    template: ''
})
export class CoinMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private coinPopupService: CoinMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.coinPopupService
                    .open(CoinMySuffixDialogComponent as Component, params['id']);
            } else {
                this.coinPopupService
                    .open(CoinMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
