import express from 'express'
let app = express()
import ConexaoDB from './conexao.js'
import bodyParser from 'body-parser'

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Configurar rotas
app.get('/', function (req, res){
    res.send("API do estudante")
})

//Get student
app.get('/student', function (req, res){
    ConexaoDB.getAllStudents(function(student){
        res.json(student)
    })
})

//Get c/ parametro
app.get('/student/:nome', function (req,res){
    let nome = req.params.nome
    ConexaoDB.getStudentsByName(nome, function(student){
        res.json(student)
    })
})

//Delete por id no json
app.delete('/student', function (req,res){
    let student = req.body
    console.log("Apagou o aluno com id: " + student)
    ConexaoDB.delete(student, function(affectedRows){
        res.json( {msg: 'Aluno apagado do registro'})
    })
})


//Post para salvar aluno
app.post('/student', function(req,res){
    let student = req.body
    ConexaoDB.save(student, function(student){
        res.json(student)
    })
})


//Put atualizar
app.put('/student', function(req,res) {
    let student = req.body
    ConexaoDB.update(student, function(student){
        res.json({msg:'Cadastro atualizado'})
    })
})

//Iniciando o servidor
let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("servidor iniciado em http://%s:%s", host, port)
})