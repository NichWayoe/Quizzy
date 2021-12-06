export default class QuizCategory {
  #title;
  #subtitle;
  #quizzes;
  constructor(title, subtitle, quizzes) {
      this.#title = title
      this.#subtitle = subtitle
      this.#quizzes = quizzes
    }
    getTitle() {
        return this.#title;
    }

    getSubtitle() {
      return this.#subtitle;
  }

    getQuizzes() {
        return this.quizzes;
    }

    static convertor = {
      toFirestore: (QuizCategory) => {
          return {
              title: QuizCategory.getName(),
              subtitle: QuizCategory.getQuizzes(),
              };
      },
      fromFirestore: function(snapshot, options) {
          const data = snapshot.data(options);
          return new QuizCategory(data.title,  data.subtitle, data.quizzes);
      }
  }
    
  }


