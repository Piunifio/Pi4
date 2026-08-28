import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing-module';
import { Cadastro } from './cadastro/cadastro';
import { Listagem } from './listagem/listagem';

@NgModule({
  declarations: [Cadastro, Listagem],
  imports: [CommonModule, ProdutoRoutingModule],
})
export class ProdutoModule {}
