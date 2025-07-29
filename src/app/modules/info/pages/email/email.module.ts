import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { EmailRoutingModule } from './email-routing.module';
import { SuccessPage } from '../success/success.page';

@NgModule({
  declarations: [SuccessPage],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    EmailRoutingModule
  ]
})
export class EmailModule {}