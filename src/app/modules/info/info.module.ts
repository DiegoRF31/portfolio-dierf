import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoPage } from './pages/info/info.page';
import { ContactPage } from './pages/contact/contact.page';
import { EmailPage } from './pages/email/email.page';


@NgModule({
  declarations: [
    InfoPage,
    ContactPage,
    EmailPage
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
