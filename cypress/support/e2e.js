// Import dos Page Objects
const LoginPage = require('./pageObjects/LoginPage');
const RegisterPage = require('./pageObjects/RegisterPage');

// ========== LOGIN COMMANDS ==========
Cypress.Commands.add('visitarLogin', () => {
  LoginPage.visit();
});

Cypress.Commands.add('fazerLogin', (email, senha) => {
  LoginPage.visit();
  LoginPage.preencherEmail(email);
  LoginPage.preencherSenha(senha);
  LoginPage.clicarBotaoLogin();
});

Cypress.Commands.add('preencherEmailLogin', (email) => {
  LoginPage.preencherEmail(email);
});

Cypress.Commands.add('preencherSenhaLogin', (senha) => {
  LoginPage.preencherSenha(senha);
});

Cypress.Commands.add('clicarBotaoLoginBtn', () => {
  LoginPage.clicarBotaoLogin();
});

Cypress.Commands.add('validarLoginSucesso', () => {
  LoginPage.validarLoginComSucesso();
});

Cypress.Commands.add('validarErroLogin', (mensagem) => {
  LoginPage.validarMensagemErro(mensagem);
});

Cypress.Commands.add('validarRedirecionaRegistro', () => {
  LoginPage.validarUrlRegistro();
});

// ========== REGISTER COMMANDS ==========
Cypress.Commands.add('visitarCadastro', () => {
  RegisterPage.visit();
});

Cypress.Commands.add('fazerCadastro', (nome, email, senha) => {
  RegisterPage.visit();
  RegisterPage.preencherNome(nome);
  RegisterPage.preencherEmail(email);
  RegisterPage.preencherSenha(senha);
  RegisterPage.clicarBotaoCadastro();
});

Cypress.Commands.add('preencherNomeCadastro', (nome) => {
  RegisterPage.preencherNome(nome);
});

Cypress.Commands.add('preencherEmailCadastro', (email) => {
  RegisterPage.preencherEmail(email);
});

Cypress.Commands.add('preencherSenhaCadastro', (senha) => {
  RegisterPage.preencherSenha(senha);
});

Cypress.Commands.add('clicarBotaoCadastroBtn', () => {
  RegisterPage.clicarBotaoCadastro();
});

Cypress.Commands.add('validarCadastroSucesso', () => {
  RegisterPage.validarCadastroComSucesso();
});

Cypress.Commands.add('validarErroCadastro', (mensagem) => {
  RegisterPage.validarMensagemErro(mensagem);
});
// Este arquivo é carregado antes de cada teste
