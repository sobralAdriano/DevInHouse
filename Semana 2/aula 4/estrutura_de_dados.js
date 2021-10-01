const listaNomes = [
    {
        nome: "Ricardo",
        sobrenome:"Costa",
        idade: 28,
        telefone: "48-98227-5555"
    },
    {
        nome: "Renato",
        sobrenome:"Silva",
        idade: 45,
        telefone: "48-98333-6666"
    },
    {   nome: "Carla",
        sobrenome:"Maria",
        idade: 32,
        telefone: "48-98666-2222"
    },
    {
        nome: "Arthur",
        sobrenome:"Barros",
        idade: 9,
        telefone: "91-98123-5888"
    },
    {
        nome: "Juliana",
        sobrenome: "Santos",
        idade: 32,
        telefone:"48-98656-6543"
    },
    {
        nome: "Patricia",
        sobrenome:"Gomes",
        idade: 28,
        telefone:"21-99888-2424"
    },
    {
        nome: "Camila",
        sobrenome:"Ferreira",
        idade: 33,
        telefone: "51-98888-5555"
    }
]

for(let i =0;i<listaNomes.length;i++){
    console.log(listaNomes[i].nome + " " + listaNomes[i].sobrenome + " com a idade de " + listaNomes[i].idade + " anos tem o telefone " + listaNomes[i].telefone);
}

const listaNomes2 = [
    {
        nome: "Ricardo",
        sobrenome:"Costa",
        idade: 28,
        telefone: "48-98227-5555"
    },
    {
        nome: "Renato",
        sobrenome:"Silva",
        idade: 45,
        telefone: "48-98333-6666"
    },
    {   nome: "Carla",
        sobrenome:"Maria",
        idade: 32,
        telefone: "48-98666-2222"
    },
    {
        nome: "Arthur",
        sobrenome:"Barros",
        idade: 9,
        telefone: "91-98123-5888"
    },
    {
        nome: "Juliana",
        sobrenome: "Santos",
        idade: 32,
        telefone:"48-98656-6543"
    },
    {
        nome: "Patricia",
        sobrenome:"Gomes",
        idade: 28,
        telefone:"21-99888-2424"
    },
    {
        nome: "Camila",
        sobrenome:"Ferreira",
        idade: 33,
        telefone: "51-98888-5555"
    }
]
for (let i = 0; i< listaNomes2.length; i++){
    console.log(`${listaNomes2[i].nome} ${listaNomes[i].sobrenome} com a idade de ${listaNomes[i].idade} anos tem o telefone ${listaNomes[i].telefone}`)
}