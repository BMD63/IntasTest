import { currentTest, setCurrentTest } from './data.ts';
import { renderTest } from './test.ts';

export function renderDescription(): void {
  const content = document.getElementById('content') as HTMLElement;
  content.innerHTML = `
    <header class="page-header">
      <span>Описание</span>
    </header>
    <div class="description">
      <p>${currentTest!.description}</p>
      <div class="description__buttons">
        <button class="button" id="startTest">Начать</button>
        <button class="button button--cancel" id="cancelTest">Отмена</button>
      </div>
    </div>
  `;

  document.getElementById('startTest')!.addEventListener('click', () => {
    renderTest();
  });

  document.getElementById('cancelTest')!.addEventListener('click', () => {
    setCurrentTest(null);
    content.innerHTML = `
      <div class="welcome">
        <p>Выберите тест из списка слева.</p>
      </div>
    `;
  });
}