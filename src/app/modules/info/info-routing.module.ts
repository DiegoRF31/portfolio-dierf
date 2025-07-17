import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPage } from './pages/info/info.page';
import { ContactPage } from './pages/contact/contact.page';
import { EmailPage } from './pages/email/email.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPage
  },
  {
    path: 'contact',
    component: ContactPage
  },
   {
    path: 'email',
    component: EmailPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
