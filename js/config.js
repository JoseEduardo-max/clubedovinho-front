//document.addEventListener("DOMContentLoaded", function () {
    //const checkboxes = document.querySelectorAll(".form-check-input");
    //const countSpan = document.querySelector(".alert-secondary .fs-1");

    //function updateCount() {
    //    const checkedCount = document.querySelectorAll(".form-check-input:checked").length;
    //    countSpan.textContent = checkedCount;
    //}

    //checkboxes.forEach(checkbox => {
    //    checkbox.addEventListener("change", updateCount);
    //});
//});

//function marcado() {
//    const checkedCount = document.querySelectorAll(".form-check-input:checked").length;
//    document.querySelector(".alert-secondary .fs-1").textContent = checkedCount;
//}


const quantidade = document.getElementById('quantidade_modulo');

let qtd = 0;

function marcado(evento) {
    if (evento.checked === true) {
        qtd += 1;
    } else {
        qtd -= 1;
    }

    quantidade.innerHTML = qtd;
}

