let A = document.getElementById("op1");
let B = document.getElementById("op2");
let C = document.getElementById("op3");
let D = document.getElementById("op4");
let op_A = document.getElementById('a');
let op_B = document.getElementById('b');
let op_C = document.getElementById('c');
let op_D = document.getElementById('d');
let start = document.getElementById('start');
let ops = document.querySelectorAll('.choices'); 
let numQuestao = document.getElementById('questao');
let pergunta = document.getElementById('pergunta');
let ok = document.getElementById('okBtn');
let modal = document.getElementById('modal');
let overlay = document.getElementById('overlay')
let correcao = document.getElementById('correcao');
let result = document.getElementById('result');
let quiz = document.getElementById('quiz');
let restart = document.getElementById('restart');
let questao = 0;
let acertos = 0;
const totalQuestoes = 8; // Total de questões

function begin() {
    start.style.display = "none";
    quiz.style.display = "flex";
    // Mostrar as opções
    ops.forEach(op => op.style.display = "flex");
    selected();
    var audio = document.getElementById('myAudio');
    audio.play().then(function() {
        console.log('Áudio iniciado com sucesso');
    }).catch(function(error) {
        console.log('Falha ao iniciar o áudio:', error);
    });
}

function selected() {
    if (questao >= totalQuestoes) {
        showResults();
        return;
    }

    questao += 1;
    numQuestao.textContent = `QUESTÃO ${questao}`;

    // Configurar as perguntas e respostas
    switch (questao) {
        case 1:
            pergunta.textContent = 'Qual a função dos neurônios?';
            op_A.textContent = 'Enviar informações para o cérebro.'; op_A.dataset.correct = "false";
            op_B.textContent = 'Protege as células nervosas.'; op_B.dataset.correct = "false";
            op_C.textContent = 'É responsável pela nossa capacidade de movimento.'; op_C.dataset.correct = "false";
            op_D.textContent = 'Conduz impulsos nervosos.'; op_D.dataset.correct = "true";
            break;
        case 2:
            pergunta.textContent = 'Quais células compõem a Glia?';
            op_A.textContent = 'microglia, astrocitos, oligodendrocitos, células de schwann.'; op_A.dataset.correct = "true";
            op_B.textContent = 'microglia, celulas de schwann, neurônio, astrocitos.'; op_B.dataset.correct = "false";
            op_C.textContent = 'axônio, bainha de mielina, corpo celular, dendritos.'; op_C.dataset.correct = "false";
            op_D.textContent = 'mesangiais, contráteis e fagocíticas'; op_D.dataset.correct = "false";
            break;
        case 3:
            pergunta.textContent = 'O que compõe o sistema nervoso periférico?';
            op_A.textContent = 'axônios e células de schwann.'; op_A.dataset.correct = "false";
            op_B.textContent = 'nervos cranianos e espinhais.'; op_B.dataset.correct = "false";
            op_C.textContent = 'gânglios e nervos.'; op_C.dataset.correct = "true";
            op_D.textContent = 'neurônios e glia.'; op_D.dataset.correct = "false";
            break;
        case 4:
            pergunta.textContent = 'Qual a função da bainha de mielina do neurônio?';
            op_A.textContent = 'Bloquear impulsos elétricos desnecessários.'; op_A.dataset.correct = "false";
            op_B.textContent = 'ajudar o neurônio a conduzir impulsos elétricos com mais velocidade e precisão'; op_B.dataset.correct = "true";
            op_C.textContent = 'facilitar a comunicação entre sinapses, mas não influencia na velocidade.'; op_C.dataset.correct = "false";
            op_D.textContent = 'proteger o neurônio de agentes externos.'; op_D.dataset.correct = "false";
            break;
        case 5:
            pergunta.textContent = 'De qual célula o tecido nervoso se origina?';
            op_A.textContent = 'Ectoderme.'; op_A.dataset.correct = "true";
            op_B.textContent = 'neuroblasto.'; op_B.dataset.correct = "false";
            op_C.textContent = 'celulas tronco e epiblastos.'; op_C.dataset.correct = "false";
            op_D.textContent = 'neurônios.'; op_D.dataset.correct = "false";
            break;
        case 6:
            pergunta.textContent = 'O que é o ato reflexo?';
            op_A.textContent = 'ato involuntário comandado pelo córtex pré-frontal.'; op_A.dataset.correct = "false";
            op_B.textContent = 'ato involuntário comandado pela medula espinhal.'; op_B.dataset.correct = "true";
            op_C.textContent = 'ato involuntário comandado pelos neurônios.'; op_C.dataset.correct = "false";
            op_D.textContent = 'ato involuntário comandado pelos músculos.'; op_D.dataset.correct = "false";
            break;
        case 7:
            pergunta.textContent = 'A bexiga é um belo exemplo de qual tipo de músculo?';
            op_A.textContent = 'músculo cardíaco.'; op_A.dataset.correct = "false";
            op_B.textContent = 'Músculo esquelético.'; op_B.dataset.correct = "false";
            op_C.textContent = 'músculo estriado.'; op_C.dataset.correct = "false";
            op_D.textContent = 'músculo liso.'; op_D.dataset.correct = "true";
            break;
        case 8:
            pergunta.textContent = 'Para que um movimento ocorra, a Actina deve deslizar sobre a miosina. Verdadeiro ou falso?';
            op_A.textContent = 'Falso. A miosina deslizar sobre o calcio.'; op_A.dataset.correct = "false";
            op_B.textContent = 'Falso. A miosina deve deslizar sobre a actina.'; op_B.dataset.correct = "true";
            op_C.textContent = 'Verdadeiro. Isso ocorre quando o calcio é liberado sobre o reticulo endoplasmático.'; op_C.dataset.correct = "false";
            op_D.textContent = 'Verdadeiro. Isso ocorre quando é feito um exercício físico intenso.'; op_D.dataset.correct = "false";
            break;
    }
}

function checkAnswer(event) {
    let selectedOption = event.target.closest('.choices');
    
    if (selectedOption) {
        // Verificar se a opção selecionada é a correta
        if (selectedOption.querySelector('p').dataset.correct === "true") {
            acertos += 1;
        }
        selected();
    }
}

function showResults() {
    quiz.style.display = "none";
    correcao.style.display = 'flex';
    result.style.display = 'flex';
    result.textContent = `Você acertou ${acertos} de ${totalQuestoes} questões.`;
    restart.style.display = 'flex'
}

function resetQuiz() {
    questao = 0;
    acertos = 0;
    numQuestao.textContent = '';
    pergunta.textContent = '';
    correcao.style.display = 'none';
    result.style.display = 'none';
    restart.style.display = 'none'
    // Reset other elements if needed
    begin(); // Restart the quiz
}

start.addEventListener('click', begin);

ops.forEach(op => op.addEventListener('click', checkAnswer));

ok.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

restart.addEventListener('click', resetQuiz)
