import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDealsComponent } from './home-deals/home-deals.component';
import { HomeCornerComponent } from './home-corner/home-corner.component';
import { HomeWidgetComponent } from './home-widget/home-widget.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoreComponent } from './core/core.component';
import { AuthComponent } from './core/auth/auth.component';
import { UserComponent } from './core/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDealsComponent,
    HomeCornerComponent,
    HomeWidgetComponent,
    HeaderComponent,
    FooterComponent,
    CoreComponent,
    AuthComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
