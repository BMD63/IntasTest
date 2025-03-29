export interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
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
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
        ]
      },
      {
        id: 2,
        name: "Тест 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut nunc ultricies aliquam. Donec nec nunc nec nunc ultricies aliquam. Donec nec nunc nec nunc ultricies aliquam. Donec nec nunc nec nunc ultricies aliquam.",
        questions: [
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
        ]
      },
      {
          id: 3,
          name: "Test",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut nunc ultricies aliquam. Donec nec nunc nec nunc ultricies aliquam. Donec nec nunc nec nunc ultricies aliquam. Donec nec nunc nec nunc ultricies aliquam.",
          questions: [
              { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
              { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
              { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
              { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
              { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
            ]
        },
        {
          id: 4,
          name: "Название теста",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut nunc ultricies aliquam. Donec nec nunc nec nunc ultricies aliquam. Donec nec nunc nec nunc ultricies aliquam. Donec nec nunc nec nunc ultricies aliquam.",
          questions: [
              { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
              { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
              { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
              { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
              { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
            ]
        },
  ];