import { currentTest, answers, timeLimit, setTimer, clearTimer, resetAnswers, setCurrentTest, setTimeLeft } from './data.ts';
import { renderResult } from './result.ts';

function startTimer(content: HTMLElement, onFinish: () => void): void {
  let timeLeft: number = timeLimit;
  const timerDisplay = content.querySelector('.page-header__timer') as HTMLElement;

  const timer = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    setTimeLeft(timeLeft);
    
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
    <header class="page-header">
      <span class="page-header__exit">Выход</span>
      <h2 class="page-header__title">${currentTest!.name}</h2>
      <div class="page-header__info">
        <span class="page-header__reset">Сбросить все ответы</span>
        <span class="page-header__separator">|</span>
        <span class="page-header__status">${answers.filter(a => a !== null).length} / ${currentTest!.questions.length}</span>
        <span class="page-header__separator">|</span>
        <span class="page-header__timer">${Math.floor(timeLimit / 60)}:${timeLimit % 60 < 10 ? '0' + (timeLimit % 60) : timeLimit % 60}</span>
      </div>
    </header>
    <div class="test__body">
      ${currentTest!.questions.map((q, index) => `
        <div class="test__question">
          <h3>${q.question}</h3>
          <div class="test__options" ${q.options.length <= 3? 'style="flex-direction: column;"' : ''}data-question="${index}">
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
      content.querySelector('.page-header__status')!.textContent = `${answers.filter(a => a !== null).length} / ${currentTest!.questions.length}`;
    });
  });

  content.querySelector('.page-header__reset')!.addEventListener('click', () => {
    showConfirmModal(() => {
      clearTimer();
      resetAnswers();
      renderTest();
      content.querySelectorAll('input[type="radio"]').forEach(radio => {
        (radio as HTMLInputElement).checked = false;
      });
    });
  });

  content.querySelector('.page-header__exit')!.addEventListener('click', () => {
    clearTimer();
    setCurrentTest(null);
    content.innerHTML = `
      <div class="welcome">
        <p>Выберите тест из списка слева.</p>
      </div>
    `;
  });

  document.getElementById('finishTest')!.addEventListener('click', () => {
    clearTimer();
    renderResult();
  });
}