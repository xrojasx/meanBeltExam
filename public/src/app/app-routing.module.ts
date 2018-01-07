import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    //route for user login
  { path: '', component: LoginComponent },
  
   //route for user dashboard
  { path: 'dashboard', component: DashboardComponent },
 
    //route for creating polls
  { path: 'items', component: ItemsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
