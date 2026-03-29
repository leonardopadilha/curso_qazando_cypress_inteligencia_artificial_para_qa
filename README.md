# 🚀 Automação de Testes com Cypress + IA (GitHub Copilot)

## 📌 Sobre o projeto
Este projeto foi desenvolvido com o objetivo de explorar o uso de Inteligência Artificial no apoio à automação de testes utilizando Cypress.

A proposta foi entender, na prática, como ferramentas como o GitHub Copilot podem acelerar a escrita de testes, sugerir cenários e auxiliar na estruturação do código.

---

## 🎯 Objetivo
- Praticar automação de testes com Cypress
- Explorar o uso de IA no dia a dia de QA
- Avaliar ganhos de produtividade com o Copilot
- Desenvolver pensamento crítico sobre código gerado por IA

---

## 🧠 Onde a IA foi utilizada
Durante o desenvolvimento, o GitHub Copilot foi utilizado para:
- Sugerir comandos e estruturas de testes
- Acelerar a escrita de cenários
- Auxiliar na criação de funções e validações

⚠️ Importante: todo o código sugerido foi revisado antes de ser utilizado.

---

## ⚙️ Tecnologias utilizadas
- Cypress
- JavaScript
- GitHub Copilot

---

## 📂 Estrutura do projeto
- `cypress/e2e` → Testes automatizados
- `cypress/support` → Comandos customizados
- `fixtures` → Dados mockados

---

## 📊 Aprendizados
- IA acelera o desenvolvimento, mas não substitui o conhecimento técnico
- Nem toda sugestão do Copilot é ideal — revisão é essencial
- Estruturação de testes continua sendo responsabilidade do QA
- Automação vai além de escrever código — envolve estratégia

---

## 🏗️ Arquitetura - Page Objects + Custom Commands

Este projeto utiliza uma arquitetura profissional que combina **Page Objects** e **Custom Commands**:

### Page Objects
Classes que encapsulam elementos e ações de cada página:
- Centralizam seletores de elementos
- Contêm métodos de ação (preencher, clicar, validar)
- Implementam Fluent API para encadeamento

### Custom Commands
Comandos reutilizáveis que chamam os Page Objects:
- `cy.fazerLogin()` - Fluxo completo de login
- `cy.fazerCadastro()` - Fluxo completo de cadastro
- `cy.validarLoginSucesso()` - Validações específicas

### Fluxo de Execução
```
Teste (.cy.js) → Custom Command → Page Object → Elemento
```

## 📁 Estrutura Atual

```
web-automation-cypress/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js          # Testes de login (usando Custom Commands)
│   │   └── register.cy.js       # Testes de cadastro (usando Custom Commands)
│   ├── support/
│   │   ├── e2e.js               # Custom Commands
│   │   └── pageobjects/
│   │       ├── LoginPage.js     # Page Object - Login
│   │       └── RegisterPage.js  # Page Object - Cadastro
│   ├── fixtures/
│   ├── screenshots/
│   └── config.js
├── cypress.config.js     # Configuração do Cypress
├── package.json          # Dependências
└── README.md
```

## 🧪 Casos de Teste Implementados

### Login
- ✅ Login com sucesso
- ❌ Login com e-mail vazio
- ❌ Login com senha vazia
- ❌ Login com senha inválida
- ❌ Login com e-mail inválido
- 🔗 Link "Ainda não tem conta?"

### Cadastro
- ✅ Cadastro com sucesso
- ❌ Erro quando nome não preenchido
- ❌ Erro quando e-mail inválido
- ❌ Erro quando e-mail vazio
- ❌ Erro quando senha vazia
- ❌ Senha com menos de 6 dígitos
- ✅ Cadastro com senha de 6 caracteres (boundary)
- 🛡️ Proteção contra double-click

## Prompts utilizados no desenvolvimento

### Prompt para criação do projeto inicial
```
Crie um projeto de automação de testes web com Cypress do zero, incluindo:
- Estrutura de pastas organizada
- Arquivo de configuração do Cypress
- Teste básico de login
- Teste básico de registro
- README profissional
- package.json com scripts necessários
```

### Prompts para criação dos arquivos de teste

#### Arquivo login.cy.js
```
Crie pra mim nesse arquivo, os testes de login, o mais simples possível, com describe e com os ITs somente.

A aplicação para os testes é: https://automationpratice.com.br/login

O campo email tem o id #user, o campo senha tem o id #password e o botão de entrar tem o id #btnLogin.

O login com sucesso, após preencher tudo com uma senha com mais de 6 dígitos aparece um popup com mensagem "Login realizado", com o id "swal2-title.

Se algum campo não for preenchido aparece a mensagem com class .invalid_input, com a mensagem "E-mail inválido." ou "Senha inválida."

O link "Ainda não tem conta?" deve ir para a tela de cadastro. Faa a maior quantidade de cenários possíveis da forma mais simples.
```

