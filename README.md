# ⚡ DevPulse

### Plataforma de Monitoramento e Desempenho de APIs

O **DevPulse** é um projeto de monitoramento de APIs desenvolvido com **Node.js e TypeScript**, criado para acompanhar respostas HTTP, medir tempos de resposta e identificar falhas de conexão.

O projeto tem como objetivo explorar conceitos de desenvolvimento backend, programação assíncrona, comunicação HTTP e monitoramento de desempenho.

> 🚧 **Status:** Em desenvolvimento — Primeira versão do monitoramento funcional.

---

## 🎯 Sobre o Projeto

As APIs são componentes fundamentais das aplicações modernas. Monitorar sua disponibilidade e seus tempos de resposta permite identificar problemas de conectividade e desempenho.

O DevPulse busca oferecer uma solução simples, organizada e extensível para monitorar diferentes endpoints HTTP.

O desenvolvimento está sendo realizado de forma incremental, com foco em boas práticas, organização de código e fundamentos de engenharia de software.

## ✨ Funcionalidades

### ✅ Implementadas

- **Monitoramento HTTP:** Realização de requisições utilizando a Fetch API.
- **Medição de latência:** Cálculo do tempo de resposta com `performance.now()`.
- **Status HTTP:** Identificação dos códigos de resposta dos servidores.
- **Múltiplas APIs:** Monitoramento de diferentes endereços utilizando funções reutilizáveis.
- **Tratamento de erros:** Captura de falhas de conexão com `try/catch`.
- **Resultados no terminal:** Exibição de status e latência de cada API.
- **TypeScript:** Utilização de tipagem estática durante o desenvolvimento.

### 🚀 Planejadas

- Monitoramento automático em intervalos configuráveis.
- Classificação de respostas HTTP e relatórios de falhas.
- Armazenamento do histórico de monitoramento.
- API REST utilizando Express.js.
- Integração com PostgreSQL.
- Dashboard em React com gráficos de desempenho.
- Testes automatizados.
- Containerização com Docker.
- Alertas de indisponibilidade.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| TypeScript | Linguagem principal |
| Node.js | Ambiente de execução |
| Fetch API | Requisições HTTP |
| Performance API | Medição de latência |
| Git e GitHub | Versionamento de código |

**Tecnologias planejadas:** Express.js, PostgreSQL, React e Docker.

---

## 📁 Estrutura do Projeto

```text
devpulse/
├── backend/
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
├── .gitignore
└── README.md
```

---

## ⚙️ Como Executar

### Pré-requisitos

- Node.js 24 ou superior
- npm
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/NatsFJ/devpulse.git
```

### 2. Acesse a pasta do backend

```bash
cd devpulse/backend
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o monitoramento

```bash
node src/index.ts
```

---

## 📊 Exemplo de Funcionamento

```text
DevPulse 1

API: https://api.github.com | Status: 200 | Latência: 44.53 ms
API: https://example.com | Status: 200 | Latência: 46.46 ms
API: https://www.google.com | Status: 200 | Latência: 204.93 ms
```

*Os tempos de resposta variam conforme as condições da rede e o desempenho dos servidores.*

---

## 🧠 Conceitos Aplicados

Durante o desenvolvimento do DevPulse, são explorados conceitos importantes de programação e desenvolvimento backend:

- Programação assíncrona com `async/await`.
- Requisições e respostas HTTP.
- Funções com parâmetros e reutilização de código.
- Tratamento de exceções com `try/catch`.
- Medição de desempenho.
- Tipagem estática com TypeScript.
- Execução concorrente de requisições HTTP.

---

## 🗺️ Roadmap

### Fase 1 — Monitoramento inicial

- [x] Configuração do Node.js e TypeScript
- [x] Implementação de requisições HTTP
- [x] Medição do tempo de resposta
- [x] Identificação de status HTTP
- [x] Tratamento básico de erros
- [x] Monitoramento de múltiplas APIs
- [x] Identificação das URLs nos resultados
- [ ] Melhorias no tratamento e na identificação de falhas

### Fase 2 — Backend

- [ ] Monitoramento periódico e automatizado
- [ ] Histórico de monitoramentos
- [ ] Desenvolvimento de API REST com Express.js
- [ ] Integração com PostgreSQL
- [ ] Organização da arquitetura do backend

### Fase 3 — Plataforma web

- [ ] Desenvolvimento do frontend com React
- [ ] Dashboard com indicadores de desempenho
- [ ] Gráficos de latência e disponibilidade
- [ ] Sistema de alertas
- [ ] Testes automatizados
- [ ] Containerização com Docker
- [ ] Deploy da aplicação

---

## 👨‍💻 Desenvolvedor

**Natanael Félix**

Desenvolvedor Full Stack | Foco em Backend Node.js e TypeScript

- **GitHub:** https://github.com/NatsFJ
- **LinkedIn:** https://www.linkedin.com/in/natanael-felix-a081b4274/

---

**DevPulse — Monitore APIs. Analise o desempenho. Desenvolva com confiabilidade.**
