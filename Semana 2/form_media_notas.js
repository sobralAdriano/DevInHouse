const alunos = [
    {   nome:'juca',
        nota1: 3,
        nota2: 8,
        nota3: 9,},
    {   nome:'joca',
        nota1: 5,
        nota2: 5,
        nota3: 5,},
    {   nome:'joelma',
        nota1: 9,
        nota2: 5,
        nota3: 8,}
]

for(let i= 0;i<alunos.length;i++){
    console.log(alunos[1].nome);
    const media = (alunos[i].nota1+alunos[i].nota2+alunos[i].nota3)/3;
    console.log (media.toFixed(1));
    if(media < 7){
        console.log("Aluno Reprovado!");
    }
    else{
        console.log("Aluno Aprovado");
    }
}

























for(let i = 0; i < alunos.length; i++){
    //imrpime nome
    let nome_alunos = alunos[i].nome;
    
    //console.log('aluno: ' + alunos[i].nome)
    
    //imprime media final
    
    let media = (alunos[i].nota1 + alunos[i].nota2 + alunos[i].nota3) / 3;
    media = media.toFixed(1);
    //console.log('Media: ' + media)
    
    //Resultado
    
    let resultado;
    if( media >= 7 ) {
        resultado = "Aprovado!"
    } else {
        resultado = "Reprovado!"
    }

    let mostra_HTML = `Nome: ${nome_alunos}<br> media:${media}<br> resultado: ${resultado}<br>`;
    document.querySelector(`#aluno${i}`).innerHTML = mostra_HTML;
}