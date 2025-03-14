const TABLE = document.getElementById('table-products');

fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(dados => {
        dados.forEach(product => {
            TABLE.innerHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td><img src="${product.image}" alt="${product.name}" width="50" class="img-thumbnail" 
                        data-bs-toggle="modal" data-bs-target="#imageModal" onclick="openModal('${product.image}', '${product.name}')">
                    </td>
                    <td>${product.quantity}</td>
                    <td>${product.price}</td>
                    <td>
                        <a href="#" class="btn btn-outline-warning btn-sm">
                            Editar
                        </a>
                        <a href="#" onclick="excluir(${product.id})" class="btn btn-outline-danger btn-sm">
                            Excluir
                        </a>
                    </td>
                </tr>
            `;
        
        });
    });

    function excluir(id) {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'
        });

        alert("Produto excluido");

        location.href = "";
    }



function openModal(imagem, nome) {
    document.getElementById("modalImage").src = imagem;
    document.getElementById("imageModalLabel").innerText = nome; 
}




