# Web Automation com Cypress

Projeto de automação de testes web com Cypress, focado em qualidade, manutenibilidade e evolução constante.

## Sobre o projeto

- Projeto criado e evoluído com apoio do GitHub Copilot (IA) para acelerar desenvolvimento, melhorar padrões de código e gerar práticas de teste modernas.
- Estrutura modular pensada para escalabilidade e facilidade de integração com pipelines CI/CD.
- Foco em boas práticas de teste, documentação clara e valor para recrutadores técnicos.

## 🚀 Tecnologias Utilizadas

- **Cypress** - Framework de testes E2E
- **Node.js** - Runtime JavaScript
- **JavaScript (CommonJS)** - Linguagem de programação
- **Page Objects + Custom Commands** - Arquitetura profissional

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

### Enviar Relatório por Email

**Opção 1: Anexar arquivo HTML**
```
Compacte: mochawesome-report/
E envie como anexo
```

**Opção 2: Enviar apenas o HTML**
```
Arquivo: mochawesome-report/mochawesome.html
Destinatário abre no navegador
```

**Opção 3: Compartilhar por Drive/Cloud**
```
Upload da pasta completa: mochawesome-report/
Compartilhe o link
```

## 🔧 Como Adicionar Novos Testes

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

## 📊 Relatórios e Screenshots

- **Screenshots**: Salvos automaticamente em `cypress/screenshots/`
- **Vídeos**: Capturados automaticamente (configurável)
- **Relatórios**: Integração possível com ferramentas como Allure ou Cypress Dashboard

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC.

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Desenvolvido com ❤️ para demonstração de boas práticas em automação de testes**
