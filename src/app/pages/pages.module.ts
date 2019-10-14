import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { OurworkComponent } from './ourwork/ourwork.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Newpage2Component } from './newpage2/newpage2.component';

@NgModule({
  declarations: [ OurworkComponent, LoginComponent, RegisterComponent, Newpage2Component],
  imports: [
    CommonModule, 
    HomeModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
