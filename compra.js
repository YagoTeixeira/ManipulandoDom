const btn = document.getElementById('btnComprar');

function Mudar_Preco(text) {
    const numero = text
        .replace(/[R$\s]/g, '') 
        .replace(/\./g, '')    
        .replace(',', '.');   

    return Number(numero);
}

const preco = Mudar_Preco(document.getElementById('preco').textContent);
const preco1 = Mudar_Preco(document.getElementById('preco1').textContent);
const preco2 = Mudar_Preco(document.getElementById('preco2').textContent);

btn.addEventListener('click', function() {
    const total = preco + preco1 + preco2;
    document.getElementById('total').innerHTML =
        `<h3>Valor Total: <strong>R$ ${total.toFixed(2)}</strong></h3>`;
});
