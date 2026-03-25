describe('Login - Automation Practice', () => {
  beforeEach(() => {
    cy.visit('https://automationpratice.com.br/login');
  });

  it('Login com sucesso', () => {
    cy.get('#user').clear().type('usuario@test.com');
    cy.get('#password').clear().type('senha123');
    cy.get('#btnLogin').click();
    cy.get('#swal2-title').should('be.visible').and('have.text', 'Login realizado');
  });

  it('Login com e-mail vazio', () => {
    cy.get('#password').clear().type('senha123');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('be.visible').and('contain.text', 'E-mail inválido.');
  });

  it('Login com senha vazia', () => {
    cy.get('#user').clear().type('usuario@test.com');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('be.visible').and('contain.text', 'Senha inválida.');
  });

  it('Login com senha inválida', () => {
    cy.get('#user').clear().type('usuario@test.com');
    cy.get('#password').clear().type('12345');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('be.visible').and('contain.text', 'Senha inválida.');
  });

  it('Login com e-mail inválido', () => {
    cy.get('#user').clear().type('emailinvalido');
    cy.get('#password').clear().type('senha123');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('be.visible').and('contain.text', 'E-mail inválido.');
  });

  it('"Link "Ainda não tem conta?"', () => {
    cy.contains('Ainda não tem conta?').should('be.visible').click();
    cy.url().should('include', '/register');
  });
});
