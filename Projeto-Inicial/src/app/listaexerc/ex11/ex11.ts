import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})
export class Ex11 {
  produto = "Mouse Gamer";
  preco = 120;
  quantidade = 1;
  mensagem = '';

  aumentar(){
    this.quantidade++;
  }

  diminuir(){
    if (this.quantidade > 1){
      this.quantidade--;
    }
  }

  adicionar(){
    this.mensagem = this.quantidade + "x " + this.produto + " foi adicionado ao carrinho!";
  }
}
