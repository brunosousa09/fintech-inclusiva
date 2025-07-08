# FinanTech Inclusiva 💸

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)

Uma plataforma FullStack de gestão financeira simplificada, projetada para capacitar trabalhadores informais e microempreendedores no Brasil, oferecendo ferramentas para a saúde financeira e acesso a novas oportunidades de crédito.

> ### "Acreditamos que a inclusão financeira é uma ferramenta poderosa para a cidadania e o desenvolvimento social."

---

## 🎯 A Importância para a Sociedade

No Brasil, uma parcela significativa da força de trabalho atua na economia informal, enfrentando desafios como a falta de acesso a serviços financeiros tradicionais e a dificuldade em comprovar renda. Essa barreira impede o crescimento de pequenos negócios e perpetua ciclos de instabilidade financeira.

O **FinanTech Inclusiva** nasce com a missão de atacar esse problema, oferecendo:
* **Dignidade Financeira:** Uma ferramenta intuitiva que permite a qualquer pessoa, independentemente do seu nível de literacia financeira, organizar suas finanças.
* **Inclusão Creditícia:** Ao analisar o fluxo de caixa de forma inteligente, a plataforma gera um "score de crédito alternativo", criando um caminho para que microempreendedores acessem microcréditos e invistam em seus negócios.
* **Empoderamento:** Capacita o usuário a tomar decisões mais conscientes, planejar o futuro e construir um histórico financeiro sólido, mesmo fora do sistema tradicional.

## ✨ Funcionalidades Planejadas

O projeto está sendo construído em fases, evoluindo de um MVP robusto para uma plataforma completa.

### 🌟 **Funcionalidades Essenciais (MVP)**
-   [x] **👤 Gestão de Usuário Completa:**
    -   Cadastro seguro com hash de senha (`bcrypt`).
    -   Login com e-mail e senha usando tokens (`JWT`).
    -   Login social com contas Google (OAuth 2.0).
-   [ ] **🪙 CRUD de Transações:**
    -   Adicionar, listar, editar e deletar receitas e despesas.
-   [ ] **📊 Dashboard Simples:**
    -   Exibição do saldo atual.
    -   Lista das últimas transações.

### 💎 **Funcionalidades Intermediárias**
-   [ ] **🎨 Categorização Personalizada:**
    -   Criar, editar e deletar categorias para despesas.
-   [ ] **📈 Dashboard Avançado com Gráficos:**
    -   Visualização de despesas por categoria (gráfico de pizza).
    -   Comparativo de receitas vs. despesas mensais (gráfico de barras).
-   [ ] **🔍 Filtros e Relatórios:**
    -   Filtrar transações por data, tipo e categoria.

### 🚀 **Funcionalidades Avançadas**
-   [ ] **🎯 Metas Financeiras:**
    -   Definir objetivos de economia e acompanhar o progresso.
-   [ ] **⭐ Score de Crédito Alternativo:**
    -   Algoritmo para gerar um score com base na saúde financeira do usuário.
-   [ ] **🔑 Recuperação de Senha Segura:**
    -   Implementação de fluxo de "esqueci minha senha" via e-mail.

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza uma stack JavaScript moderna, robusta e escalável.

#### **Frontend**
| Tecnologia      | Descrição                                                              |
| :-------------- | :--------------------------------------------------------------------- |
| **`React`** | Biblioteca principal para a construção da interface de usuário.          |
| **`Vite`** | Ferramenta de build extremamente rápida para o ambiente de desenvolvimento. |
| **`Tailwind CSS`** | Framework de CSS utility-first para uma estilização rápida e moderna. |
| **`React Router`** | Para gerenciamento de rotas e navegação na SPA.                        |
| **`Axios`** | Cliente HTTP para comunicação com a API do backend.                      |
| **`React Context`** | Para gerenciamento de estado global (autenticação).                    |

#### **Backend**
| Tecnologia         | Descrição                                                                      |
| :----------------- | :----------------------------------------------------------------------------- |
| **`Node.js`** | Ambiente de execução JavaScript no lado do servidor.                           |
| **`Express.js`** | Framework minimalista para a construção da API REST.                           |
| **`PostgreSQL`** | Banco de dados relacional robusto e confiável.                                 |
| **`Prisma`** | ORM de próxima geração para uma interação segura e intuitiva com o banco de dados. |
| **`JWT`** | Implementação de tokens para proteger as rotas da API.                         |
| **`Passport.js`**| Middleware de autenticação para o login social com Google.                     |
| **`Bcrypt.js`**| Biblioteca para realizar o hash seguro de senhas.                              |

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para configurar e rodar a aplicação no seu ambiente.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/brunosousa09/fintech-inclusiva.git](https://github.com/brunosousa09/fintech-inclusiva.git)
    cd fintech-inclusiva
    ```

2.  **Configure o Backend:**
    ```bash
    # Navegue para a pasta do servidor
    cd server

    # Instale as dependências
    npm install

    # Crie o arquivo .env e adicione suas variáveis de ambiente
    # DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    # JWT_SECRET="SUA_CHAVE_SECRETA"
    # GOOGLE_CLIENT_ID="SEU_CLIENT_ID_DO_GOOGLE"
    # GOOGLE_CLIENT_SECRET="SEU_CLIENT_SECRET_DO_GOOGLE"

    # Rode as migrações do Prisma para criar as tabelas no banco
    npx prisma migrate dev

    # Inicie o servidor do backend
    npm start
    ```

3.  **Configure o Frontend:**
    ```bash
    # Em um novo terminal, navegue para a pasta do cliente
    cd client

    # Instale as dependências
    npm install

    # Inicie o cliente React
    npm run dev
    ```
A aplicação frontend estará disponível em `http://localhost:5173` e o backend em `http://localhost:3001`.

##  licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---
Feito por **[Bruno Sousa]** - [[Seu LinkedIn](https://www.linkedin.com/in/brunosousa09)]() | [[Seu GitHub](https://github.com/brunosousa09)]()
