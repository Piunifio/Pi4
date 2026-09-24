import { Component } from '@angular/core';

export interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'média' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-ex13',
  standalone: false,
  templateUrl: './ex13.html',
  styleUrl: './ex13.scss',
})
export class Ex13 {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Corrigir bug na tela de login', responsavel: 'Carlos', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Atualizar documentação do projeto', responsavel: 'Ana', prioridade: 'baixa', concluida: true },
    { id: 3, titulo: 'Criar testes unitários para a API', responsavel: 'Mariana', prioridade: 'alta', concluida: false },
    { id: 4, titulo: 'Refatorar estilos do dashboard', responsavel: 'Lucas', prioridade: 'média', concluida: true },
    { id: 5, titulo: 'Configurar pipeline de CI/CD', responsavel: 'Rafael', prioridade: 'alta', concluida: false },
    { id: 6, titulo: 'Revisar PRs do repositório', responsavel: 'Beatriz', prioridade: 'média', concluida: false }
  ];

  // Botao para alterar concluida <-> pendente
  alterarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  // Total tarefas
  get totalTarefas() {
    return this.tarefas,length;
  }

  // Qtd tarefas concluidas
  get tarefasConcluidas() {
    return this.tarefas.filter(t => t.concluida).length;
  }

  // Qtd tarefas pendentes
  get tarefasPendentes() {
    return this.tarefas.filter(t => !t.concluida).length;
  }
}
