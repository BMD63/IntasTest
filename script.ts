import { tests, savedResults, setCurrentTest } from './data.ts';
import { renderDescription } from './description.ts';

export function renderSidebar(): void {
  const sidebar = document.getElementById('sidebar') as HTMLElement;
  sidebar.innerHTML = '<h2>Тесты</h2><ul class="sidebar__list">' + 
    tests.map(test => `
      <li class="sidebar__item" data-test-id="${test.id}">
        ${test.name} ${savedResults[test.id] ? `(Результат: ${savedResults[test.id]}/5)` : ''}
      </li>`).join('') + 
    '</ul>';

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
  content.innerHTML = '<p>Выберите тест из списка.</p>';
  renderSidebar();
});