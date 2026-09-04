import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1 } from './ex1/ex1';

const routes: Routes = [

   {
        path: 'ex1',
        component: Ex1
      },
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaexercRoutingModule {}
