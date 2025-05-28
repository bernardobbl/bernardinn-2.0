# 📚 Sistema [Bernardinn-2.0]


🗺️ Estrutura do ProjetO

📁 backend/    (bernardinn/bernardinn)     → Código Spring Boot + Dockerfile
📁 frontend/     → Código React/JS + Dockerfile
📄 docker-compose.yml -> na raiz do projeto

Projeto desenvolvido com as seguintes tecnologias:

- ⚙️ **Back-end:** Java + Spring Boot
- 🖥️ **Front-end:** React + JavaScript + HTML + CSS
- 🗄️ **Banco de Dados:** MongoDB
- 🐳 **Containerização:** Docker e Docker Compose

---

## 🚀 Como executar o projeto

### 📦 Pré-requisitos:

- Ter o **Docker** e **Docker Compose** instalados na máquina.

---

### 🔥 Rodando com Docker Compose:

1️⃣ Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

DETALHE: CASO PRECISE RODAR O COMMANDO DE INSTALAÇÃO DO AXIOS, RODE DENTRO DA PASTA /FRONTEND/FRONTEND-APP.

PARA EXECUATAR O DOCKER COMPOSE: docker-compose up --build

3️⃣ Acesse:

🖥️ Front-end: http://localhost:3000

⚙️ Back-end (API): http://localhost:8080

🗄️ MongoDB: rodando na porta padrão 27017

DESAFIOS DO PROJETO: -criação do docker file e do docker compose.(primeira vez usando o  docker compose).  -> Como foi resolvido: leitura da documentação no site oficial do docker e videos ensinando.
                     -conexão do banco de dados,frontend e back end.  

