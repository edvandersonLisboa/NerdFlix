const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');
//Rotas
//Pegar todos os registros
router.get('/', async (req, res) => {
    //regra de negocio
    try{
        const filmes = await Filme.find({});
        res.json({error: false, filmes})
    }catch(err){
        res.json({error: true, message: err.message});
    }
})

//Pegar somente o Registro com ID
router.get('/:id',async (req, res) => {
    try{
        const id = req.params.id;
        const filme = await Filme.findById(id);
        res.json( res.json({error: false, filme}))

    }catch(err){
        res.json({error: true, message: err.message});
    }
    

    //regra de negocio
    
})

// Criar um Registro
router.post('/', async (req, res) => {
    try{
        const filme = req.body;
        const response = await new Filme(filme).save();
//regra de negocio
        res.json({error: false, filme: response});
    
    }catch (err){
        res.json({error: true, message: err.message});
    }   
    
});
// Atualizar somente registro com ID
router.put('/:id',async(req, res) => {
    try{
        const id = req.params.id;
        const novo_filme = req.body;
        
        const filme = await Filme.findByIdAndUpdate(id,novo_filme);
        res.json({error: false, filme})
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

router.delete('/:id',async(req, res) => {
    try{
        const id = req.params.id;
        await Filme.findByIdAndDelete(id);
        res.json({error: false})
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

module.exports = router;
