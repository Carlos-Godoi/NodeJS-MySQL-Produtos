// Importar módulo MySQL
const mysql = require('mysql2');

// Configuração de conexão
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto'
});

// Teste de conexxão
conexao.connect(function (erro) {
    if (erro) throw erro;
    console.log('Conexão efetuada com sucesso!');
});

// Exportar módulo
module.exports = conexao;