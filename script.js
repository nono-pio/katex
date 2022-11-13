const input = document.querySelector('#input-math');
const listinput = document.querySelector('#input-element');
const pui = document.querySelector("#pui");
const frac = document.querySelector("#frac");
const rac = document.querySelector("#rac");
const int = document.querySelector("#int");

var textInput = "";

var tradKaTeX = {
    pui:(base, exposant) => "{"+base+"}^{"+exposant+"}",
    frac:(nominateur,denominateur) => "\frac{"+nominateur+"}{"+denominateur+"}",
    rac:(base,n) => "\rac["+n+"]{"+base+"}"
}

input.addEventListener('change', (event) => {
    const affichage = document.querySelector('#affichage-math');
    const result = event.target.value
    katex.render(result, affichage, {
        throwOnError: false
    });
  });

function addInput () {
    const listinput = document.querySelector('#input-element');

    let input1 = document.createElement("input");
    let spanInput1 = document.createElement("span");
    spanInput1.innerHTML = "puissance base";
    input1.type = 'text';
    input1.id = 'pui-base';

    let input2 = document.createElement("input");
    let spanInput2 = document.createElement("span");
    spanInput2.innerHTML = "puissance base";
    input2.type = 'text';
    input2.id = 'pui-exposant';

    listinput.appendChild(input1);
    listinput.appendChild(spanInput1);
    listinput.appendChild(input2);
    listinput.appendChild(spanInput2);
}
pui.addEventListener('click',addInput())