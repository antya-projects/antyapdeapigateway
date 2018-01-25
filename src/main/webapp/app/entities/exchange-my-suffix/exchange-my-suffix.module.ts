import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AntyapdeapigatewaySharedModule } from '../../shared';
import {
    ExchangeMySuffixService,
    ExchangeMySuffixPopupService,
    ExchangeMySuffixComponent,
    ExchangeMySuffixDetailComponent,
    ExchangeMySuffixDialogComponent,
    ExchangeMySuffixPopupComponent,
    ExchangeMySuffixDeletePopupComponent,
    ExchangeMySuffixDeleteDialogComponent,
    exchangeRoute,
    exchangePopupRoute,
} from './';

const ENTITY_STATES = [
    ...exchangeRoute,
    ...exchangePopupRoute,
];

@NgModule({
    imports: [
        AntyapdeapigatewaySharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ExchangeMySuffixComponent,
        ExchangeMySuffixDetailComponent,
        ExchangeMySuffixDialogComponent,
        ExchangeMySuffixDeleteDialogComponent,
        ExchangeMySuffixPopupComponent,
        ExchangeMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        ExchangeMySuffixComponent,
        ExchangeMySuffixDialogComponent,
        ExchangeMySuffixPopupComponent,
        ExchangeMySuffixDeleteDialogComponent,
        ExchangeMySuffixDeletePopupComponent,
    ],
    providers: [
        ExchangeMySuffixService,
        ExchangeMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AntyapdeapigatewayExchangeMySuffixModule {}
