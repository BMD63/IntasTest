import { currentTest, answers, saveResult, resetAnswers, clearTimer, setCurrentTest } from './data.ts';
import { renderSidebar } from './script.ts';

export function renderResult(): void {
  const correctAnswers = currentTest!.questions.reduce((sum, q, i) => 
    sum + (answers[i] === q.answer ? 1 : 0), 0);

  saveResult(currentTest!.id, correctAnswers);

  const content = document.getElementById('content') as HTMLElement;
  content.innerHTML = `
    <h1>Результат ${currentTest!.name}</h1>
    <p>Правильных ответов: ${correctAnswers} из 5</p>
    <h3>Ваши ответы:</h3>
    <ul>
      ${currentTest!.questions.map((q, i) => `
        <li>
          ${q.question} — 
          ${answers[i] === null ? '<span class="result__unanswered">Вы не ответили</span>' : 
            (answers[i] === q.answer ? `${answers[i]} (правильно)` : `${answers[i]} (неправильно, правильный: ${q.answer})`)}
        </li>
      `).join('')}
    </ul>
    <button class="button" id="backToTests">Вернуться к тестам</button>
  `;

  document.getElementById('backToTests')!.addEventListener('click', () => {
    clearTimer();
    resetAnswers();
    setCurrentTest(null); 
    content.innerHTML = '<p>Выберите тест из списка слева.</p>';
    renderSidebar();
  });
}