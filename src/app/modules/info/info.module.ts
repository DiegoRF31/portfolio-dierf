import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoPage } from './pages/info/info.page';
import { ContactPage } from './pages/contact/contact.page';
import { SuccessPage } from './pages/success/success.page';


@NgModule({
  declarations: [
    InfoPage,
    ContactPage,
    SuccessPage
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
