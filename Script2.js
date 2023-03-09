const form = document.querySelector('#Form')
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#Result');

form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues (event) {
  event.preventDefault()
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado= " + sumaInputs;  
}