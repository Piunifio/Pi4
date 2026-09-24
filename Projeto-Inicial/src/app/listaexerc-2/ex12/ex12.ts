import { Component } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.scss',
})
export class Ex12 {
  // area vinculada c inputs do fomulario
  novoNome = '';
  novaQuantidade = null;
  novoPreco = 100.00;

  // Mensagem para se cadastro falhar
  mensagemErro = '';

  // Lista produtos
  produtos: Produto[] = [
    { id: 1, nome: 'Mouse', preco: 150.00, quantidade: 10 },
    { id: 2, nome: 'Teclado', preco: 350.00, quantidade: 5 },
    { id: 3, nome: 'Fone', preco: 240.00, quantidade: 3 }
  ];

  // Cadastrar o Produto
  cadastrarProduto(): void {
    // Validação do nome
    if (!this.novoNome || this.novoNome.trim() === '') {
      this.mensagemErro = 'Por favor, preencha o nome do produto.';
      return;
    }

    // Diferente de null e >= 0
    if (this.novaQuantidade === null || this.novaQuantidade < 0) {
      this.mensagemErro = 'A quantidade deve ser igual ou maior que zero.';
      return;
    }

    // Erro se validacao passou
    this.mensagemErro = '';

    // Cria novo produto
    const novoProduto: Produto = {
      id: Date.now(),
      nome: this.novoNome.trim(),
      preco: this.novoPreco,
      quantidade: this.novaQuantidade
    };

    // Add produto e atualiza automatico a lista
    this.produtos.push(novoProduto);
    this.limparFormulario();
}

// Meio para excluir um produto da lista pelo index
excluirProduto(index: number) {
  this.produtos.splice(index, 1);
}

limparFormulario() {
  this.novoNome = '';
  this.novaQuantidade = null;
}
}


