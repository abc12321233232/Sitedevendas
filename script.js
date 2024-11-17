let carrinho = [];

function adicionarCarrinho(nomeProduto, precoProduto) {
    carrinho.push({ nome: nomeProduto, preco: precoProduto });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
}

function mostrarCarrinho() {
    const carrinhoStorage = JSON.parse(localStorage.getItem('carrinho')) || [];
    const divCarrinho = document.getElementById('itens-carrinho');
    divCarrinho.innerHTML = '';
    
    if (carrinhoStorage.length === 0) {
        divCarrinho.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        let total = 0;
        carrinhoStorage.forEach(item => {
            total += item.preco;
            divCarrinho.innerHTML += `<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`;
        });
        document.getElementById('total').innerText = total.toFixed(2);
    }
}

function finalizarCompra() {
    const email = prompt("Digite seu e-mail para finalizar a compra:");
    if (email) {
        enviarEmail(email);
    }
}

function enviarEmail(email) {
    // Use um serviço de e-mail (por exemplo, EmailJS) aqui para enviar o e-mail.
    alert('E-mail de confirmação enviado!');
}
