import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BootstrapModalComponent } from './bootstrap/bootstrap-modal/bootstrap-modal.component';
import { BootstrapDatepickerComponent } from './bootstrap/bootstrap-datepicker/bootstrap-datepicker.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path:'home', component:HomeComponent},
  { path:'about', component:AboutComponent},
  { path:'contacts', component:ContactsComponent},
  { path:'bootstrap', component:BootstrapComponent},
  { path:'bootstrap/modal', component:BootstrapModalComponent},
  { path:'bootstrap/datepicker', component:BootstrapDatepickerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
