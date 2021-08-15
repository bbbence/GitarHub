import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingCreateComponent } from './page/shipping-create/shipping-create.component';
import { ShippingComponent } from './page/shipping/shipping.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { OrdersComponent } from './page/orders/orders.component';
import { GuitarEditComponent } from './page/guitar-edit/guitar-edit.component';
import { GuitarsComponent } from './page/guitars/guitars.component';
import { UsersComponent } from './page/users/users.component';
import { BillsComponent } from './page/bills/bills.component';
import { GuitarCreateComponent } from './page/guitar-create/guitar-create.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UserCreateComponent } from './page/user-create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent,
  },
  {
    path: 'users/create',
    component: UserCreateComponent,
  },
  {
    path: 'guitars',
    component: GuitarsComponent,
  },
  {
    path: 'guitars/edit/:id',
    component: GuitarEditComponent,
  },
  {
    path: 'guitars/create',
    component: GuitarCreateComponent,
  },
  {
    path: 'shippings',
    component: ShippingComponent,
  },
  {
    path: 'shippings/create',
    component: ShippingCreateComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'bills',
    component: BillsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
