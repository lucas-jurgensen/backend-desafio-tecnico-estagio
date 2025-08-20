# Back-End do Desafio Técnico

API desenvolvida como parte do teste técnico para uma vaga de Estágio Full Stack. A aplicação permite realizar operações CRUD (Criar, Ler, Atualizar, Deletar) para o gerenciamento de uma carteira de investimentos.

## Stack utilizada

-   **Backend:** Node.js
-   **Framework:** Express.js
-   **Linguagem:** TypeScript
-   **ORM:** Prisma
-   **Banco de Dados:** MySQL

## Como rodar o projeto

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (v18 ou superior)
-   [NPM](https://www.npmjs.com/)
-   Um servidor [MySQL](https://www.mysql.com/) rodando na sua máquina.

**Clone o projeto**

```bash
  git clone https://github.com/lucas-jurgensen/backend-desafio-tecnico-estagio
```

**Entre no diretório do projeto**

```bash
  cd backend-desafio-tecnico-estagio
```

**Instale as dependências**

```bash
  npm install
```

**Configure as variáveis de ambiente**

-   Crie uma cópia do arquivo `.env.example` e renomeie para `.env`.
    ```bash
      cp .env.example .env
    ```
-   Abra o arquivo `.env` e preencha a `DATABASE_URL` com as suas credenciais do MySQL.

**Configure o banco de dados**

-   Crie um banco de dados no seu servidor MySQL.
-   Execute as migrações do Prisma para criar as tabelas:
    ```bash
      npx prisma migrate dev
    ```

**Inicie o servidor**

```bash
  npm run dev
```

O servidor estará rodando em `http://localhost:3000/`.

## Endpoins da API

| Método HTTP | Endpoint                  | Descrição                           |
| ----------- | ------------------------- | ----------------------------------- |
| `POST`      | `/investimentos`          | Cria um novo investimento.          |
| `GET`       | `/investimentos`          | Lista todos os investimentos.       |
| `GET`       | `/investimentos?nome=...` | Filtra investimentos pelo nome.     |
| `PUT`       | `/investimentos/:id`      | Atualiza um investimento existente. |
| `DELETE`    | `/investimentos/:id`      | Deleta um investimento.             |

## Uso/Exemplos

### 1. Criar um Investimento

Cria um novo registro de investimento no banco de dados.

**Requisição:**

-   **Método:** `POST`
-   **URL:** `http://localhost:3000/investimentos`
-   **Body:** `(Tipo: JSON)`
    ```json
    {
        "nome_investimento": "Tesouro Selic 2029",
        "tipo_investimento": "Renda Fixa",
        "valor": 500.75
    }
    ```

**Resposta de Sucesso (201 Created):**

```json
{
    "id": 1,
    "nome_investimento": "Tesouro Selic 2029",
    "tipo_investimento": "Renda Fixa",
    "valor": 500.75,
    "data_investimento": "2025-08-19T23:25:00.123Z"
}
```

**Resposta de Erro (400 Bad Request - Validação):**

```json
{
    "error": "[{\"code\":\"invalid_date\",\"path\":[\"data_investimento\"],\"message\":\"A data do investimento não pode estar no futuro\"}]"
}
```

---

### 2. Listar Investimentos

Retorna uma lista de todos os investimentos cadastrados.

**Requisição (Listar Todos):**

-   **Método:** `GET`
-   **URL:** `http://localhost:3000/investimentos`

**Requisição (Filtrar por Nome):**

-   **Método:** `GET`
-   **URL:** `http://localhost:3000/investimentos?nome=Tesouro%20Selic%202029`

**Resposta de Sucesso (200 OK):**

```json
[
    {
        "id": 1,
        "nome_investimento": "Tesouro Selic 2029",
        "tipo_investimento": "Renda Fixa",
        "valor": 500.75,
        "data_investimento": "2025-08-19T23:25:00.123Z"
    },
    {
        "id": 2,
        "nome_investimento": "Fundo Imobiliário MXRF11",
        "tipo_investimento": "FII",
        "valor": 1050,
        "data_investimento": "2025-08-19T23:26:00.456Z"
    }
]
```

---

### 3. Atualizar um Investimento

Atualiza os dados de um investimento específico através do seu `id`.

**Requisição:**

-   **Método:** `PUT`
-   **URL:** `http://localhost:3000/investimentos/1`
-   **Body:** `(Tipo: JSON)`
    ```json
    {
        "valor": 650.0
    }
    ```

**Resposta de Sucesso (200 OK):**

```json
{
    "id": 1,
    "nome_investimento": "Tesouro Selic 2029",
    "tipo_investimento": "Renda Fixa",
    "valor": 650,
    "data_investimento": "2025-08-19T23:25:00.123Z"
}
```

---

### 4. Deletar um Investimento

Remove um investimento do banco de dados através do seu `id`.

**Requisição:**

-   **Método:** `DELETE`
-   **URL:** `http://localhost:3000/investimentos/1`

**Resposta de Sucesso (204 No Content):**
_(O corpo da resposta é vazio)_

---
