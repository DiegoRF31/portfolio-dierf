import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoPage } from './pages/info/info.page';


@NgModule({
  declarations: [
    InfoPage
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
