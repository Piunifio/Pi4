import { Component } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {
  produtos: Produto[] = [
    { id: 1, nome: 'Mouse', preco: 150.00, quantidade: 10, promocao: true },
    { id: 2, nome: 'Teclado', preco: 350.00, quantidade: 5, promocao: false },
    { id: 3, nome: 'Fone', preco: 240.00, quantidade: 3, promocao: true },
    { id: 4, nome: 'Monitor', preco: 990.90, quantidade: 0, promocao: false },
    { id: 5, nome: 'Microfone', preco: 375.00, quantidade: 7, promocao: false }
  ];

  // ativa desativa promo
  alterarPromocao(produto: Produto): void {
    produto.promocao = !produto.promocao;
  }
}
