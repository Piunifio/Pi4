import { Component } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

export interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'média' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-ex14',
  standalone: false,
  templateUrl: './ex14.html',
  styleUrl: './ex14.scss',
})
export class Ex14 {
  // Exercicio 11
  apenasDisponiveis = false;
  produtosFiltro: Produto[] = [
    { id: 1, nome: 'Mouse', preco: 150.00, quantidade: 10 },
    { id: 2, nome: 'Teclado', preco: 350.00, quantidade: 0 },
    { id: 3, nome: 'Fone', preco: 240.00, quantidade: 3 }
  ];

  mudarFiltro(): void {
    this.apenasDisponiveis = !this.apenasDisponiveis;
  }

  // Exercicio 12
  novoNome: string = '';
  novaQtd: number | null = null;
  msgErro: string = '';
  listaCadastro: Produto[] = [
    { id: 101, nome: 'Monitor', preco: 990.90, quantidade: 4 },
    { id: 102, nome: 'Microfone', preco: 375.00, quantidade: 7 }
  ];

  cadastrar(): void {
    if (!this.novoNome || this.novoNome.trim() === '') {
      this.msgErro = 'Informe o nome do produto.';
      return;
    }

    if (this.novaQtd === null || this.novaQtd < 0) {
      this.msgErro = 'Quantidade não pode ser vazia ou menor que zero.';
      return;
    }

    this.msgErro = '';
    
    this.listaCadastro.push({
      id: Date.now(),
      nome: this.novoNome.trim(),
      preco: 100.00,
      quantidade: this.novaQtd
    });

    // Limpa os campos
    this.novoNome = '';
    this.novaQtd = null;
  }

  excluir(index: number): void {
    this.listaCadastro.splice(index, 1);
  }

  // Exercicio 13
  listaTarefas: Tarefa[] = [
    { id: 1, titulo: 'Corrigir bug na tela de login', responsavel: 'Carlos', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Atualizar documentação do projeto', responsavel: 'Ana', prioridade: 'baixa', concluida: true },
    { id: 3, titulo: 'Criar testes unitários para a API', responsavel: 'Mariana', prioridade: 'alta', concluida: false },
    { id: 4, titulo: 'Refatorar estilos do dashboard', responsavel: 'Lucas', prioridade: 'média', concluida: true },
    { id: 5, titulo: 'Configurar pipeline de CI/CD', responsavel: 'Rafael', prioridade: 'alta', concluida: false },
    { id: 6, titulo: 'Revisar PRs do repositório', responsavel: 'Beatriz', prioridade: 'média', concluida: false }
  ];

  mudarStatus(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }
}