const alunos = [
    {
        nome: "Juca",
        nota1: 3, 
        nota2: 8, 
        nota3: 9
    },

    {
        nome: "Joca",
        nota1: 5, 
        nota2: 5, 
        nota3: 5
    },

    {
        nome: "Joelma",
        nota1: 9, 
        nota2: 7, 
        nota3: 8
    }
]

//functions

const calculaMedia = (n1, n2, n3) => {
    return ((n1 + n2 + n3) / 3).toFixed(1)
}

const defineSituacao = (media) => {
    let situacao = " ";
    if(media >= 7){
        situacao = 'Aprovado';
    } else {
        situacao = 'Reprovado';
    }
    return situacao
}

const printResultado = (resultado) => {
    document.getElementById("resultadoAluno").insertAdjacentHTML("afterend", resultado);
}


for(i=0; i<3; i++) {

    let media = calculaMedia(alunos[i].nota1, alunos[i].nota2, alunos[i].nota3);
    
    let situacao = defineSituacao(media)

    const resultado = `Nome: ${alunos[i].nome}<br><br>Média: ${media}<br><br>Situação: ${situacao}<br><br>`;

    printResultado(resultado)
}