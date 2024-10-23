let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Adicionando os nomes das cartas para o botão de navegação
const cardTitles = [
    "Antes do Stalinismo",
    "Durante o Stalinismo",
    "Depois do Stalinismo"
];

// Função para mostrar a carta atual e ajustar os botões de navegação
function showCurrentCard() {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'hidden');
        if (index === currentIndex) {
            card.classList.add('active');
            card.style.transform = 'translateX(0)';
        } else if (index < currentIndex) {
            card.style.transform = 'translateX(-100%)'; // Sai pela esquerda
            card.classList.add('hidden');
        } else {
            card.style.transform = 'translateX(100%)'; // Sai pela direita
            card.classList.add('hidden');
        }
    });

    // Ajusta o texto e visibilidade do botão "anterior"
    if (currentIndex === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
        prevButton.innerHTML = `<i class="bi bi-caret-left-fill"></i>`; // Remove o texto
    }

    // Ajusta o texto e visibilidade do botão "próximo"
    if (currentIndex === cards.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
        nextButton.innerHTML = `<i class="bi bi-caret-right-fill"></i>`; // Remove o texto
    }
}

// Função para avançar para a próxima carta
nextButton.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= cards.length) {
        currentIndex = cards.length - 1; // Não avançar além da última carta
    }
    showCurrentCard();
});

// Função para voltar para a carta anterior
prevButton.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 0; // Não voltar além da primeira carta
    }
    showCurrentCard();
});

// Inicializa mostrando a primeira carta e ajusta os botões
showCurrentCard();
