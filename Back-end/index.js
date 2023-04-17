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
    

app.get('/v1/lion-school/alunos', cors(), async function (request, response, next) {

    let statusCode
    let alunosJson = {}

    let nomeCurso = request.query.curso
    let statusAluno = request.query.status
    let anoConclusao = request.query.ano


     if ( !isNaN(statusAluno) || !isNaN(nomeCurso) || statusAluno == '' || nomeCurso == ''){
    
        statusCode = 400
        alunosJson.message = 'Não foi possível processar pois os dados de entrada enviados não correspondem ao exigido.'
        
    } 
    
    //Se não possui query, retorna todos os alunos
    else if (nomeCurso == undefined && statusAluno == undefined && anoConclusao == undefined) {

        let alunoss = alunos.getAlunos()
        console.log('todos');

        if (alunoss) {
            statusCode = 200
            alunosJson = alunoss
        } else {
            statusCode = 500
            alunosJson.message = 'Não foi possível obter uma resposta.'
        }

    //Filtra os alunos pela sigla do curso
    } else if (nomeCurso != null && statusAluno == undefined && anoConclusao == undefined) {

        let alunoss = alunos.getAlunosCurso(nomeCurso)
        console.log('sigla');

        if (alunoss) {
            statusCode = 200
            alunosJson = alunoss
        } else {
            statusCode = 404
            alunosJson.message = 'Não foi possível obter uma resposta.'
        }


    }

    //Filtra os alunos pelo status
    else if (statusAluno != null && nomeCurso == undefined || anoConclusao == undefined) {

        let alunosPorStatus = alunos.getAlunosStatus(statusAluno)
        console.log('status');

        if (alunosPorStatus) {
            statusCode = 200
            alunosJson = alunosPorStatus
        } else {
            statusCode = 404
            alunosJson.message = 'Não foi possível obter uma resposta.'
        }


    } else if (anoConclusao != null && statusAluno == undefined && nomeCurso == undefined) {
        let alunoss = alunos.getAlunoPeloAno(anoConclusao)
        console.log('ano');

        if (alunoss) {
            statusCode = 200
            alunosJson = alunoss
        } else {
            statusCode = 404
            alunosJson.message = 'Não foi possível obter uma resposta.'
        }   
    }

    response.json(alunosJson)
    response.status(statusCode)



    // console.log('teste');
    // let listaAlunos = alunos.getAlunos()
    // response.json(listaAlunos)
    // response.status(200)
    


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



app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080');
})