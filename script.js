// Seleciona todas as imagens e imagens dentro da classe horizontal
const images = document.querySelectorAll('img');
const modal = document.createElement('div');
const modalImg = document.createElement('img');
const closeBtn = document.createElement('span');

// Cria o modal
modal.classList.add('modal');
document.body.appendChild(modal);

// Estilo para fechar o modal
closeBtn.innerHTML = '&times;';
closeBtn.classList.add('close');

// Adiciona a imagem ampliada ao modal
modal.appendChild(closeBtn);
modal.appendChild(modalImg);

// Função para abrir o modal com a imagem ampliada
images.forEach(img => {
    img.addEventListener('click', (e) => {
        modal.style.display = 'flex';
        modalImg.src = e.target.src;

        // Verifica se a imagem faz parte da classe 'horizontal' para ajustar o tamanho
        if (e.target.closest('.horizontal')) {
            modalImg.classList.add('horizontal-modal'); // Adiciona classe para imagens horizontais
        } else {
            modalImg.classList.remove('horizontal-modal'); // Remove caso seja imagem normal
        }
    });
});


// Função para fechar o modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target !== modalImg) {
        modal.style.display = 'none';
    }
});
