import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AntyapdeapigatewaySharedModule } from '../../shared';
import {
    MarketDetailsMySuffixService,
    MarketDetailsMySuffixPopupService,
    MarketDetailsMySuffixComponent,
    MarketDetailsMySuffixDetailComponent,
    MarketDetailsMySuffixDialogComponent,
    MarketDetailsMySuffixPopupComponent,
    MarketDetailsMySuffixDeletePopupComponent,
    MarketDetailsMySuffixDeleteDialogComponent,
    marketDetailsRoute,
    marketDetailsPopupRoute,
} from './';

const ENTITY_STATES = [
    ...marketDetailsRoute,
    ...marketDetailsPopupRoute,
];

@NgModule({
    imports: [
        AntyapdeapigatewaySharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        MarketDetailsMySuffixComponent,
        MarketDetailsMySuffixDetailComponent,
        MarketDetailsMySuffixDialogComponent,
        MarketDetailsMySuffixDeleteDialogComponent,
        MarketDetailsMySuffixPopupComponent,
        MarketDetailsMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        MarketDetailsMySuffixComponent,
        MarketDetailsMySuffixDialogComponent,
        MarketDetailsMySuffixPopupComponent,
        MarketDetailsMySuffixDeleteDialogComponent,
        MarketDetailsMySuffixDeletePopupComponent,
    ],
    providers: [
        MarketDetailsMySuffixService,
        MarketDetailsMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AntyapdeapigatewayMarketDetailsMySuffixModule {}
