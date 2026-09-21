import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4',
  standalone: false,
  templateUrl: './ex4.html',
  styleUrl: './ex4.scss',
})
export class Ex4 {
  nomeProduto = "Teclado";
  quantidadeEstoque = 5;
  
  adicionar() {
    this.quantidadeEstoque++;
  }

  remover() {
    this.quantidadeEstoque--;
  }
}
