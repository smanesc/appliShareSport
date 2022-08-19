import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TabsAccountComponent } from './tabs-account/tabs-account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TitleBarComponent,
    TabsAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
