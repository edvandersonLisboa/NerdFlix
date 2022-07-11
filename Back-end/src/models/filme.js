const mongoose = require('mongoose');

const Filme = mongoose.model('filmes',{
    titulo: {
        type:String,
        required:true
    },
    atores:Array,
    ano:{
        type:Number,
        required:true
    },
    detalhes:Object,
    premiacoes:[Object]
});

module.exports = Filme;