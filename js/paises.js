const TABLE = document.getElementById('table-countries');

let dados = [
    { id: 1,  
      nome: 'Brasil',
      abreviacao: 'BR' },
    { id: 2, 
      nome: 'Argentina', 
      abreviacao: 'AR' },
    { id: 3, 
      nome: 'Portugal', 
      abreviacao: 'PT' },
    { id: 4, 
      nome: 'França', 
      abreviacao: 'FR' },
    { id: 5, 
      nome: 'Estados Unidos', 
      abreviacao: 'US' },
    { id: 6, 
      nome: 'Chile', 
      abreviacao: 'CL' }
];





dados.forEach(country => {
    TABLE.innerHTML += `
        <tr>
            <td>${country.id}</td>
            <td>${country.nome}</td>
            <td>${country.abreviacao}</td>
            <td>
                <a href="#" class="btn btn-outline-warning btn-sm">
                    Editar
                </a>
                <a href="#" class="btn btn-outline-danger btn-sm">
                    Excluir
                </a>
            </td>
        </tr>
    `;

});



