import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3',
  standalone: false,
  templateUrl: './ex3.html',
  styleUrl: './ex3.scss',
})
export class Ex3 {
  idade = 0

  aumentarIdade() {
    this.idade++;
  }

  diminuirIdade() {
      this.idade--;
  }
}
