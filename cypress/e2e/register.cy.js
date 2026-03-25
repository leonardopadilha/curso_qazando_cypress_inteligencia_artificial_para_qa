describe('Cadastro - Automation Practice', () => {
  beforeEach(() => {
    cy.visit('https://automationpratice.com.br/register');
  });

  it('Cadastro com sucesso', () => {
    cy.get('#user').clear().type('Nome Teste');
    cy.get('#email').clear().type('usuario@test.com');
    cy.get('#password').clear().type('senha123');
    cy.get('#btnRegister').click();
    cy.get('#swal2-title').should('be.visible').and('have.text', 'Cadastro realizado!');
  });

  it('Erro quando nome não for preenchido', () => {
    cy.get('#email').clear().type('usuario@test.com');
    cy.get('#password').clear().type('senha123');
    cy.get('#btnRegister').click();
    cy.get('.errorLabel').should('be.visible').and('contain.text', 'O campo nome deve ser prenchido');
  });

  it('Erro quando e-mail não for preenchido corretamente', () => {
    cy.get('#user').clear().type('Nome Teste');
    cy.get('#email').clear().type('email-invalido');
    cy.get('#password').clear().type('senha123');
    cy.get('#btnRegister').click();
    cy.get('.errorLabel').should('be.visible').and('contain.text', 'O campo e-mail deve ser prenchido corretamente');
  });

  it('Erro quando e-mail não for preenchido', () => {
    cy.get('#user').clear().type('Nome Teste');
    cy.get('#password').clear().type('senha123');
    cy.get('#btnRegister').click();
    cy.get('.errorLabel').should('be.visible').and('contain.text', 'O campo e-mail deve ser prenchido');
  });

    it('Erro quando senha não for preenchida', () => {
    cy.get('#user').clear().type('Nome Teste');
    cy.get('#email').clear().type('usuario@test.com');
    cy.get('#btnRegister').click();
    cy.get('.errorLabel').should('be.visible').and('contain.text', 'O campo senha deve ter pelo menos 6 dígitos');
  });

  it('Senha com menos de 6 dígitos', () => {
    cy.get('#user').clear().type('Nome Teste');
    cy.get('#email').clear().type('usuario@test.com');
    cy.get('#password').clear().type('12345');
    cy.get('#btnRegister').click();
    cy.get('.errorLabel').should('be.visible').and('contain.text', 'O campo senha deve ter pelo menos 6 dígitos');
  });

  it('Cadastro com sucesso com senha de 6 caracteres (boundary)', () => {
    cy.get('#user').clear().type('Teste Boundary');
    cy.get('#email').clear().type('boundary@test.com');
    cy.get('#password').clear().type('123456');
    cy.get('#btnRegister').click();
    cy.get('#swal2-title').should('be.visible').and('have.text', 'Cadastro realizado!');
  });

  it('Protege contra double-click no botão registrar', () => {
    cy.get('#user').clear().type('Nome Teste');
    cy.get('#email').clear().type('doubleclick@test.com');
    cy.get('#password').clear().type('senha123');
    cy.get('#btnRegister').dblclick();
    cy.get('#swal2-title').should('be.visible').and('have.text', 'Cadastro realizado!');
    cy.get('#swal2-title').should('have.length', 1);
  });
});