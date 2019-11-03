import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurworkComponent } from './ourwork/ourwork.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },

  { path: 'sign-in', component: SignInComponent, },
  { path: 'register-user', component: SignUpComponent,  },
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})

export class PagesRoutingModule { }
