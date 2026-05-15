# Workshop Fullstack App — Frontend

Aplicação Angular de cadastro de **Produtos**, construída como exemplo de workshop.

- **Framework:** Angular 21 (standalone components, Reactive Forms, Signals)
- **HTTP client:** axios
- **Backend (repositório separado):** https://github.com/kenjisakai-dev/workshop.fullstack.api

## Pré-requisitos

- Node.js 20+
- Backend rodando em `http://localhost:3000` (veja o repositório acima)

## Como rodar

```bash
npm install
npm start
```

Abra `http://localhost:4200`.

## Funcionalidades

- Formulário de cadastro com validação (todos campos obrigatórios, quantidade ≥ 1)
- Listagem em tabela dos produtos cadastrados
- Tema dark
- Comunicação com a API via `axios`

## ⚠️ Atenção ao usar o formulário

Todos os campos são **obrigatórios** para que o botão **Salvar** seja habilitado:

| Campo      | Regra                                |
| ---------- | ------------------------------------ |
| Nome       | Obrigatório (pelo menos 1 caractere) |
| Quantidade | Obrigatório e valor mínimo **1**     |
| Categoria  | Obrigatório (pelo menos 1 caractere) |

Enquanto algum campo estiver inválido, o botão **Salvar** permanece desabilitado.

## Scripts úteis

```bash
npm start       # ng serve
npm run build   # build de produção
```
