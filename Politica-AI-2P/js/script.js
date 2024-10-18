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
        } else {
            card.classList.add('hidden');
        }
    });

    // Ajusta o texto e visibilidade do botão "anterior"
    if (currentIndex === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
        prevButton.innerHTML = `
            <i class="bi bi-caret-up-fill"></i>
            <span>${cardTitles[currentIndex - 1]}</span>
        `;
    }

    // Ajusta o texto e visibilidade do botão "próximo"
    if (currentIndex === cards.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
        nextButton.innerHTML = `
            <span>${cardTitles[currentIndex + 1]}</span>
            <i class="bi bi-caret-down-fill"></i>
        `;
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
