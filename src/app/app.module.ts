import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AllComponent } from './page/all/all.component';
import { GoodComponent } from './page/good/good.component';
import { ShareComponent } from './page/share/share.component';
import { JobComponent } from './page/job/job.component';
import { DevComponent } from './page/dev/dev.component';
import { ContainerComponent } from './component/container/container.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AllComponent,
        GoodComponent,
        ShareComponent,
        JobComponent,
        DevComponent,
        ContainerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NzGridModule,
        NzLayoutModule,
        NzMenuModule,
        NzSpaceModule,
        NzButtonModule,
        NzPaginationModule,
        NzCommentModule,
        NzListModule,
        NzTabsModule,
        NzBackTopModule,
        NzDividerModule,
        NzCardModule,
        NzInputModule,
        NzIconModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }],
    bootstrap: [AppComponent]
})
export class AppModule { }
