const objPessoa = {
    nome:'Juca', 
    sobrenome: 'cipo',
    idade: 28,}
    

const objetoJuca = JSON.stringify(objPessoa);
console.log(typeof objetoJuca );
localStorage.setItem('objetoPessoa', objetoJuca);
const objAserTransformado = localStorage.getItem('objetoPessoa');
const objComoObjdeNovo = JSON.parse(objAserTransformado);
console.log(objComoObjdeNovo.nome);
console.log(objComoObjdeNovo.sobrenome);
console.log(objComoObjdeNovo.idade);






const arrNomesComoString = JSON.stringify(arrNomes);
console.log(typeof arrNomesComoString );
localStorage.setItem('nomePessoas', arrNomesComoString);
const arrAserTransformado = localStorage.getItem('nomePessoas');
const arrComoarrDenovo = JSON.parse(arrAserTransformado);

for(let i = 0; i<arrComoarrDenovo.length ; i++){
    console.log(arrComoarrDenovo[i]);
}



function recuperaValor (chave) {
    const valorRecuperado = localStorage.getItem(chave);
    const valorOriginaldeNovo = JSON.parse(valorRecuperado);
    return valorOriginaldeNovo;

}

recuperaValor(chave);

