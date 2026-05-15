const botao = document.getElementById('myButton');

botao.addEventListener('click', function() {
    alert('Botão clicado!')    
})

const alterar = document.getElementById('alterar')


    
    function mudarCor(){
        const caixa = document.getElementById('myDiv')
        if (caixa.style.backgroundColor === 'blue'){
            caixa.style.backgroundColor = 'yellow'
        } else {
            caixa.style.backgroundColor = 'blue'
        }
    }
alterar.addEventListener('click', mudarCor);
   