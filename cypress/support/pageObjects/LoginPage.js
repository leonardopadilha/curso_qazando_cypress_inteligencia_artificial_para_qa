class LoginPage {
  visit() {
    cy.visit('https://automationpratice.com.br/login');
    return this;
  }

  // Getters de elementos
  get nomeOuEmailInput() {
    return cy.get('#user');
  }

  get senhaInput() {
    return cy.get('#password');
  }

  get botaoLogin() {
    return cy.get('#btnLogin');
  }

  get mensagemErro() {
    return cy.get('.invalid_input');
  }

  get mensagemSucesso() {
    return cy.get('#swal2-title');
  }

  // Ações atômicas
  preencherEmail(email) {
    this.nomeOuEmailInput.clear().type(email);
    return this;
  }

  preencherSenha(senha) {
    this.senhaInput.clear().type(senha);
    return this;
  }

  clicarBotaoLogin() {
    this.botaoLogin.click();
    return this;
  }

  // Fluxo completo
  fazerLogin(email, senha) {
    this.preencherEmail(email);
    this.preencherSenha(senha);
    this.clicarBotaoLogin();
    return this;
  }

  // Validações
  validarLoginComSucesso() {
    this.mensagemSucesso.should('be.visible').and('have.text', 'Login realizado');
    return this;
  }

  validarMensagemErro(mensagem) {
    this.mensagemErro.should('be.visible').and('contain.text', mensagem);
    return this;
  }

  validarUrlRegistro() {
    cy.url().should('include', '/register');
    return this;
  }
}

module.exports = new LoginPage();
