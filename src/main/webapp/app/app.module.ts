import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AntyapdeapigatewaySharedModule, UserRouteAccessService } from './shared';
import { AntyapdeapigatewayAppRoutingModule} from './app-routing.module';
import { AntyapdeapigatewayHomeModule } from './home/home.module';
import { AntyapdeapigatewayAdminModule } from './admin/admin.module';
import { AntyapdeapigatewayAccountModule } from './account/account.module';
import { AntyapdeapigatewayEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        AntyapdeapigatewayAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        AntyapdeapigatewaySharedModule,
        AntyapdeapigatewayHomeModule,
        AntyapdeapigatewayAdminModule,
        AntyapdeapigatewayAccountModule,
        AntyapdeapigatewayEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class AntyapdeapigatewayAppModule {}
