const express = require(`express`);
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();

const filmes = require('./src/routes/filmes.routes');
mongoose.connect('mongodb://localhost:27017/nerdflix',{
    useUnifiedTopology:true,
}); 



//Variavel de ambientes node
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/filmes',filmes);


app.listen(3000, () => {
    console.log(`Meu servvidor está funcionando`);
})
