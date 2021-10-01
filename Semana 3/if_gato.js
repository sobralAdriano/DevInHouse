const gato = {
	nome: 'Juquinha',
	vivo : true
}

if (gato.vivo==true){
    //concatenando
    console.log(gato.nome +'esta vivo');
	//interpolacao
	console.log(`${gato.nome} esta vivo`);
}
else{
	console.log();
}