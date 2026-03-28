#!/usr/bin/env node

const open = require('open');
const path = require('path');
const fs = require('fs');

const reportPath = path.join(__dirname, '..', 'mochawesome-report', 'mochawesome.html');

// Verificar se o arquivo de relatório existe
if (!fs.existsSync(reportPath)) {
  console.error('❌ Relatório não encontrado!');
  console.error(`Caminho esperado: ${reportPath}`);
  console.error('Execute primeiro: npm test ou npm run test:report');
  process.exit(1);
}

// Abrir o relatório
open(reportPath)
  .then(() => {
    console.log('✅ Relatório aberto com sucesso!');
  })
  .catch((err) => {
    console.error('❌ Erro ao abrir relatório:', err.message);
    console.log(`Abra manualmente: ${reportPath}`);
    process.exit(1);
  });
