import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Produto } from '../../services/produto/produto';
import { ProdutoService } from '../../services/produto/produto.service';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  produtos = signal<Produto[]>([]);

  produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    quantidade: new FormControl(0, [Validators.required, Validators.min(1)]),
    categoria: new FormControl('', Validators.required),
  });

  constructor(private produtoService: ProdutoService) {}

  async ngOnInit() {
    const response = await this.produtoService.listar();
    this.produtos.set(response);
  }

  async submit() {
    try {
      const novo = await this.produtoService.criar(this.produtoForm.value as Omit<Produto, 'id'>);
      this.produtos.update((lista) => [...lista, novo]);
      this.produtoForm.reset({ nome: '', quantidade: 0, categoria: '' });
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      alert('Erro ao criar produto. Por favor, tente novamente.');
      this.produtoForm.reset({ nome: '', quantidade: 0, categoria: '' });
    }
  }
}
