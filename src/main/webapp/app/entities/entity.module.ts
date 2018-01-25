import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AntyapdeapigatewayCoinMySuffixModule } from './coin-my-suffix/coin-my-suffix.module';
import { AntyapdeapigatewayCoinAttributesMySuffixModule } from './coin-attributes-my-suffix/coin-attributes-my-suffix.module';
import { AntyapdeapigatewayMarketMySuffixModule } from './market-my-suffix/market-my-suffix.module';
import { AntyapdeapigatewayMarketPriceMySuffixModule } from './market-price-my-suffix/market-price-my-suffix.module';
import { AntyapdeapigatewayMarketDetailsMySuffixModule } from './market-details-my-suffix/market-details-my-suffix.module';
import { AntyapdeapigatewayExchangeMySuffixModule } from './exchange-my-suffix/exchange-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        AntyapdeapigatewayCoinMySuffixModule,
        AntyapdeapigatewayCoinAttributesMySuffixModule,
        AntyapdeapigatewayMarketMySuffixModule,
        AntyapdeapigatewayMarketPriceMySuffixModule,
        AntyapdeapigatewayMarketDetailsMySuffixModule,
        AntyapdeapigatewayExchangeMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AntyapdeapigatewayEntityModule {}
