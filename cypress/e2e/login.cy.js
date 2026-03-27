describe('Login - Automation Practice', () => {
  beforeEach(() => {
    cy.visitarLogin();
  });

  it('Login com sucesso', () => {
    cy.fazerLogin('usuario@test.com', 'senha123');
    cy.validarLoginSucesso();
  });

  it('Login com e-mail vazio', () => {
    cy.preencherSenhaLogin('senha123');
    cy.clicarBotaoLoginBtn();
    cy.validarErroLogin('E-mail inválido.');
  });

  it('Login com senha vazia', () => {
    cy.preencherEmailLogin('usuario@test.com');
    cy.clicarBotaoLoginBtn();
    cy.validarErroLogin('Senha inválida.');
  });

  it('Login com senha inválida', () => {
    cy.fazerLogin('usuario@test.com', '12345');
    cy.validarErroLogin('Senha inválida.');
  });

  it('Login com e-mail inválido', () => {
    cy.fazerLogin('emailinvalido', 'senha123');
    cy.validarErroLogin('E-mail inválido.');
  });

  it('"Link "Ainda não tem conta?"', () => {
    cy.contains('Ainda não tem conta?').should('be.visible').click();
    cy.validarRedirecionaRegistro();
  });
});
