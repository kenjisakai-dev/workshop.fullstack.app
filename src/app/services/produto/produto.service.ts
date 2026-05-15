import axios, { AxiosInstance } from 'axios';
import { Produto } from './produto';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
  });

  async listar(): Promise<Produto[]> {
    const { data } = await this.api.get<Produto[]>('/api/produtos');
    return data;
  }

  async criar(produto: Omit<Produto, 'id'>): Promise<Produto> {
    const { data } = await this.api.post<Produto>('/api/produtos', produto);
    return data;
  }
}
