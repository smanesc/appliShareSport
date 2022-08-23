import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TabsAccountComponent } from './tabs-account/tabs-account.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import {ListboxModule} from 'primeng/listbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { FormAccountComponent } from './form-account/form-account.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GenericButtonComponent } from './generic-button/generic-button.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { CourseComponent } from './course/course.component';
import { RandoComponent } from './rando/rando.component';
import { RandoInfoComponent } from './rando-info/rando-info.component';
import { CardModule } from 'primeng/card';
import { CourseInfoComponent } from './course-info/course-info.component';
import { LabelComponent } from './label/label.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TitleBarComponent,
    TabsAccountComponent,
    FormAccountComponent,
    DropdownComponent,
    GenericButtonComponent,
    HomeComponent,
    AccountComponent,
    CourseComponent,
    RandoComponent,
    RandoInfoComponent,
    CourseInfoComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabViewModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    CardModule,
    ListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
