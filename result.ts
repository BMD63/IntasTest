import { currentTest, answers, savedResults, setCurrentTest, resetAnswers, timeLeft } from './data.ts';
import { renderTest } from './test.ts';

export function renderResult(): void {
  const content = document.getElementById('content') as HTMLElement;
  const correctAnswers = currentTest!.questions.reduce((acc, q, index) => {
    return acc + (answers[index] === q.correctAnswer ? 1 : 0);
  }, 0);
  savedResults[currentTest!.id] = correctAnswers;

  const answeredCount = answers.filter(a => a !== null).length;
  const totalQuestions = currentTest!.questions.length;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  content.innerHTML = `
    <header class="page-header">
      <span class="page-header__exit">Выход</span>
      <h2 class="page-header__title">${currentTest!.name}</h2>
      <div class="page-header__info">
        <span class="page-header__reset">Сбросить все ответы</span>
        <span class="page-header__separator">|</span>
        <span class="page-header__status">${answeredCount} / ${totalQuestions}</span>
        <span class="page-header__separator">|</span>
        <span class="page-header__timer">${minutes}:${seconds < 10 ? '0' + seconds : seconds}</span>
      </div>
    </header>
    <div class="result">
      <h1>Тест завершён</h1>
      <p class="result__summary">Вы ответили на ${answeredCount} вопросов из ${totalQuestions}</p>
      <p class="result__answers-label">Ваши ответы:</p>
      <ul class="result__list">
        ${currentTest!.questions.map((q, index) => `
          <li class="result__item">
            <p>${index + 1}. ${q.question}</p>
            <p>Правильный ответ: ${q.correctAnswer}</p>
            <p>Вы ответили: ${answers[index] !== null ? answers[index] : 'Не ответили'}</p>
          </li>
        `).join('')}
      </ul>
    </div>
    <footer class="page-footer">
      <button class="button" id="restartTest">Пройти ещё раз</button>
    </footer>
  `;

  document.getElementById('restartTest')!.addEventListener('click', () => {
    resetAnswers();
    renderTest();
  });

  content.querySelector('.page-header__reset')!.addEventListener('click', () => {
    resetAnswers();
    renderTest();
  });

  content.querySelector('.page-header__exit')!.addEventListener('click', () => {
    setCurrentTest(null);
    content.innerHTML = `
      <div class="welcome">
        <p>Выберите тест из списка</p>
      </div>
    `;
    const sidebar = document.getElementById('sidebar') as HTMLElement;
    const toggle = sidebar.querySelector('.sidebar__toggle') as HTMLElement;
    const nav = sidebar.querySelector('.sidebar__nav') as HTMLElement;
    const title = sidebar.querySelector('.sidebar__title') as HTMLElement;
    sidebar.classList.add('sidebar--collapsed');
    toggle.classList.remove('sidebar__toggle--collapse');
    toggle.classList.add('sidebar__toggle--expand');
    toggle.textContent = '☰';
    nav.style.display = 'none';
    title.style.display = 'none';
  });
}