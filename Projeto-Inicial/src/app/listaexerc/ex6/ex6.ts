import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  Quantidade = 0

  Aumentar() {
    this.Quantidade++
  }

  Diminuir() {
    if (this.Quantidade > 0) {
    this.Quantidade--
  }
}
}