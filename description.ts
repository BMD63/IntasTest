import { currentTest } from './data.ts';
import { renderTest } from './test.ts';

export function renderDescription(): void {
  const content = document.getElementById('content') as HTMLElement;
  content.innerHTML = `
    <h1>${currentTest!.name}</h1>
    <p>${currentTest!.description}</p>
    <button class="button" id="startTest">Начать тест</button>
  `;

  document.getElementById('startTest')!.addEventListener('click', renderTest);
}