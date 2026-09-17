const express = require('express')
const app = express()
const porta = 3000
const cors = require('cors');

app.use(cors)
app.use(express.json)

app.post('/cadastrar', (req, res) =>{
    res.send("cadastro")
})

app.get('/', (req, res) =>{
    res.send("funcionou")
})

app.listen(porta, () =>{
    console.log('servidor rodando na porta: ' + porta)
})