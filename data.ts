export interface Question {
    question: string;
    options: string[];
    answer: string;
  }
  
  export interface Test {
    id: number;
    name: string;
    description: string;
    questions: Question[];
  }
  
  export const tests: Test[] = [
    {
      id: 1,
      name: "Test name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut nunc ultricies aliquam. Donec nec nunc nec nunc ultricies aliquam. Donec nec nunc nec nunc ultricies aliquam. Donec nec nunc nec nunc ultricies aliquam.",
      questions: [
        { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
        { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
        { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
        { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
        { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
      ]
    },
    {
      id: 2,
      name: "Тест 2",
      description: "Описание второго теста.",
      questions: [
        { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
        { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
        { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
        { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
        { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
      ]
    },
    {
        id: 3,
        name: "Test",
        description: "Описание второго теста.",
        questions: [
            { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
            { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
            { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
            { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
            { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
          ]
      },
      {
        id: 4,
        name: "Название теста",
        description: "Описание второго теста.",
        questions: [
            { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
            { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
            { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
            { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
            { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], answer: "Вариант А" },
          ]
      },
  ];
  
  export let currentTest: Test | null = null;
  export let answers: (string | null)[] = Array(5).fill(null);
  export let timer: number | null = null;
  export const timeLimit: number = 5 * 60;
  export const savedResults: { [key: number]: number } = JSON.parse(localStorage.getItem('testResults') || '{}');
  
  export function setCurrentTest(test: Test): void {
    currentTest = test;
  }
  
  export function resetAnswers(): void {
    answers = Array(5).fill(null);
  }
  
  export function setTimer(newTimer: number): void {
    timer = newTimer;
  }
  
  export function clearTimer(): void {
    if (timer !== null) clearInterval(timer);
  }
  
  export function saveResult(testId: number, result: number): void {
    savedResults[testId] = result;
    localStorage.setItem('testResults', JSON.stringify(savedResults));
  }