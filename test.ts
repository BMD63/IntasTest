import { currentTest, answers, timeLimit, setTimer, clearTimer, resetAnswers, setCurrentTest } from './data.ts';
import { renderResult } from './result.ts';

function startTimer(content: HTMLElement, onFinish: () => void): void {
  let timeLeft: number = timeLimit;
  const timerDisplay = content.querySelector('.test__timer') as HTMLElement;

  const timer = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      onFinish();
    }
  }, 1000);
  setTimer(timer);
}

function showConfirmModal(onConfirm: () => void): void {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal__content">
      <p class="modal__text">Вы уверены?</p>
      <button class="button modal__button modal__button--confirm">Да</button>
      <button class="button modal__button modal__button--cancel">Нет</button>
    </div>
  `;
  document.body.appendChild(modal);

  const confirmButton = modal.querySelector('.modal__button--confirm') as HTMLButtonElement;
  const cancelButton = modal.querySelector('.modal__button--cancel') as HTMLButtonElement;

  confirmButton.addEventListener('click', () => {
    onConfirm();
    document.body.removeChild(modal);
  });

  cancelButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
}

export function renderTest(): void {
  const content = document.getElementById('content') as HTMLElement;
  content.innerHTML = `
    <header class="test__header">
      <span class="test__exit">Выход</span>
      <h2 class="test__title">${currentTest!.name}</h2>
      <div class="test__info">
        <span class="test__reset">Сбросить все ответы</span>
        <span class="test__separator">|</span>
        <span class="test__status">${answers.filter(a => a !== null).length} / 5</span>
        <span class="test__separator">|</span>
        <span class="test__timer">${Math.floor(timeLimit / 60)}:${timeLimit % 60 < 10 ? '0' + (timeLimit % 60) : timeLimit % 60}</span>
      </div>
    </header>
    <div class="test__body">
      ${currentTest!.questions.map((q, index) => `
        <div class="test__question">
          <h3>${q.question}</h3>
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
      <button class="button" id="finishTest">Завершить</button>
    </div>
  `;

  startTimer(content, renderResult);

  content.querySelectorAll('.test__options').forEach(optionGroup => {
    optionGroup.addEventListener('change', (e: Event) => {
      const input = e.target as HTMLInputElement;
      if (input.type !== 'radio') return;

      const questionIndex = parseInt((optionGroup as HTMLElement).dataset.question!);
      const selectedOption = parseInt(input.value);

      answers[questionIndex] = currentTest!.questions[questionIndex].options[selectedOption];
      content.querySelector('.test__status')!.textContent = `${answers.filter(a => a !== null).length} / 5`;
    });
  });

  content.querySelector('.test__reset')!.addEventListener('click', () => {
    showConfirmModal(() => {
      clearTimer();
      resetAnswers();
      renderTest();
      content.querySelectorAll('input[type="radio"]').forEach(radio => {
        (radio as HTMLInputElement).checked = false;
      });
    });
  });

  content.querySelector('.test__exit')!.addEventListener('click', () => {
    clearTimer();
    setCurrentTest(null);
    content.innerHTML = '<p>Выберите тест из списка слева.</p>';
  });

  document.getElementById('finishTest')!.addEventListener('click', () => {
    clearTimer();
    renderResult();
  });
}