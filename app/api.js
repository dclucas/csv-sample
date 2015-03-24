var harvester = require('harvesterjs');
var config = require('./config');
var requireDir = require('require-dir');
var models = requireDir('./models');

var options = {
    adapter: 'mongodb',
    connectionString: config.connectionString,
    inflect: true
};

var harvesterApp = harvester(options);
/*
for (var m in models) {
    harvesterApp.resource(m, models[m]);
}
*/

harvesterApp.resource('revenue', {
    filial: String,
    codigo: String,
    mercadoria: String,
    documento: String,
    data: String,
    vcto: String,
    codcli: String,
    cliente: String,
    tipo: String,
    qtde: String,
    unitario: String,
    total: String,
    cod_historico: String,
    historico: String,
    cidade: String,
    uf: String,
    movto: String,
    telefone: String,
    cpf: String
});

module.exports = harvesterApp;