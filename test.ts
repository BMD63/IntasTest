import { currentTest, answers, timeLimit, setTimer, clearTimer, resetAnswers } from './data.ts';
import { renderResult } from './result.ts'; 

function startTimer(content: HTMLElement, onFinish: () => void): void {
  let timeLeft: number = timeLimit;
  const timerDisplay = content.querySelector('.test__timer') as HTMLElement;

  const timer = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `Осталось времени: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      onFinish();
    }
  }, 1000);
  setTimer(timer);
}

export function renderTest(): void {
  const content = document.getElementById('content') as HTMLElement;
  content.innerHTML = `
    <h1>${currentTest!.name}</h1>
    <div class="test__timer">Осталось времени: 5:00</div>
    <p class="test__status">Вопросов отвечено: ${answers.filter(a => a !== null).length} / 5</p>
    ${currentTest!.questions.map((q, index) => `
      <div class="test__question">
        <h3>Вопрос ${index + 1}: ${q.question}</h3>
        <div class="test__options" data-question="${index}">
          ${q.options.map((opt, optIndex) => `
            <label class="test__option">
              <input type="radio" name="question-${index}" value="${optIndex}" 
                ${answers[index] === opt ? 'checked' : ''}>
              ${opt}
            </label>
          `).join('')}
        </div>
      </div>
    `).join('')}
    <button class="button" id="resetTest">Начать заново</button>
    <button class="button" id="finishTest">Завершить</button>
  `;

  startTimer(content, renderResult);

  content.querySelectorAll('.test__options').forEach(optionGroup => {
    optionGroup.addEventListener('change', (e: Event) => {
      const input = e.target as HTMLInputElement;
      if (input.type !== 'radio') return;

      const questionIndex = parseInt((optionGroup as HTMLElement).dataset.question!);
      const selectedOption = parseInt(input.value);

      answers[questionIndex] = currentTest!.questions[questionIndex].options[selectedOption];
      content.querySelector('.test__status')!.textContent = `Вопросов отвечено: ${answers.filter(a => a !== null).length} / 5`;
    });
  });

  document.getElementById('resetTest')!.addEventListener('click', () => {
    clearTimer();
    resetAnswers(); // Теперь функция импортирована
    renderTest();
    content.querySelectorAll('input[type="radio"]').forEach(radio => {
      (radio as HTMLInputElement).checked = false;
    });
  });

  document.getElementById('finishTest')!.addEventListener('click', () => {
    clearTimer();
    renderResult();
  });
}