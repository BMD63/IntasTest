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
          { question: "Вопрос", options: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Morbi at diam egestas, ultrices massa vel, volutpat ex", "Nam quis pharetra nunc, a sollicitudin diam", ], correctAnswer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        ]
      },
      {
        id: 2,
        name: "Тест 2",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        questions: [
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
          { question: "Вопрос", options: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Morbi at diam egestas, ultrices massa vel, volutpat ex.", ], correctAnswer: "Morbi at diam egestas, ultrices massa vel, volutpat ex." },
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
          { question: "Вопрос", options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г", "Вариант Д"], correctAnswer: "Вариант А" },
        ]
      },
      {
          id: 3,
          name: "Test",
          description: "Aenean accumsan risus vel venenatis elementum. Mauris vel sagittis libero, eget malesuada orci. Donec scelerisque bibendum lobortis. Curabitur nulla nunc, vulputate vitae tellus nec, venenatis porttitor nisi. Maecenas quis imperdiet mauris. Phasellus eget efficitur lorem. ",
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