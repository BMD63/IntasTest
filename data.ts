import { Test, tests } from './tests.ts'
  
  export let currentTest: Test | null = null;
  export let answers: (string | null)[] = Array(5).fill(null);
  export let timer: number | null = null;
  export const timeLimit: number = 5 * 60;
  export let timeLeft: number = timeLimit;
  export const savedResults: { [key: number]: number } = JSON.parse(localStorage.getItem('testResults') || '{}');
  
  export function setCurrentTest(test: Test | null): void {
    currentTest = test;
  }
  
  export function resetAnswers(): void {
    answers = Array(5).fill(null);
  }
  
  export function setTimer(newTimer: number): void {
    timer = newTimer;
  }
  export function setTimeLeft(newTimeLeft: number): void {
    timeLeft = newTimeLeft;
  }
  
  export function clearTimer(): void {
    if (timer !== null) clearInterval(timer);
  }
  
  export function saveResult(testId: number, result: number): void {
    savedResults[testId] = result;
    localStorage.setItem('testResults', JSON.stringify(savedResults));
  }
  export { tests };