const SELECT_DIA = document.getElementById('select-dia') // JEITO MAIS SENIOR
const SELECT_MES = document.getElementById('select-mes')
const SELECT_ANO = document.getElementById('select-ano')

let numero = 1;

while (numero <= 31) {
    SELECT_DIA.innerHTML += `<option>
        ${numero}
    </opition>`;  

    numero = numero ++;
}

let meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

let i = 0;

do {
    SELECT_MES.innerHTML += `<option>${meses[i]}</option>`;
    i++;
} while (i < meses.length);



for (let ano = 2025; ano >= 1950; ano--) {
    if ( ano % 2 !== 0) {
        SELECT_ANO.innerHTML += `<option>${ano}</option>`;
    }   
}