#### Arquivo register.cy.js
```
Crie para mim em um novo arquivo (register.cy.js), os testes de cadastro de usuário o mais simples possível, com o describe e com os ITs somente.

A aplicação para os testes é : https://automationpratice.com.br/register

O campo nome tem o id #user, o campo email tem o id #email, o campo senha tem o id #password, e o botão de cadastrar tem o id #btnRegister.

O cadastro com sucesso, após preencher tudo com uma senha com mais de 6 dígitos aparece um pop-up com a mensagem "Cadastro realizado!", com o id #swal2-title.

Se algum campo não for preenchido aparece a mensagem com a class .errorLabel, com a mensagem "O campo nome deve ser preenchido" ou "O campo e-mail deve ser preenchido corretamente" ou "O campo senha deve ter pelo menos 6 dígitos"
```

### Prompt para implementação da arquitetura Page Objects + Custom Commands
```
Crie as páginas de page objects, depois crie os commands chamandos as funções do page objects e nos arquivos .cy.js chame os commands criados.
```

## 🎯 Benefícios da Arquitetura Atual

| Aspecto | Benefício |
|---------|-----------|
| **Manutenibilidade** | Seletores centralizados em Page Objects |
| **Reutilização** | Custom Commands podem ser usados em múltiplos testes |
| **Legibilidade** | Testes leem como histórias de usuário |
| **Escalabilidade** | Fácil adicionar novas páginas e comandos |
| **Manutenção** | Mudanças de UI afetam apenas Page Objects |

## Instalação e Execução

### Instalar dependências
```bash
npm install
```

### Abrir o Cypress (modo interativo)
```bash
npm run cypress:open
```

### Executar testes em modo headless
```bash
npm test
```

## 📋 Scripts Disponíveis

```json
{
  "scripts": {
    "test": "npx cypress run",
    "cy:open": "npx cypress open",
    "test:report": "npx cypress run && npm run report:open"
  }
}
```

## 📊 Sistema de Relatórios

Este projeto inclui um sistema profissional de relatórios com **cypress-mochawesome-reporter**.

### Executar Testes e Gerar Relatório

```bash
npm run test:report
```

Este comando:
- ✅ Executa todos os testes
- ✅ Gera relatório HTML automático
- ✅ Abre o relatório no navegador automaticamente

### O relatório inclui:

- 📈 **Gráficos e Charts** - Visualização de resultados com gráficos de pizza, barras e timeline
- 📋 **Resumo Geral** - Total de testes, passados, falhados e taxa de sucesso
- 🔍 **Detalhes por Teste** - Nome, status, tempo de execução e mensagens de erro
- 📸 **Screenshots** - Capturadas automaticamente em testes que falham
- ⏱️ **Tempo de Execução** - Duração total e por teste
- 🌐 **Informações Técnicas** - Browser, versão do Cypress e data/hora da execução

### Localização do Relatório

Após a execução, o relatório estará em:
```
mochawesome-report/mochawesome.html
```

## � Integração com GitHub Actions

O projeto já possui um workflow configurado em:
- `.github/workflows/cypress.yml`

### O que acontece no CI
- Checkout do repositório
- Setup Node.js (`18.x` por padrão)
- `npm install`
- `npm test` (executa Cypress em modo headless)
- Upload de artefatos em caso de sucesso/falha:
  - `cypress-screenshots`
  - `mochawesome-report`

### Como disparar manualmente
No GitHub, vá em: `Actions` -> `Cypress Tests` -> `Run workflow`.

### Adicionar novas branches
No arquivo `.github/workflows/cypress.yml`, ajuste o gatilho em:
```yaml
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
```

## �🔧 Como Adicionar Novos Testes

### 1. Criar Page Object
```javascript
// cypress/support/pageobjects/NovaPaginaPage.js
class NovaPaginaPage {
  get elemento() {
    return cy.get('#seletor');
  }

  acao() {
    this.elemento.click();
    return this;
  }
}

module.exports = new NovaPaginaPage();
```

### 2. Adicionar Custom Commands
```javascript
// Em cypress/support/e2e.js
const NovaPaginaPage = require('./pageobjects/NovaPaginaPage');

Cypress.Commands.add('novaAcao', () => {
  NovaPaginaPage.acao();
});
```

### 3. Usar nos Testes
```javascript
// Em cypress/e2e/novo-teste.cy.js
describe('Novo Teste', () => {
  it('Cenário', () => {
    cy.novaAcao();
  });
});
```

## 🌐 URLs de Teste

- **Login**: https://automationpratice.com.br/login
- **Cadastro**: https://automationpratice.com.br/register

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 💡 Conclusão
Este projeto reforçou que a IA pode ser uma grande aliada no processo de automação de testes, desde que utilizada com senso crítico.

---

## 👨‍💻 Autor
Leonardo Padilha  
[LinkedIn](https://www.linkedin.com/in/leonardo-luiz-padilha/)  
