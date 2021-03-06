/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { AntyapdeapigatewayTestModule } from '../../../test.module';
import { ExchangeMySuffixDialogComponent } from '../../../../../../main/webapp/app/entities/exchange-my-suffix/exchange-my-suffix-dialog.component';
import { ExchangeMySuffixService } from '../../../../../../main/webapp/app/entities/exchange-my-suffix/exchange-my-suffix.service';
import { ExchangeMySuffix } from '../../../../../../main/webapp/app/entities/exchange-my-suffix/exchange-my-suffix.model';

describe('Component Tests', () => {

    describe('ExchangeMySuffix Management Dialog Component', () => {
        let comp: ExchangeMySuffixDialogComponent;
        let fixture: ComponentFixture<ExchangeMySuffixDialogComponent>;
        let service: ExchangeMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyapdeapigatewayTestModule],
                declarations: [ExchangeMySuffixDialogComponent],
                providers: [
                    ExchangeMySuffixService
                ]
            })
            .overrideTemplate(ExchangeMySuffixDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ExchangeMySuffixDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ExchangeMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new ExchangeMySuffix(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.exchange = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'exchangeListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new ExchangeMySuffix();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.exchange = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'exchangeListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
