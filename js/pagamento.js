const INPUT_NUMERO = document.getElementById('card_numero');
const INPUT_TITULAR = document.getElementById('card_titular');
const INPUT_CVV = document.getElementById('card_cvv');
const SELECT_MES = document.getElementById('card_mes');
const SELECT_ANO = document.getElementById('card_ano');

let hoje = new Date();
let anoFim = hoje.getFullYear() + 10; 

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

function formatarNumero() {
    let numero = INPUT_NUMERO.value;

    numero = numero.replace(/\D/g, '');
    numero = numero.replace(/(\d{4})(?=\d)/g, '$1 ');

    if (numero.length > 19) {  
        numero = numero.slice(0, 19);
    }

    INPUT_NUMERO.value = numero;
    SPAN_NUMERO.innerHTML = numero;

    document.getElementById('bandeira_visa').style.display = 'none';
    document.getElementById('bandeira_mastercard').style.display = 'none';

    if (numero.startsWith('4')) {
        document.getElementById('bandeira_visa').style.display = 'block';
    } else if (numero.startsWith('5')) {
        document.getElementById('bandeira_mastercard').style.display = 'block';
    }
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

INPUT_NUMERO.addEventListener('input', formatarNumero); 

