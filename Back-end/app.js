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

    let listaCursos = cursos.getCursos()
    response.json(listaCursos)
    response.status(200)

})

app.get('/v1/lion-school/alunos', cors(), async function (request, response, next) {

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
app.get('/v1/lion-school/alunos/cursos/sigla', cors(), async function (request, response, next) {

    let curso = request.query.sigla

    let getCursoAluno = getCursos.getCursos(alunos)

    if (curso == undefined || curso == '' || curso == null) {
        response.status(404)
        response.json('sigla não identificada')
    }
    else if (curso == Number) {
        response.status(400)
    }
    else {
        response.json(getCursoAluno)
        response.status(200)
    }

})

app.get('/v1/lion-school/alunos/status/:status', cors(), async function (request, response, next) {

    let statusAluno = request.params.status
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