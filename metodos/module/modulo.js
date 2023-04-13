var listaTurma = require('../json/alunos.js')

var listaCursos = require('../json/cursos.js')

var listaAlunos = require('../json/alunos.js')

const listaCurso = listaCursos.cursos

const lista = listaTurma.alunos
 

const getListaTurmaCompleta = function() {
    let status = true
    let jsonTurma = {}
    let arrayTurma = []
    let jsonAlunosTurma = {}

    lista.forEach((cardTurma) => {
        jsonTurma = {
            foto: cardTurma.foto,
            nome: cardTurma.nome,
            matricula: cardTurma.matricula,
            sexo: cardTurma.sexo,
            curso: cardTurma.curso,
            status: cardTurma.status
        }

        arrayTurma.push(jsonTurma)
    })

    jsonAlunosTurma = {
        turma: arrayTurma
    }

    if(jsonTurma != undefined) {
        return jsonAlunosTurma
    } else {
        status = false
        return status
    }
}

const getListaAlunosCurso = function(curso) {
    let status = true
    let jsonAlunosCurso = {}
    let arrayAlunosCurso = []
    let jsonCurso = {}

    

    lista.forEach((cardAlunosCurso) => {

        cardAlunosCurso.curso.forEach((cardCurso) => {

            if(curso == cardCurso.sigla){
                
                jsonAlunosCurso = {
                    foto: cardAlunosCurso.foto,
                    nome: cardAlunosCurso.nome,
                    matricula: cardAlunosCurso.matricula,
                    sexo: cardAlunosCurso.sexo,
                    curso: cardAlunosCurso.curso,
                    status: cardAlunosCurso.status
                }
                
                arrayAlunosCurso.push(jsonAlunosCurso)
            }

           
        })
        
    })

    

    jsonCurso = {
        turma: arrayAlunosCurso
    }

    if(jsonAlunosCurso != null) {
        return jsonCurso
    } else {
        status = false
        return status
    }
}


const getListaAlunosStatus = function(curso,status) {
    let statusAluno = status
    let cursoAluno = curso
    let statusBoolean = true
    let jsonAlunosCursoStatus = {}
    let arrayAlunosCursoStatus = []
    let jsonCursoStatus = {}

    lista.forEach((cardAlunosCurso) => {

        cardAlunosCurso.curso.forEach((cardCurso) => {

            if(cursoAluno == cardCurso.sigla && statusAluno == cardAlunosCurso.status && cursoAluno != undefined){
                
                jsonAlunosCursoStatus = {
                    foto: cardAlunosCurso.foto,
                    nome: cardAlunosCurso.nome,
                    matricula: cardAlunosCurso.matricula,
                    sexo: cardAlunosCurso.sexo,
                    curso: cardAlunosCurso.curso,
                    status: cardAlunosCurso.status
                }
                
                arrayAlunosCursoStatus.push(jsonAlunosCursoStatus)

               
            } 

           
        })
        
    })

    jsonCursoStatus = {
        turma: arrayAlunosCursoStatus
    }

    if(jsonAlunosCursoStatus != null) {
        return jsonCursoStatus
    } else {
        statusBoolean = false
        return statusBoolean
    }
}

const getListaCursos = function () {
    let status = true
    let arrayCursos = []
    let jsonCursos = {}
    let jsonCurso = {}

    listaCurso.forEach((cards) => {
        jsonCursos = {
            nome: cards.nome,
            sigla: cards.sigla,
            icone: cards.icone,
            carga: cards.carga
        }

        arrayCursos.push(jsonCursos)
    })
    
    jsonCurso = {
        cursos: arrayCursos
    }

    if(jsonCurso != undefined){
        return jsonCurso
    }else{
        status = false
        return status
    }
}

const getMatricula = function(matricula){
    matriculaAluno = matricula
    let listaInformacoesJson = {}
    let informacoesDisciplinasArray = []
    let informacoesDisciplinasJson

    listaAlunos.alunos.forEach(function(aluno){
        if(matriculaAluno == aluno.matricula){
            listaInformacoesJson = {
                nome: aluno.nome,
                foto: aluno.foto,
                matricula: aluno.matricula,
                sexo: aluno.sexo,
                status: aluno.status,
                nomeCurso: aluno.curso[0].nome,
                sigla: aluno.curso[0].sigla,
                icone: aluno.curso[0].icone,
                conclusao: aluno.curso[0].conclusao
            }

            aluno.curso[0].disciplinas.forEach(function(listaDisciplina){
                listaInformacoesJson.disciplinas = informacoesDisciplinasArray

                informacoesDisciplinasJson = {
                    nomeDisciplina: listaDisciplina.nome,
                    sigla: listaDisciplina.nome,
                    media: listaDisciplina.media,
                    status: listaDisciplina.status
                }
                informacoesDisciplinasArray.push(informacoesDisciplinasJson)
            })

            
        }
    })
    return listaInformacoesJson
}



module.exports = {
    getListaTurmaCompleta,
    getListaAlunosCurso,
    getListaAlunosStatus,
    getListaCursos,
    getMatricula
}