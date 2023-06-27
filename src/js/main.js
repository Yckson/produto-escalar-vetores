function calcularProdEsc(v1, v2){
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}

function getValues() {
    let v1 = Array(Number(document.querySelector('input#v1x').value), Number(document.querySelector('input#v1y').value), Number(document.querySelector('input#v1z').value));
    let v2 = Array(Number(document.querySelector('input#v2x').value), Number(document.querySelector('input#v2y').value), Number(document.querySelector('input#v2z').value));

    return [v1, v2];
}

function writeAnswer(value){
    document.querySelector("div.resposta").innerHTML = null;
    document.querySelector('div.resposta').innerHTML = 'Resposta: ' + value;
}









document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    const vectors = getValues();
    const resp = calcularProdEsc(vectors[0], vectors[1]);
    writeAnswer(resp);
    
})

