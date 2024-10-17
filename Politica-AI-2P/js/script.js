let currentIndex = 0;
const cards = document.querySelectorAll('.card');

// Função para mostrar a carta atual
function showCurrentCard() {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'hidden');
        if (index === currentIndex) {
            card.classList.add('active');
            card.classList.add('fade-in');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Função para avançar para a próxima carta
document.querySelectorAll('#nextButton').forEach(button => {
    button.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= cards.length) {
            currentIndex = 0; // Reinicia se chegar ao final
        }
        showCurrentCard();
    });
});

// Função para voltar para a carta anterior
document.querySelectorAll('#prevButton').forEach(button => {
    button.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cards.length - 1; // Vai para a última carta se voltar do início
        }
        showCurrentCard();
    });
});

// Inicializa mostrando a primeira carta
showCurrentCard();
