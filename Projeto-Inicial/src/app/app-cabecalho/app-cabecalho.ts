import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-cabecalho',
  standalone: false,
  templateUrl: './app-cabecalho.html',
  styleUrl: './app-cabecalho.scss',
})
export class AppCabecalho {
  @Input()
  topo = "Loja Angular 1";
}
