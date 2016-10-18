/**
 * Arquivo: models/livro.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável pelo modelo do 'Livro' para realizar a conexão com a base 
 *  de dados via Moongose.
 * Data: 18/10/2016
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Aqui vem a definição da esquema do 'Livro':
let LivroSchema = new Schema(
    {
        titulo: { type: String, required: true },
        autor:  { type: String, required: true },
        ano:    { type: Number, required: true },
        paginas: { type: Number, required: true },
        criadoEm: { type: Date, required: true }
    },
    {
        versionKey: false
    }
);

//Aqui irá setar o parâmetro 'criadoEm' para a data atual:
LivroSchema.pre('save', next => {
    dataAtual = new Date();
    if(!this.criadoEm) {
        this.criadoEm = dataAtual;
    }
    next();
});

//Aqui realizará a exportação do 'LivroSchema' para usar em qualquer lugar:
module.exports = mongoose.model('livro', LivroSchema);