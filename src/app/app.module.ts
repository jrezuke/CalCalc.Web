import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BootstrapModalComponent } from './bootstrap/bootstrap-modal/bootstrap-modal.component';
import { BootstrapDatepickerComponent } from './bootstrap/bootstrap-datepicker/bootstrap-datepicker.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BootstrapComponent,
    BootstrapModalComponent,
    BootstrapDatepickerComponent,
    AboutComponent,
    ContactsComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
