describe('Cadastro - Automation Practice', () => {
  beforeEach(() => {
    cy.visitarCadastro();
  });

  it('Cadastro com sucesso', () => {
    cy.fazerCadastro('Nome Teste', 'usuario@test.com', 'senha123');
    cy.validarCadastroSucesso();
  });

  it('Erro quando nome não for preenchido', () => {
    cy.preencherEmailCadastro('usuario@test.com');
    cy.preencherSenhaCadastro('senha123');
    cy.clicarBotaoCadastroBtn();
    cy.validarErroCadastro('O campo nome deve ser prenchido');
  });

  it('Erro quando e-mail não for preenchido corretamente', () => {
    cy.fazerCadastro('Nome Teste', 'email-invalido', 'senha123');
    cy.validarErroCadastro('O campo e-mail deve ser prenchido corretamente');
  });

  it('Erro quando e-mail não for preenchido', () => {
    cy.preencherNomeCadastro('Nome Teste');
    cy.preencherSenhaCadastro('senha123');
    cy.clicarBotaoCadastroBtn();
    cy.validarErroCadastro('O campo e-mail deve ser prenchido');
  });

  it('Erro quando senha não for preenchida', () => {
    cy.preencherNomeCadastro('Nome Teste');
    cy.preencherEmailCadastro('usuario@test.com');
    cy.clicarBotaoCadastroBtn();
    cy.validarErroCadastro('O campo senha deve ter pelo menos 6 dígitos');
  });

  it('Senha com menos de 6 dígitos', () => {
    cy.fazerCadastro('Nome Teste', 'usuario@test.com', '12345');
    cy.validarErroCadastro('O campo senha deve ter pelo menos 6 dígitos');
  });

  it('Cadastro com sucesso com senha de 6 caracteres (boundary)', () => {
    cy.fazerCadastro('Teste Boundary', 'boundary@test.com', '123456');
    cy.validarCadastroSucesso();
  });

  it('Protege contra double-click no botão registrar', () => {
    cy.preencherNomeCadastro('Nome Teste');
    cy.preencherEmailCadastro('doubleclick@test.com');
    cy.preencherSenhaCadastro('senha123');
    cy.get('#btnRegister').dblclick();
    cy.validarCadastroSucesso();
    cy.get('#swal2-title').should('have.length', 1);
  });
});