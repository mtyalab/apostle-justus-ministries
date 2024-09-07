import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {StFooterComponent} from "../../shared/st-footer/st-footer.component";
import {StHeaderComponent} from "../../shared/st-header/st-header.component";
import {StSocialComponent} from "../../shared/st-social/st-social.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StFooterComponent,
    StHeaderComponent,
    StSocialComponent
  ]
})
export class HomeModule { }
