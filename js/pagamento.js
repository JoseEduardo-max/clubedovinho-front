const INPUT_NUMERO = document.getElementById('card_numero');
const INPUT_TITULAR = document.getElementById('card_titular');
const INPUT_CVV = document.getElementById('card_cvv');
const SELECT_MES = document.getElementById('card_mes');
const SELECT_ANO = document.getElementById('card_ano');

let hoje = new Date();
let anoFim = hoje.getFullYear() +10; 

for (let ano = hoje.getFullYear(); ano <= anoFim; ano++) {
    SELECT_ANO.innerHTML += `<option>${ano}</option>`;
}

const MESES = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];

for (let mes = 0; mes <= 11; mes++) {
    SELECT_MES.innerHTML += `<option>${MESES[mes]}</option>`;
} 

const SPAN_NUMERO = document.getElementById('resultado_numero');
const SPAN_TITULAR = document.getElementById('resultado_titular');
const SPAN_VALIDADE = document.getElementById('resultado_validade');    


function preencherNumero() {
    SPAN_NUMERO.innerHTML = INPUT_NUMERO.value;
}


function preencherTitular() {
    SPAN_TITULAR.innerHTML = INPUT_TITULAR.value;
}

function preencherValidade() {
    let mesIndex = SELECT_MES.selectedIndex;
    let ano = SELECT_ANO.value; 

    
    let mes = mesIndex > 0 ? String(mesIndex).padStart(2, '0') : "";


    if (mes && !ano) {
        SPAN_VALIDADE.innerHTML = `${mes}/YYYY`;
    } else if (!mes && ano) {
        SPAN_VALIDADE.innerHTML = `MM/${ano}`;
    } else if (mes && ano) {
        SPAN_VALIDADE.innerHTML = `${mes}/${ano}`;
    } else {
        SPAN_VALIDADE.innerHTML = "MM/YYYY";
    }
}

SELECT_MES.addEventListener('change', preencherValidade);
SELECT_ANO.addEventListener('change', preencherValidade);