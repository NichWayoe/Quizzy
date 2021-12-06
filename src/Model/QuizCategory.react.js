export default class QuizCategory {
  #name;
  #quizzes;
  constructor(name, quizzes) {
      this.#name = name
      this.#quizzes = quizzes
    }
    getTitle() {
        return this.name;
    }

    getQuizzes() {
        return this.quizzes;
    }

    static convertor = {
      toFirestore: (QuizCategory) => {
          return {
              name: QuizCategory.getName(),
              quizzes: QuizCategory.getQuizzes(),
              };
      },
      fromFirestore: function(snapshot, options) {
          const data = snapshot.data(options);
          return new QuizCategory(data.name,  data.quizzes);
      }
  }
    
  }


