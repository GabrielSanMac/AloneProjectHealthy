// INPUTS

var nome = document.querySelector('#nome')
var idade = document.querySelector('#idade')
var peso = document.querySelector('#peso')
var altura = document.querySelector('#altura')

// FORM

var form = document.querySelector('form')

// BLANKS DE OUTPUT

var indice = document.querySelector('#indice')
var classificacao = document.querySelector('#classificacao')
var risco = document.querySelector('#risco')

// CODE

function getValue(){

    for(i = 0; i < form.children.length; i++){
        if(form.children[i].value == ''){
            form.children[i].style.border = '1px solid red';
        } else {
            form.children[i].style.border = '1px solid #000';
        }

        console.log(form.children[i].value)

        if (form.children[i].value == undefined){
            console.log("to aqui")
            form.children[i].style.border = 'none';
        }
    }
    // pegar valor dos inputs e mandar pra function imc()
    calculaImc(parseFloat(peso.value),parseFloat(altura.value))
}

function calculaImc(peso, altura){
    altura /= 100;
    var IMC = peso / (altura*altura);

    var indiceValue = IMC.toFixed(2);
    var classificacaoValue;
    var riscoValue;

    if (IMC < 16){
        classificacaoValue = 'Baixo peso muito grave';
        riscoValue = 'Muito Grave';
    } else if (IMC >= 16 && IMC <= 16.99) {
        classificacaoValue = 'Baixo peso grave';
        riscoValue = 'Grave';
    } else if (IMC >= 17 && IMC <= 18.49) {
        classificacaoValue = 'Baixo peso';
        riscoValue = 'Mediano';
    } else if (IMC >= 18.50 && IMC <= 24.99) {
        classificacaoValue = 'Peso normal';
        riscoValue = 'Otimo';
    } else if (IMC >= 25 && IMC <= 29.99) {
        classificacaoValue = 'Sobrepeso';
        riscoValue = 'Mediano';
    } else if (IMC >= 30 && IMC <= 34.99) {
        classificacaoValue = 'Obesidade grau I';
        riscoValue = 'Grave';
    } else if (IMC >= 35 && IMC <= 39.99) {
        classificacaoValue = 'Obesidade grau II';
        riscoValue = 'Muito Grave';
    } else if (IMC >= 40) {
        classificacaoValue = 'Obesidade grau III';
        riscoValue = 'Emergente';
    }


    setValueIn(indiceValue,classificacaoValue,riscoValue)
}

function setValueIn(indiceValue, classificacaoValue, riscoValue){
    indice.innerHTML = indiceValue;
    classificacao.innerHTML = classificacaoValue;
    risco.innerHTML = riscoValue;
    var riscoColor;

    switch(riscoValue){
        case 'Emergente' :
            riscoColor = '#FF0000'
            break;
        case 'Muito Grave' :
            riscoColor = '#7E0000'
            break;
        case 'Grave' :
            riscoColor = '#640000'
            break;
        case 'Mediano' :
            riscoColor = '#FF9900'
            break;
        case 'Otimo' :
            riscoColor = '#05D901'
            break;
    }

    risco.style.color = riscoColor;
}