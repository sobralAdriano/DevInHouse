const form = document.querySelector('form');
const select= document.querySelector('select');
const alert = document.querySelector('alert');
const result= document.querySelector('.items-whrapper');
const itemsArr = [];

const renderItems = (itemsArr, clearItens = false)=>{
    if(clearItens){
        select.innerHTML = "";
    }
    
    if(itemsArr.length > 0){
        itemsWrapper.style = "display:block";
        alert.style = "display:none";
        itensArr.array.forEach((item) => {
            select.innerHTML =
            select.innerHTML + `<option value="${item}">${item}</option>`;
    
    });

}
form.addEventListener("submit", function(event){
    event.preventDefault();
    const items = document.querySelector('#item').value;
    itemsArr.push(item);
    renderItems(item,true);
});

window.onload = function () {
    renderItems(items);
    if (items.length <= 0) {
      itemsWrapper.style = "display: none";
      alert.textContent = "Sem itens";
    }
  };

/*const form = document.querySelector("form");
const select = document.querySelector("select");
const itemsWrapper = document.querySelector(".items-wrapper");
const alert = document.querySelector(".alert");
const items = [];

const renderItems = (itemsArr, clearItems = false) => {
  if (clearItems) {
    select.innerHTML = "";
  }
  if (itemsArr.length > 0) {
    itemsWrapper.style = "display: block";
    alert.style = "display: none";
    itemsArr.forEach((item) => {
      select.innerHTML =
        select.innerHTML + `<option value="${item}">${item}</option>`;
    });
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const item = document.querySelector("#item").value;
  items.push(item);
  renderItems(items, true);
});

window.onload = function () {
  renderItems(items);
  if (items.length <= 0) {
    itemsWrapper.style = "display: none";
    alert.textContent = "Sem itens";
  }
};
*/