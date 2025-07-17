import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailPage } from './email.page';

const routes: Routes = [
   {
    path: 'email',
    component: EmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }

