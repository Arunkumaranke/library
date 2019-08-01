import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListbookComponent } from './listbook/listbook.component';

const routes: Routes = [
  {
    path: '',
    component: BannerComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children : [
      {
        path: 'listbook',
        component: ListbookComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'edit',
        component: CreateComponent
      },
      {
        path: 'edit/:id',
        component: EditComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
