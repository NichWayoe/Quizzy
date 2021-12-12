export default class Quiz {
    #title;
    #category;
    #id;
    #author;
    #questions;
    #numberOfQuestions;
    #answers;
    #answerOptions;
    #timeAllowed;
    #description;
    constructor(title,category,author,questions,numberOfQuestions,answers, answerOptions, timeAllowed, id, description) {
      this.#title = title
      this.#id = id;
      this.#category = category
      this.#description = description
      this.#author = author
      this.#questions = questions
      this.#timeAllowed = timeAllowed
      this.#numberOfQuestions = numberOfQuestions
      this.#answerOptions = answerOptions
      this.#answers = answers
    }

    getTitle() {
        return this.#title;
    }

    getDescription() {
        return this.#description;
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
    getAnswerOptions() {
        return this.#answerOptions
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
                answerOptions: Quiz.getAnswerOptionsForQuestions(),
                timeAllowed: Quiz.getTimeAllowed(),
                description: Quiz.getDescription(),
                };
        },
        fromFirestore: function(snapshot, options) {
            const data = snapshot.data(options);
            return new Quiz(data.title, data.category, data.author, data.questions, data.numberOfQuestions, data.answers, data.answerOptions, data.timeAllowed, snapshot.id, data.description);
        }
    }
  }
