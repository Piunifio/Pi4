import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaexercRoutingModule } from './listaexerc-routing-module';
import { Ex1 } from './ex1/ex1';
import { Ex2 } from './ex2/ex2';
import { Ex3 } from './ex3/ex3';
import { Ex4 } from './ex4/ex4';
import { Ex5 } from './ex5/ex5';
import { Ex6 } from './ex6/ex6';
import { Ex7 } from './ex7/ex7';

@NgModule({
  declarations: [Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7],
  imports: [CommonModule, ListaexercRoutingModule],
})
export class ListaexercModule {}
