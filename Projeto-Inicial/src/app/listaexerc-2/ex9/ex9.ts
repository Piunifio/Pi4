import { Component } from '@angular/core';

export interface Produto{
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss',
})
export class Ex9 {
  produtos: Produto[] = [
    { id: 1, nome: 'Mouse', preco: 150.00, quantidade: 10 },
    { id: 2, nome: 'Teclado', preco: 350.00, quantidade: 5 },
    { id: 3, nome: 'Fone', preco: 240.00, quantidade: 3 },
    { id: 4, nome: 'Monitor', preco: 990.90, quantidade: 0 },
    { id: 5, nome: 'Microfone', preco: 375.00, quantidade: 7 }
  ];
}
