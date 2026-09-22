import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  nomes = ['João', 'Ricardo', 'Nathan', 'Murilo', 'Felipe'];

  removerUltimo() {
    this.nomes.pop();
  }

  limparTudo() {
    this.nomes = [];
  }

  restaurar() {
    this.nomes = ['João', 'Ricardo', 'Nathan', 'Murilo', 'Felipe'];
  }
}
