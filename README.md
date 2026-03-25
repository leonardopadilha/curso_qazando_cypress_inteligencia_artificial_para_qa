# Web Automation com Cypress

Projeto de automação de testes web com Cypress, focado em qualidade, manutenibilidade e evolução constante.

## Sobre o projeto

- Projeto criado e evoluído com apoio do GitHub Copilot (IA) para acelerar desenvolvimento, melhorar padrões de código e gerar práticas de teste modernas.
- Estrutura modular pensada para escalabilidade e facilidade de integração com pipelines CI/CD.
- Foco em boas práticas de teste, documentação clara e valor para recrutadores técnicos.

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
```
web-automation-cypress/
├── cypress/
│   ├── e2e/              # Arquivos de teste
│   ├── fixtures/         # Dados de teste
│   └── support/          # Suporte global
├── cypress.config.js     # Configuração do Cypress
└── package.json          # Dependências
```

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

## Criar um novo teste

Todo arquivo de teste deve estar em `cypress/e2e/` e terminar com `.cy.js`.

Exemplo básico:

```javascript
describe('Meu Teste', () => {
  it('Deve fazer algo', () => {
    cy.visit('https://exemplo.com');
    cy.get('selector').should('be.visible');
  });
});
```

## Comandos Cypress mais usados

- `cy.visit()` - Acessar uma URL
- `cy.get()` - Selecionar elementos
- `cy.click()` - Clicar em um elemento
- `cy.type()` - Digitar texto
- `cy.should()` - Fazer uma asserção
- `cy.contains()` - Encontrar por texto

## Próximos passos

- Adicionar mais testes em `cypress/e2e/`
- Configurar `baseUrl` no `cypress.config.js`
- Adicionar dados de teste em `cypress/fixtures/`
- Estender suporte global em `cypress/support/e2e.js`
