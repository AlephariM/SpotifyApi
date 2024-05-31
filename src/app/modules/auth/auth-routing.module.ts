import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [
  {
    path: 'login', //Todo: http://localhost:4200/auth/login
    component:LoginPageComponent
  },
  {
    path: '**', // esto indica una ruta que no existe: si la ruta no existe dirijelo al login
    redirectTo: '/auth/login'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
