/*
Projeto: Construir API para a escola 'Lion School'
contruindo as funções dentro da api
*/
var alunos = [

    {
        "foto": "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
        "nome": "Aline de Almeida Campos",
        "matricula": "20151001001",
        "sexo": "F",
        "curso": [
            {
                "nome": "001 - Técnico em Redes de Computadores",
                "sigla": "RDS",
                "icone": "https://img.icons8.com/ultraviolet/344/thin-client.png",
                "carga": "1200",
                "conclusao": "2024",
                "disciplinas": [
                    {
                        "nome": "Sistemas Operacionais",
                        "carga": "75",
                        "media": "80",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Introdução a Redes",
                        "carga": "75",
                        "media": "93",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Introdução a Nuvem",
                        "carga": "120",
                        "media": "68",
                        "status": "Exame"
                    },
                    {
                        "nome": "Hardware",
                        "carga": "75",
                        "media": "74",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Servições de Redes",
                        "carga": "240",
                        "media": "85",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Cabeamento Estruturado",
                        "carga": "150",
                        "media": "59",
                        "status": "Exame"
                    }
                ]
            },
        ],
        "status": "Cursando"
    },
    {
        "foto": "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
        "nome": "Ana Carolina Vasconcelos Barreto",
        "matricula": "20151001002",
        "sexo": "F",
        "curso": [
            {
                "nome": "001 - Técnico em Redes de Computadores",
                "sigla": "RDS",
                "icone": "https://img.icons8.com/ultraviolet/344/thin-client.png",
                "carga": "1200",
                "conclusao": "2023",
                "disciplinas": [
                    {
                        "nome": "Sistemas Operacionais",
                        "carga": "75",
                        "media": "52",
                        "status": "Exame"
                    },
                    {
                        "nome": "Introdução a Redes",
                        "carga": "75",
                        "media": "87",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Introdução a Nuvem",
                        "carga": "120",
                        "media": "70",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Hardware",
                        "carga": "75",
                        "media": "54",
                        "status": "Exame"
                    },
                    {
                        "nome": "Servições de Redes",
                        "carga": "240",
                        "media": "96",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Cabeamento Estruturado",
                        "carga": "150",
                        "media": "100",
                        "status": "Aprovado"
                    }
                ]
            },
        ],
        "status": "Cursando"
    },
    {
        "foto": "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
        "nome": "ANDERSON GERÔNCIO SOUZA SILVA",
        "matricula": "20151001004",
        "sexo": "M",
        "curso": [
            {
                "nome": "001 - Técnico em Redes de Computadores",
                "sigla": "RDS",
                "icone": "https://img.icons8.com/ultraviolet/344/thin-client.png",
                "carga": "1200",
                "conclusao": "2023",
                "disciplinas": [
                    {
                        "nome": "Sistemas Operacionais",
                        "carga": "75",
                        "media": "30",
                        "status": "Reprovado"
                    },
                    {
                        "nome": "Introdução a Redes",
                        "carga": "75",
                        "media": "77",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Introdução a Nuvem",
                        "carga": "120",
                        "media": "50",
                        "status": "Exame"
                    },
                    {
                        "nome": "Hardware",
                        "carga": "75",
                        "media": "84",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Servições de Redes",
                        "carga": "240",
                        "media": "96",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Cabeamento Estruturado",
                        "carga": "150",
                        "media": "100",
                        "status": "Aprovado"
                    }
                ]
            },
        ],
        "status": "Cursando"
    },
    {
        "foto": "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
        "nome": "Aristóteles da Silva Lima",
        "matricula": "20151001007",
        "sexo": "M",
        "curso": [
            {
                "nome": "001 - Técnico em Redes de Computadores",
                "sigla": "RDS",
                "icone": "https://img.icons8.com/ultraviolet/344/thin-client.png",
                "carga": "1200",
                "conclusao": "2021",
                "disciplinas": [
                    {
                        "nome": "Sistemas Operacionais",
                        "carga": "75",
                        "media": "86",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Introdução a Redes",
                        "carga": "75",
                        "media": "77",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Introdução a Nuvem",
                        "carga": "120",
                        "media": "70",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Hardware",
                        "carga": "75",
                        "media": "84",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Servições de Redes",
                        "carga": "240",
                        "media": "96",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Cabeamento Estruturado",
                        "carga": "150",
                        "media": "100",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Segurança da Informação",
                        "carga": "300",
                        "media": "96",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Administração de Serviços",
                        "carga": "240",
                        "media": "74",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Projetos",
                        "carga": "400",
                        "media": "89",
                        "status": "Aprovado"
                    }
                ]
            },
        ],
        "status": "Finalizado"
    },
    {
        "foto": "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
        "nome": "Gabriella Macedo Paiva",
        "matricula": "20151001014",
        "sexo": "F",
        "curso": [
            {
                "nome": "001 - Técnico em Redes de Computadores",
                "sigla": "RDS",
                "icone": "https://img.icons8.com/ultraviolet/344/thin-client.png",
                "carga": "1200",
                "conclusao": "2020",
                "disciplinas": [
                    {
                        "nome": "Sistemas Operacionais",
                        "carga": "75",
                        "media": "77",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Introdução a Redes",
                        "carga": "75",
                        "media": "94",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Introdução a Nuvem",
                        "carga": "120",
                        "media": "82",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Hardware",
                        "carga": "75",
                        "media": "84",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Servições de Redes",
                        "carga": "240",
                        "media": "100",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Cabeamento Estruturado",
                        "carga": "150",
                        "media": "100",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Segurança da Informação",
                        "carga": "300",
                        "media": "96",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Administração de Serviços",
                        "carga": "240",
                        "media": "88",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Projetos",
                        "carga": "400",
                        "media": "99",
                        "status": "Aprovado"
                    }
                ]
            },
        ],
        "status": "Finalizado"
    },
    {
        "foto": "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
        "nome": "Debora Alves da Silva",
        "matricula": "20151001012",
        "sexo": "F",
        "curso": [
            {
                "nome": "001 - Técnico em Redes de Computadores",
                "sigla": "RDS",
                "icone": "https://img.icons8.com/ultraviolet/344/thin-client.png",
                "carga": "1200",
                "conclusao": "2022",
                "disciplinas": [
                    {
                        "nome": "Sistemas Operacionais",
                        "carga": "75",
                        "media": "88",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Introdução a Redes",
                        "carga": "75",
                        "media": "98",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Introdução a Nuvem",
                        "carga": "120",
                        "media": "87",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Hardware",
                        "carga": "75",
                        "media": "88",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Servições de Redes",
                        "carga": "240",
                        "media": "100",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Cabeamento Estruturado",
                        "carga": "150",
                        "media": "100",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Segurança da Informação",
                        "carga": "300",
                        "media": "96",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Administração de Serviços",
                        "carga": "240",
                        "media": "88",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Projetos",
                        "carga": "400",
                        "media": "99",
                        "status": "Aprovado"
                    }
                ]
            },
        ],
        "status": "Finalizado"
    },
    {
        "foto": "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
        "nome": "Heloisa Santos Araujo",
        "matricula": "20151001017",
        "sexo": "F",
        "curso": [
            {
                "nome": "001 - Técnico em Desenvolvimento de Sistemas",
                "sigla": "DS",
                "icone": "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                "carga": "1200",
                "conclusao": "2022",
                "disciplinas": [
                    {
                        "nome": "Sistemas Operacionais",
                        "carga": "75",
                        "media": "88",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Introdução a Programação",
                        "carga": "150",
                        "media": "98",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Linguagem de Marcação",
                        "carga": "120",
                        "media": "87",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Banco de Dados",
                        "carga": "75",
                        "media": "88",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Programação Web Back End",
                        "carga": "240",
                        "media": "100",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Programação Web Front End",
                        "carga": "150",
                        "media": "100",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Banco de Dados II",
                        "carga": "300",
                        "media": "96",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Aplicações Móveis",
                        "carga": "240",
                        "media": "88",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Projetos",
                        "carga": "400",
                        "media": "99",
                        "status": "Aprovado"
                    }
                ]
            },
        ],
        "status": "Finalizado"
    },
    {
        "foto": "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
        "nome": "Ingrid Paloma da Costa Porto",
        "matricula": "20151001018",
        "sexo": "F",
        "curso": [
            {
                "nome": "001 - Técnico em Desenvolvimento de Sistemas",
                "sigla": "DS",
                "icone": "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                "carga": "1200",
                "conclusao": "2018",
                "disciplinas": [
                    {
                        "nome": "Sistemas Operacionais",
                        "carga": "75",
                        "media": "50",
                        "status": "Exame"
                    },
                    {
                        "nome": "Introdução a Programação",
                        "carga": "150",
                        "media": "94",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Linguagem de Marcação",
                        "carga": "120",
                        "media": "70",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Banco de Dados",
                        "carga": "75",
                        "media": "30",
                        "status": "Reprovado"
                    },
                    {
                        "nome": "Programação Web Back End",
                        "carga": "240",
                        "media": "50",
                        "status": "Exame"
                    },
                    {
                        "nome": "Programação Web Front End",
                        "carga": "150",
                        "media": "70",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Banco de Dados II",
                        "carga": "300",
                        "media": "20",
                        "status": "Reprovado"
                    },
                    {
                        "nome": "Aplicações Móveis",
                        "carga": "240",
                        "media": "88",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Projetos",
                        "carga": "400",
                        "media": "50",
                        "status": "Exame"
                    }
                ]
            },
        ],
        "status": "Finalizado"
    },
    {
        "foto": "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
        "nome": "HÉLIDA BENTO DE OLIVEIRA LINS",
        "matricula": "20151001016",
        "sexo": "F",
        "curso": [
            {
                "nome": "001 - Técnico em Desenvolvimento de Sistemas",
                "sigla": "DS",
                "icone": "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                "carga": "1200",
                "conclusao": "2024",
                "disciplinas": [
                    {
                        "nome": "Sistemas Operacionais",
                        "carga": "75",
                        "media": "70",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Introdução a Programação",
                        "carga": "150",
                        "media": "99",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Linguagem de Marcação",
                        "carga": "120",
                        "media": "80",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Banco de Dados",
                        "carga": "75",
                        "media": "90",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Programação Web Back End",
                        "carga": "240",
                        "media": "64",
                        "status": "Exame"
                    },
                    {
                        "nome": "Programação Web Front End",
                        "carga": "150",
                        "media": "70",
                        "status": "Aprovado"
                    }
                ]
            },
        ],
        "status": "Cursando"
    },
    {
        "foto": "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
        "nome": "Isaasc de Sousa Araújo",
        "matricula": "20151001019",
        "sexo": "M",
        "curso": [
            {
                "nome": "001 - Técnico em Desenvolvimento de Sistemas",
                "sigla": "DS",
                "icone": "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                "carga": "1200",
                "conclusao": "2022",
                "disciplinas": [
                    {
                        "nome": "Sistemas Operacionais",
                        "carga": "75",
                        "media": "80",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Introdução a Programação",
                        "carga": "150",
                        "media": "90",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Linguagem de Marcação",
                        "carga": "120",
                        "media": "95",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Banco de Dados",
                        "carga": "75",
                        "media": "80",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Programação Web Back End",
                        "carga": "240",
                        "media": "87",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Programação Web Front End",
                        "carga": "150",
                        "media": "70",
                        "status": "Aprovado"
                    }
                ]
            },
        ],
        "status": "Cursando"
    },
    {
        "foto": "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
        "nome": "José Matheus da Silva Miranda",
        "matricula": "20151001024",
        "sexo": "M",
        "curso": [
            {
                "nome": "001 - Técnico em Desenvolvimento de Sistemas",
                "sigla": "DS",
                "icone": "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                "carga": "1200",
                "conclusao": "2023",
                "disciplinas": [
                    {
                        "nome": "Sistemas Operacionais",
                        "carga": "75",
                        "media": "50",
                        "status": "Exame"
                    },
                    {
                        "nome": "Introdução a Programação",
                        "carga": "150",
                        "media": "40",
                        "status": "Reprovado"
                    },
                    {
                        "nome": "Linguagem de Marcação",
                        "carga": "120",
                        "media": "80",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Banco de Dados",
                        "carga": "75",
                        "media": "60",
                        "status": "Exame"
                    },
                    {
                        "nome": "Programação Web Back End",
                        "carga": "240",
                        "media": "90",
                        "status": "Aprovado"
                    },
                    {
                        "nome": "Programação Web Front End",
                        "carga": "150",
                        "media": "80",
                        "status": "Aprovado"
                    }
                ]
            },
        ],
        "status": "Cursando"
    }
];
//Recupera uma lista de todos os alunos matriculados 
const getAlunos = () => {

    return { alunos }
}
//Recupera informações de um aluno específico com base no número
const getAlunoPelaMatricula = (numeroMatricula) => {
    let jAlunoNumero = {}
    let status = false
    alunos.forEach(function (dados) {
        if (numeroMatricula === dados.matricula) {
            jAlunoNumero.nome = dados.nome
            jAlunoNumero.foto = dados.foto
            jAlunoNumero.sexo = dados.sexo
            jAlunoNumero.matricula = dados.matricula
            jAlunoNumero.curso = dados.curso
            status = true
        }
    })
    if (status) {
        return jAlunoNumero
    }
    else return status



}
//Recupera uma lista de todos os alunos matriculados no curso 
const getAlunosCurso = (curso) => {
    let jsonAlunosCursos = {}
    let arrayAlunosCursos = []
    let status = false
    alunos.forEach(function(aluno){
        if(aluno.curso[0].sigla == curso.toUpperCase()){
            arrayAlunosCursos.push(aluno)
            status = true
        }
    })
    jsonAlunosCursos.curso = arrayAlunosCursos

    if(status){
       return jsonAlunosCursos
    }else{
        return status
    }
}
//Recup uma lista de todos os alunos com o status
const getAlunosStatus = (status) => {
    let jsonAlunos = {}
    let arrayAlunosStatus = []
    let statuss = false
    
    let statusAR = status[0].toUpperCase() + status.substring(1).toLowerCase()
    alunos.forEach(function (dados) {

        if (statusAR == dados.status) {
            let jsonStatus = {}
            jsonStatus.alunos = dados.nome
            jsonStatus.nome = dados.nome
            jsonStatus.foto = dados.foto
            jsonStatus.sexo = dados.sexo
            jsonStatus.matricula = dados.matricula
            jsonStatus.status = dados.status
            arrayAlunosStatus.push(jsonStatus)
            jsonAlunos.alunos = arrayAlunosStatus
            statuss = true
        }
    })
    if (statuss) {
        return jsonAlunos
    }
    else return statuss

}
const getAlunoPeloAno = (ano) => {
    let teste = alunos.forEach(function (dados) {
        return dados.nome
    })
    alunos.forEach(function (dados) {
        dados.curso.forEach(function (dados) {
            if (ano == dados.conclusao) {

                console.log(teste);


            }
        })
    })
}
console.log(getAlunoPeloAno('2020'));

module.exports =
{
    getAlunos,
    getAlunoPelaMatricula,
    getAlunosStatus,
    getAlunosCurso
}