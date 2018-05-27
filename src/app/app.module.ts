import {NgModule} from "@angular/core";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./header/header.component";
import {AppRoutingModule} from "./app-routing.module";
import {SearchComponent} from "./header/search/search.component";
import {FormsModule} from "@angular/forms";
import {JWT_OPTIONS, JwtInterceptor, JwtModule} from "@auth0/angular-jwt";
import {NgProgressModule} from "@ngx-progressbar/core";
import {NgProgressHttpModule} from "@ngx-progressbar/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchComponent,
    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        NgbModule.forRoot(),
        BrowserModule,
        HttpClientModule,
        NgProgressModule.forRoot(),
        NgProgressHttpModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('token');
                },
                whitelistedDomains: ['localhost:3000']
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}