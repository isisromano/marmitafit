// importar o express
const express = require("express");
import 'module-alias/register';

// criar o roteador
const router = express.Router();


//definir as rotas do roteador
router.get("/", (req, res) => {
  const pessoas = require('./database/pessoas.json')
  res.send(pessoas);
});
router.get('/:id',(req,res) =>{
  const id = req.params.id;
  const pessoas = require("./database/pessoas.json");
  const pessoa =  pessoas.find(p => p.id == id);
  if(pessoa ==  undefined){
    res.send("Pessoa inexistente")
  } else{
    res.send(pessoa)
  }
})
//exportar esse roteador
module.exports = router;