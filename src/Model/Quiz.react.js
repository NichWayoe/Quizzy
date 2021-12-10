export default class Quiz {
    #title;
    #category;
    #id;
    #author;
    #questions;
    #numberOfQuestions;
    #answers;
    #answerOptionsForQuestions;
    #timeAllowed
    constructor(title,category,author,questions,numberOfQuestions,answers, answerOptionsForQuestions, timeAllowed, id) {
      this.#title = title
      this.#id = id;
      this.#category = category
      this.#author = author
      this.#questions = questions
      this.#timeAllowed = timeAllowed
      this.#numberOfQuestions = numberOfQuestions
      this.#answerOptionsForQuestions= answerOptionsForQuestions
      this.#answers=answers
    }

    getTitle() {
        return this.#title;
    }

    getQuestions() {
        return this.#questions;
    }

    getNumberOfQuestions() {
        return this.#numberOfQuestions;
    }

    getID() {
        return this.#id;
    }

    getCategory() {
        return this.#category;
    }
    getAnswerOptionsForQuestions() {
        return this.#answerOptionsForQuestions;
    }
    getTimeAllowed(){
        return this.#timeAllowed;
    }

    getAuthor() {
        return this.#author;
    }

    getAnswers() {
        return this.#answers;
    }

    addQuestions(question) {
        if (question != null) {
            this.#questions.add(question);
            this.#numberOfQuestions += 1;
        }
    }
    deleteQuiz() {
        
    }

    static convertor = {
        toFirestore: (Quiz) => {
            return {
                author: Quiz.getAuthor(),
                questions: Quiz.getQuestions(),
                answers: Quiz.getAnswers(),
                category: Quiz.getCategory(),
                title: Quiz.getTitle(),
                numberOfQuestions: Quiz.getNumberOfQuestions(),
                answerOptionsForQuestions: Quiz.getAnswerOptionsForQuestions(),
                timeAllowed: Quiz.getTimeAllowed(),
                };
        },
        fromFirestore: function(snapshot, options) {
            const data = snapshot.data(options);
            return new Quiz(data.title, data.category, data.author, data.questions, data.numberOfQuestions, data.answers, data.answerOptionsForQuestions, data.timeAllowed, snapshot.id);
        }
    }
  }
