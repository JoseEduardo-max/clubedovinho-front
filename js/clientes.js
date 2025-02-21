const TABLE_CLIENTES = document.getElementById('table-clientes');

let url = `https://feitoza.tec.br/api/index.php`

fetch(url)                  //busca
    .then(res => res.json())//trata o resultado
    .then(clientes => {     //usa o resultado
        for (let i = 0; i <= clientes.length; i++) {
            TABLE_CLIENTES.innerHTML +=
                `<tr>
                    <th>${clientes[i].id}</th>
                    <th>${clientes[i].nome}</th>
                    <th>${clientes[i].email}</th>
                    <th>${clientes[i].telefone}</th>
                    <th><img src="https://thispersondoesnotexist.com/" width="50"></th>
                    <th>${clientes[i].data_cadastro}</th>
                    <th>${clientes[i].data_ultimo_pedido}</th>
                    <td>
                        <a href="#" class="btn btn-outline-warning btn-sm">
                            Editar
                        </a>
                        <a href="#" class="btn btn-outline-danger btn-sm">
                            Excluir
                        </a>
                    </td>
                </tr>`
        }});

    
    //outro modo de fazer
    
    //function CLIENTES(clientes) {
    //    clientes.forEach(cada => {
    //        TABLE_CLIENTES.innerHTML += `
    //          <tr>
    //              <td></td>
    //              <td></td> 
    //              <td></td>   
    //          </tr>`;
    //    })}