/* Projeto: Construir API para a escola 'Lion School' */
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const getCursos = require('./apis/cursos.js')
const alunos = require('./apis/alunos.js')



app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS')
    app.use(cors())
    next()
})

app.get('/v1/lion-school/cursos', cors(), async function (request, response, next) {

    let cursosOferecidos = {}
    let listaCursos = getCursos.getCursos()
    cursosOferecidos = listaCursos
    response.json(cursosOferecidos)
    response.status(200)

})

app.get('/v1/lion-school/alunos/cursos', cors(), async function (request, response, next) {
    
    console.log(('query'));
    let statusDoAluno = request.query.status
    let cursoDoAluno = request.query.siglaCurso
    let anoDoAluno = request.query.anoDeConclusao
    let listaAlunos
    let status
    if (statusDoAluno == undefined && cursoDoAluno == undefined && anoDoAluno == undefined) {
        listaAlunos = alunosLionSchool.getAlunos()
        status = true
    }
    else if (statusDoAluno != undefined) {
        listaAlunos = alunosLionSchool.getAlunosStatus(statusDoAluno)
        status = true
    }
    else if(anoDoAluno != undefined){
        listaAlunos = alunosLionSchool.getAlunoPeloAno(anoDoAluno)
        status = true
    }
    else {
        listaAlunos = alunosLionSchool.getAlunosCurso(cursoDoAluno)
        if (listaAlunos == true) {
            listaAlunos
            status = true
        }
    }
    if(listaAlunos == false){
        response.status(404)
        response.json('erro')
        
    }
    else{
        response.json(listaAlunos)
        response.status(200)
    }
  
})
    

app.get('/v1/lion-school/alunos', cors(), async function (request, response, next) {

    console.log('teste');
    let listaAlunos = alunos.getAlunos()
    response.json(listaAlunos)
    response.status(200)
 
    
})
    

app.get('/v1/lion-school/alunos/:matricula', cors(), async function (request, response, next) {

    let numeroMatricula = request.params.matricula

    let getAlunosMatricula = alunos.getAlunoPelaMatricula(numeroMatricula)

    if (getAlunosMatricula == undefined || getAlunosMatricula == '') {
        response.status(400)
        response.json('a matricula não indentificada')
    }
    else {
        response.json(getAlunosMatricula)
        response.status(200)
    }


})


app.get('/v1/lion-school/alunos/status', cors(), async function (request, response, next) {

    let statusAluno = request.query.status
    let getAluno = alunos.getAlunosStatus(statusAluno)

    if (getAluno == null || getAluno == ' ' || getAluno == undefined) {
        response.json('status não indentificado')
        response.status(404)
    }
    else {
        response.json(getAluno)
        response.status(200)
    }

})


app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080');
})