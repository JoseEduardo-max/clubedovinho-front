const TABLE = document.getElementById('table-products');

listar()

function listar() {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(dados => {
        TABLE.innerHTML = '';

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
                        <a href="#" onclick="excluir('${product.id}')" class="btn btn-outline-danger btn-sm">
                            Excluir
                        </a>
                    </td>
                </tr>
            `;
        
        });
    });
}

function excluir(id) {
        if (false === confirm('Confirma ou sem firma?')) {
            return;
        }


        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'
        });

        alert('Excluido com sucesso');
        listar();
}



function openModal(imagem, nome) {
    document.getElementById("modalImage").src = imagem;
    document.getElementById("imageModalLabel").innerText = nome; 
}

function addProduct() {
event.preventDefault();

let dados = {
    name: document.getElementById('name').value,
    price:document.getElementById('price').value,
    category:document.getElementById('category').value,
    quantity:document.getElementById('quantity').value,
    image:document.getElementById('image').value,
};

fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
});

    document.getElementById('form').reset();
    alert('Pronto, cadastrado com sucesso');
    listar();
}



