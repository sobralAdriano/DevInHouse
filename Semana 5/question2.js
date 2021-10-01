const clientsDetails = [
    {name: "adriano", money : "8300"},
    {name: "claudia", money : "8700"},
    {name: "juliana", money : "6300"},
    {name: "arthur", money : "9000"},
    {name: "maria", money : "5000"},
    {name: "marcia", money : "8300"},
    {name: "alfredo", money : "10000"},
    {name: "camila", money : "13000"},
    {name: "marcos", money : "8000"},
    {name: "victor", money : "7000"}
]

document.getElementById('question2').innerHTML = clientsDetails.map(
    (user) =>
    `<div> <div>Nome: ${user.name}</div></div>`)
.join("");

