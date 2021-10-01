const arrNomes = ['Juca', 'Joca','Janaina']
const arrNomesComoString = JSON.stringify(arrNomes);
console.log(typeof arrNomesComoString );
localStorage.setItem('nomePessoas', arrNomesComoString);
const arrAserTransformado = localStorage.getItem('nomePessoas');
const arrComoarrDenovo = JSON.parse(arrNomesComoString);

for(let i = 0; i<arrComoarrDenovo.length ; i++){
    console.log(arrComoarrDenovo[i]);
}
