// Primeiro definimos o taskArray que vai ser o responsável por pegar os filme que vamos salvar no localStorage.
// Detalhe: esse || [] que coloquei é uma comparação.
// Ele checa se existe itens no localStorage. Se não existir, ele seta como um array vazio.
// Pq um array? Por que os nossos filme, como são mais de um, precisam ser do tipo array.
const tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];

function showTasks(clearTasks = false) {
  // Aqui definimos taskContent. Ele vai servir para conseguimos adicionar os filme no nosso HTML/DOM.
  const taskContent = document.querySelector('.content');

  // O cleartask serve para limpar a listagem de filme e previnir que eles não se repitam por meio do nosso loop forEach.
  if (clearTasks) {
    taskContent.innerHTML = '';
  }
  // Se existir filme adicionados no nosso taskArray(que é do localStorage), então vamos fazer o loop e adicionar os filme.
  if (tasksArray.length > 0) {
    tasksArray.forEach((task) => {
      // Aqui estamos alterando o conteúdo do nosso taskContent a cada loop.
      // Se existir 5 filme, ele vai fazer o loop 5x e adicionar esses conteúdos.
      // Adicionamos ele alterando o innerHTML.
      // Não pode ser textContent por que estamos adicionando tags HTML na nossa manipulação.
      taskContent.innerHTML =
        taskContent.innerHTML + //Estamos usando template literal, que é o nome quando utilizamos a crase(esse pra esquerda).
        // Com ele nós conseguimos utilizar variaveis com mais facilidade.
        `<div class="task-card"><input type="checkbox" id ="realized" onclick="taskChecked()"/><p class ="taskIncluded">
        ${task.taskDescription}</p>
        <button onclick="removeTask()" id = "deleteButton">
        <img class = "img-remove" src="cancel.png"></button>
        </div>`;
    });
  } else {
    // se não houver filme, vamos manipular o DOM e dizer que não existem filmes disponiveis.
    taskContent.innerHTML = 'Sem tarefas a cumprir.';
  }
}
// Aqui estamos pegando o nosso formulário para manipular
const taskForm = document.querySelector('#taskForm');

taskForm.addEventListener('submit', (event) => {
  // event.preventDefault para previnir que a página carregue.
  event.preventDefault();
  // Iniciamos o nosso objeto task, que é quem vai guardar cada tarefa individualmente e mandar pro nosso array de tarefas que vai pro localStorage.
  // usamos let por que é uma variável que vai ser alterada por nós.
  let task = {};
  task.taskDescription = document.getElementById('taskDescription').value;
  

  // aqui estamos pegando a mensagem de alerta para manipular ela caso aja erro ou sucesso.
  const alertMessage = document.querySelector('.alert');
  // nesse if checamos se algum dos campos está vazio, para não permitir que sejam cadastrados filmes sem informações.
  if (task.taskDescription === '') {
    alertMessage.innerHTML = 'Por favor, preencha a tarefa.';
    // O nosso alerta é inicializado no HTML com display: none, ou seja, invisivel. Aqui a gente seta ele pra ser visivel com o display: block
    alertMessage.style = 'display: block; color: red';
  } else {
    // se tudo for preechido, prosseguimos com a adição do livro.
    //o método push serve para adicionar um novo item a um array.
    tasksArray.push(task);
    //aqui atualizamos o nosso localStorage com o novo filme e utilizamos o stringify para transformar o objeto em string.
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
    //Abaixo nós utilizamos a função showtask para mostrar os filmes conforme eles são adicionados.
    //Passamos true como parametro para sinalizar que queremos que ele limpe a lista de filmes anteriores para evitar duplicados.
    showTasks(true);
    alertMessage.innerHTML = 'Tarefa adicionada com sucesso!';
    alertMessage.style = 'display: block; color: green';
       
    setTimeout(() => {
      //utilizamos o timeout para resetar os dados do nosso formulario e para remover o modal de adicionar filmes
      alertMessage.innerHTML = '';
      //taskForm.style = 'display: none';
      taskForm.reset();
    }, 1000);
  }
});

// mostrando as tarefas ao carregar a página
window.onload = function () {
  showTasks();
};
/*const taskIncluded = document.querySelector('.taskIncluded');
function taskChecked(){
    if (document.getElementById('realized').checked){
        
       taskIncluded.style ='text-decoration-line: line-through';
    }
}
function taskDone(){
    const tarefa = document.querySelector('.done'); 

}*/

function removeTask(){
     
    tasksArray.pop(task);
}
