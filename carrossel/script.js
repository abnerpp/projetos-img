document.addEventListener('DOMContentLoaded', function() {
    const imagens = document.querySelectorAll('.carrossel-imagem');
    const indicadores = document.querySelectorAll('.indicador');
    let imagemAtual = 0;
    
    // Inicializa o carrossel
    mostrarImagem(imagemAtual);
    
    // Configura a transição automática
    setInterval(() => {
        proximaImagem();
    }, 5000);
});

// Variável global para controlar a imagem atual
let imagemAtual = 0;

function mostrarImagem(index) {
    const imagens = document.querySelectorAll('.carrossel-imagem');
    const indicadores = document.querySelectorAll('.indicador');
    
    // Esconde todas as imagens
    imagens.forEach(img => img.classList.remove('ativa'));
    
    // Remove a classe ativo de todos os indicadores
    indicadores.forEach(ind => ind.classList.remove('ativo'));
    
    // Mostra a imagem atual
    imagens[index].classList.add('ativa');
    
    // Ativa o indicador correspondente
    if (indicadores[index]) {
        indicadores[index].classList.add('ativo');
    }
    
    // Atualiza o índice da imagem atual
    imagemAtual = index;
}

function mudarImagem(direcao) {
    const imagens = document.querySelectorAll('.carrossel-imagem');
    let novoIndex = imagemAtual + direcao;
    
    // Verifica os limites
    if (novoIndex < 0) {
        novoIndex = imagens.length - 1;
    } else if (novoIndex >= imagens.length) {
        novoIndex = 0;
    }
    
    mostrarImagem(novoIndex);
}

function proximaImagem() {
    mudarImagem(1);
}

function irParaImagem(index) {
    mostrarImagem(index);
}