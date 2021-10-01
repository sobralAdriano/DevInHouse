const alunos = [
    {nome: 'juca', nota1: 3, nota2: 8, nota3: 9},
    {nome: 'joca', nota1: 5, nota2: 5, nota3: 5},
    {nome: 'joelma', nota1: 9, nota2: 7, nota3: 8},
]
let media = 7;
console.log(alunos[1]. nota1)
for(let i = 0; i < alunos.length; i++){
    //Nome
    console.log(" Nome:" + alunos[i].nome)
    //Media
    mediadoaluno = (alunos[i].nota1 + alunos[i].nota2 + alunos[i].nota3) / 3;
    arredondar = mediadoaluno.toFixed(1)
    console.log(" Media:" + arredondar)
    //Aprovação
    if (arredondar >= media){
        console.log(" Situação: Aprovado")
        situacao = "Aprovado"
    } else { 
        console.log(" Situação: Reprovado")
        situacao = "Reprovado"
    }
    switch (i) {
        case 0:
            document.querySelector("#exibir0").innerHTML = 
            `
            nome: ${alunos[i].nome}<br>   
            media: ${arredondar}<br>
            situação: ${situacao}
            `
        break;
        case 1:  
            document.querySelector("#exibir1").innerHTML = 
            `
            nome: ${alunos[i].nome}<br>  
            media: ${arredondar}<br>
            situação: ${situacao}   
            `
        break;  
        case 2:  
            document.querySelector("#exibir2").innerHTML = 
            `
            nome: ${alunos[i].nome}<br>   
            media: ${arredondar}<br>
            situação: ${situacao}   
            `
        break;  
        default:
            break;
    }
}