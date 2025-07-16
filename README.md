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
-   [x] **👤 Gestão de Usuário Completa (Backend):**
    -   Criação de usuário segura.
    -   Login com usuário e senha usando tokens (`JWT`).
    -   Estrutura para login social com Google (OAuth 2.0).
-   [x] **🪙 CRUD de Transações (Backend):**
    -   API para adicionar, listar, editar e deletar receitas e despesas.
-   [ ] **📊 Dashboard (Frontend):**
    -   Conexão com a API para listar transações.
    -   Exibição do saldo atual.

### 💎 **Funcionalidades Intermediárias**
-   [ ] **🎨 Categorização Personalizada.**
-   [ ] **📈 Dashboard Avançado com Gráficos.**
-   [ ] **🔍 Filtros e Relatórios.**

### 🚀 **Funcionalidades Avançadas**
-   [ ] **🎯 Metas Financeiras.**
-   [ ] **⭐ Score de Crédito Alternativo.**
-   [ ] **🔑 Recuperação de Senha Segura.**

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza uma arquitetura moderna com um frontend desacoplado em React e um backend robusto em Python/Django.

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
| Tecnologia                      | Descrição                                                              |
| :------------------------------ | :--------------------------------------------------------------------- |
| **`Python`** | Linguagem principal para a lógica do servidor.                          |
| **`Django`** | Framework web robusto para um desenvolvimento rápido e seguro.           |
| **`Django REST Framework`**| Toolkit poderoso para a construção de APIs REST.                         |
| **`PostgreSQL`** | Banco de dados relacional robusto e confiável.                         |
| **`Simple JWT`** | Para implementação de autenticação com JSON Web Tokens.                  |
| **`django-cors-headers`**| Para gerenciar permissões de acesso do frontend à API (CORS).          |
| **`psycopg2`**| Driver para conectar o Django ao banco de dados PostgreSQL.             |

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para configurar e rodar a aplicação no seu ambiente.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/brunosousa09/fintech-inclusiva.git](https://github.com/brunosousa09/fintech-inclusiva.git)
    cd fintech-inclusiva
    ```

2.  **Configure o Backend (Django):**
    ```bash
    # Navegue para a pasta do servidor
    cd server

    # Crie e ative um ambiente virtual
    python -m venv venv
    .\venv\Scripts\activate

    # Crie o arquivo requirements.txt (se ainda não existir)
    pip freeze > requirements.txt
    
    # Instale as dependências
    pip install -r requirements.txt

    # Crie o arquivo .env e adicione suas variáveis de ambiente
    # SECRET_KEY="SUA_CHAVE_SECRETA_LONGA_E_ALEATORIA"
    # DB_NAME=FinanTech-Inclusiva
    # DB_USER=postgres
    # DB_PASSWORD=sua-senha-do-postgres
    # DB_HOST=localhost
    # DB_PORT=5432

    # Rode as migrações para criar as tabelas no banco
    python manage.py migrate

    # Crie um superusuário para poder logar
    python manage.py createsuperuser

    # Inicie o servidor do backend
    python manage.py runserver
    ```

3.  **Configure o Frontend (React):**
    ```bash
    # Em um novo terminal, navegue para a pasta do cliente
    cd client

    # Instale as dependências
    npm install

    # Inicie o cliente React
    npm run dev
    ```
A aplicação frontend estará disponível em `http://localhost:5173` e o backend em `http://localhost:8000`.

##  licença

Este projeto está sob a licença MIT.

---
Feito por **Bruno Sousa** - [LinkedIn](https://www.linkedin.com/in/brunosousa09) | [GitHub](https://github.com/brunosousa09)