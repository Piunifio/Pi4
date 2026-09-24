import { Component } from '@angular/core';

export interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: 'planejamento' | 'desenvolvimento' | 'testes' | 'concluído';
  entregue: boolean;
}

@Component({
  selector: 'app-ex15',
  standalone: false,
  templateUrl: './ex15.html',
  styleUrl: './ex15.scss',
})
export class Ex15 {
  ocultarConcluidos: boolean = false;

  listaProjetos: Projeto[] = [
    { id: 1, titulo: 'Sistema de Vendas', equipe: 'Grupo Alfa', nota: 8.5, status: 'concluído', entregue: true },
    { id: 2, titulo: 'App de Entregas', equipe: 'DevTech', nota: 5.5, status: 'desenvolvimento', entregue: false },
    { id: 3, titulo: 'Portal de Cursos', equipe: 'WebMasters', nota: null, status: 'planejamento', entregue: false },
    { id: 4, titulo: 'Totem de Atendimento', equipe: 'Inova', nota: 7.0, status: 'testes', entregue: true },
    { id: 5, titulo: 'Gerenciador de Estoque', equipe: 'CodeLab', nota: 4.0, status: 'desenvolvimento', entregue: true }
  ];

  alterarExibicaoConcluidos(): void {
    this.ocultarConcluidos = !this.ocultarConcluidos;
  }

  mudarStatus(proj: Projeto, novoStatus: any): void {
    proj.status = novoStatus.target.value;
  }

  get totalProjetos(): number {
    return this.listaProjetos.length;
  }

  get totalConcluidos(): number {
    return this.listaProjetos.filter(p => p.status === 'concluído').length;
  }
}