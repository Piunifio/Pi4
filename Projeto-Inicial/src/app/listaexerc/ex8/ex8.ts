import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8',
  standalone: false,
  templateUrl: './ex8.html',
  styleUrl: './ex8.scss',
})
export class Ex8 {
produto = 'Mouse Gamer';
preco = 150;
quantidade = 2;

Total() {
  return this.preco * this.quantidade;
}

}
