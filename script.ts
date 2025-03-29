import { tests, savedResults, setCurrentTest } from './data.ts';
import { renderDescription } from './description.ts';

export function renderSidebar(): void {
  const sidebar = document.getElementById('sidebar') as HTMLElement;
  sidebar.innerHTML = `
    <div class="sidebar__header">
      <span class="sidebar__toggle sidebar__toggle--collapse">←</span>
      <h2 class="sidebar__title">Тесты</h2>
    </div>
    <nav class="sidebar__nav">
      <ul class="sidebar__list">
        ${tests.map(test => `
          <li class="sidebar__item" data-test-id="${test.id}">
            ${test.name}
          </li>
        `).join('')}
      </ul>
    </nav>
  `;

  const toggle = sidebar.querySelector('.sidebar__toggle') as HTMLElement;
  const nav = sidebar.querySelector('.sidebar__nav') as HTMLElement;
  const title = sidebar.querySelector('.sidebar__title') as HTMLElement;

  toggle.addEventListener('click', () => {
    if (sidebar.classList.contains('sidebar--collapsed')) {
      sidebar.classList.remove('sidebar--collapsed');
      toggle.classList.remove('sidebar__toggle--expand');
      toggle.classList.add('sidebar__toggle--collapse');
      toggle.textContent = '←';
      nav.style.display = 'block';
      title.style.display = 'block';
    } else {
      sidebar.classList.add('sidebar--collapsed');
      toggle.classList.remove('sidebar__toggle--collapse');
      toggle.classList.add('sidebar__toggle--expand');
      toggle.textContent = '☰';
      nav.style.display = 'none';
      title.style.display = 'none';
    }
  });

  sidebar.addEventListener('click', (e: Event) => {
    const testItem = (e.target as HTMLElement).closest('.sidebar__item');
    if (testItem) {
      const testId = parseInt((testItem as HTMLElement).dataset.testId!);
      setCurrentTest(tests.find(t => t.id === testId)!);
      renderDescription();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content') as HTMLElement;
  content.innerHTML = `
    <div class="welcome">
      <p>Выберите тест из списка слева.</p>
    </div>
  `;
  renderSidebar();
});