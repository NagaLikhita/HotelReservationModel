import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetComponent } from './login/det/det.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'get',component:DetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
