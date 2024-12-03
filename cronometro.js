let timer;
let isRunning = false;
let seconds = localStorage.getItem('seconds') ? parseInt(localStorage.getItem('seconds')) : 0;
let minutes = localStorage.getItem('minutes') ? parseInt(localStorage.getItem('minutes')) : 0;

// Atualiza o display do cronômetro
function updateDisplay() {
    const timeDisplay = document.getElementById('time-display');
    timeDisplay.textContent = formatTime(minutes) + ':' + formatTime(seconds);
}

// Formata os valores de minutos e segundos
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Inicia ou para o cronômetro
function startStopTimer() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('start-stop').textContent = 'Iniciar';
    } else {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();

            // Salva o tempo no localStorage
            localStorage.setItem('seconds', seconds);
            localStorage.setItem('minutes', minutes);
        }, 1000);
        document.getElementById('start-stop').textContent = 'Parar';
    }
    isRunning = !isRunning;
}

// Reinicia o cronômetro
function resetTimer() {
    clearInterval(timer); // Para o cronômetro, se estiver rodando
    isRunning = false; // Reseta o estado de execução

    // Zera os minutos e segundos
    minutes = 0;
    seconds = 0;

    // Atualiza o display
    updateDisplay();

    // Atualiza o localStorage
    localStorage.setItem('seconds', seconds);
    localStorage.setItem('minutes', minutes);

    // Reseta o texto do botão para 'Iniciar'
    document.getElementById('start-stop').textContent = 'Iniciar';
}

// Verifica se o cronômetro está rodando após carregar a página
function checkIfRunning() {
    if (localStorage.getItem('isRunning') === 'true') {
        isRunning = true;
        document.getElementById('start-stop').textContent = 'Parar';
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();

            // Salva o tempo no localStorage
            localStorage.setItem('seconds', seconds);
            localStorage.setItem('minutes', minutes);
        }, 1000);
    } else {
        updateDisplay();
    }
}

// Salva o estado do cronômetro quando a página é descarregada
window.addEventListener('beforeunload', () => {
    localStorage.setItem('isRunning', isRunning);
});

// Chama a função para verificar o estado do cronômetro ao carregar a página
checkIfRunning();

// Event listener para o botão de reiniciar
document.getElementById('reset').addEventListener('click', resetTimer);

// Event listener para o botão de iniciar/pausar
document.getElementById('start-stop').addEventListener('click', startStopTimer);
