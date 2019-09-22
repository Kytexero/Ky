import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurworkComponent } from './ourwork/ourwork.component';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },

  {path: 'ourwork', component: OurworkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})

export class PagesRoutingModule { }
