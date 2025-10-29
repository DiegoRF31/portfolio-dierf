import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPage } from './pages/info/info.page';
import { ContactPage } from './pages/contact/contact.page';
import { SuccessPage } from './pages/success/success.page';

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
    loadComponent: () => import('./pages/email/email.page').then(m => m.EmailPage)
  },
  {
  path: 'success',
  component: SuccessPage
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
