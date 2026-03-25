# Web Automation com Cypress

Projeto de automação de testes web com Cypress, focado em qualidade, manutenibilidade e evolução constante.

## Sobre o projeto

- Projeto criado e evoluído com apoio do GitHub Copilot (IA) para acelerar desenvolvimento, melhorar padrões de código e gerar práticas de teste modernas.
- Estrutura modular pensada para escalabilidade e facilidade de integração com pipelines CI/CD.
- Foco em boas práticas de teste, documentação clara e valor para recrutadores técnicos.

## Estrutura

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
