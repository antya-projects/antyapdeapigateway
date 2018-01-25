import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AntyapdeapigatewaySharedModule } from '../../shared';
import {
    MarketMySuffixService,
    MarketMySuffixPopupService,
    MarketMySuffixComponent,
    MarketMySuffixDetailComponent,
    MarketMySuffixDialogComponent,
    MarketMySuffixPopupComponent,
    MarketMySuffixDeletePopupComponent,
    MarketMySuffixDeleteDialogComponent,
    marketRoute,
    marketPopupRoute,
} from './';

const ENTITY_STATES = [
    ...marketRoute,
    ...marketPopupRoute,
];

@NgModule({
    imports: [
        AntyapdeapigatewaySharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        MarketMySuffixComponent,
        MarketMySuffixDetailComponent,
        MarketMySuffixDialogComponent,
        MarketMySuffixDeleteDialogComponent,
        MarketMySuffixPopupComponent,
        MarketMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        MarketMySuffixComponent,
        MarketMySuffixDialogComponent,
        MarketMySuffixPopupComponent,
        MarketMySuffixDeleteDialogComponent,
        MarketMySuffixDeletePopupComponent,
    ],
    providers: [
        MarketMySuffixService,
        MarketMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AntyapdeapigatewayMarketMySuffixModule {}
