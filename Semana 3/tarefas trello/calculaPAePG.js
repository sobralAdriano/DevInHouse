const form = document.querySelector("form");
const result = document.querySelector(".result");

const calcPA = (num1, square) => {
  let valor = parseInt(num1);
  let razao = parseInt(square);
  const termo = 10;
  let pa = "";

  for (var count = 1; count <= termo; count++) {
    pa += "Termo " + count + " = " + valor + "<br />";
    valor += razao;
  }
  result.innerHTML = pa;
};

const calcPG = (num1, square) => {
  let valor = parseInt(num1);
  let razao = parseInt(square);
  const termo = 10;
  let pa = "";

  for (var count = 1; count <= termo; count++) {
    pa += "Termo " + count + " = " + valor + "<br />";
    valor *= razao;
  }
  result.innerHTML = pa;
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const num1 = document.querySelector("#num1").value;
  const square = document.querySelector("#square").value;

  if (event.submitter.id === "pa") {
    calcPA(num1, square);
  } else {
    calcPG(num1, square);
  }
});
