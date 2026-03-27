class RegisterPage {
  visit() {
    cy.visit('https://automationpratice.com.br/register');
    return this;
  }

  // Getters de elementos
  get nomeInput() {
    return cy.get('#user');
  }

  get emailInput() {
    return cy.get('#email');
  }

  get senhaInput() {
    return cy.get('#password');
  }

  get botaoCadastro() {
    return cy.get('#btnRegister');
  }

  get mensagemErro() {
    return cy.get('.errorLabel');
  }

  get mensagemSucesso() {
    return cy.get('#swal2-title');
  }

  // Ações atômicas
  preencherNome(nome) {
    this.nomeInput.clear().type(nome);
    return this;
  }

  preencherEmail(email) {
    this.emailInput.clear().type(email);
    return this;
  }

  preencherSenha(senha) {
    this.senhaInput.clear().type(senha);
    return this;
  }

  clicarBotaoCadastro() {
    this.botaoCadastro.click();
    return this;
  }

  // Fluxo completo
  fazerCadastro(nome, email, senha) {
    this.preencherNome(nome);
    this.preencherEmail(email);
    this.preencherSenha(senha);
    this.clicarBotaoCadastro();
    return this;
  }

  // Validações
  validarCadastroComSucesso() {
    this.mensagemSucesso.should('be.visible').and('have.text', 'Cadastro realizado!');
    return this;
  }

  validarMensagemErro(mensagem) {
    this.mensagemErro.should('be.visible').and('contain.text', mensagem);
    return this;
  }
}

module.exports = new RegisterPage();
