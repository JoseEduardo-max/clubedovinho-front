const SELECT_DIA = document.getElementById('select-dia') // JEITO MAIS SENIOR
const SELECT_MES = document.getElementById('select-mes')
const SELECT_ANO = document.getElementById('select-ano')

let numero = 1;

while (numero <= 31) {
    //document.getElementById('select-dia').innerHTML += '<option>' + numero + '</opition>';
    SELECT_DIA.innerHTML += `<option>
        ${numero}
    </opition>`;  

    numero = numero + 1;
    //numero += 1;
    //numero++;
}

let mes = 1

do {
    SELECT_MES.innerHTML += `<option>${mes}</option>`;

    mes = mes + 1

}while (mes <= 12); 



for (let ano = 1950; ano <= 2025; ano++) {
    SELECT_ANO.innerHTML += `<option>${ano}</option>`;   
}