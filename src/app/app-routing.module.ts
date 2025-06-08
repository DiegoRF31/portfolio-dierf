import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from '@shared/main/main.layout';

const routes: Routes = [

  {path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadChildren: () => import('@info/info.module').then(m => m.InfoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
