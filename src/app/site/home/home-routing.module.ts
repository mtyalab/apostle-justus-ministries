import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {AboutComponent} from "./about/about.component";
import {EventsComponent} from "./events/events.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
   {path: 'events', component: EventsComponent},
   {path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
