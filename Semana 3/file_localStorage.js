const arrPessoas = [{
    nome:'Juca', 
    sobrenome: 'cipo',
    idade: 28
},
{
    nome: 'Juliana',
    sobrenome: 'dos Santos da Silva',
    idade: 28
},
{
    nome: 'Adriano',
    sobrenome: 'Sobral',
    idade: 45
},
{
    nome : 'Arthur',
    sobrenome: 'Sobral',
    idade: 9
}

]

const arrNomes = ['Adriano', 'Juliana', 'Arthur', 'Maria','Alfredo'];

const objBrasil = {
    nome: 'Brasil',
    estados: 27,
    capital:'Brasilia',
    lingua: 'Portugues',
    localizacao: 'america do sul'
    }

 
/*console.log(typeof arrPessoas);
const arrPessoasTostring = JSON.stringify(arrPessoas);
console.log(typeof arrPessoasTostring );
localStorage.setItem('familiaCipo',arrPessoasTostring);

const arrPessoasAserTransformado = localStorage.getItem('familiaCipo');
const arrPessosasTransformado = JSON.parse(arrPessoasAserTransformado);

for(let i=0; i<arrPessosasTransformado.length;i++){

    console.log(arrPessosasTransformado[i]);

}*/

function salvaLocal (chave, valor){
    const valorConvertido = JSON.stringify(valor);
    localStorage.setItem(chave,valorConvertido);

}
salvaLocal('nomesFamilia',arrNomes);
salvaLocal('dadosBrasil',objBrasil);
salvaLocal('nomesPessoas', arrPessoas);

function retornaValorlocal(chave){

    const valorparaConverter = localStorage.getItem(chave);
    const valorJaconvertido = JSON.parse(valorparaConverter);
    return valorJaconvertido;
    
}    

const valor1 = retornaValorlocal('nomesFamilia');
const valor2 = retornaValorlocal('dadosBrasil'); 
const valor3 = retornaValorlocal('nomesPessoas');

console.log(valor1[0], valor2.capital, valor3[0].nome);