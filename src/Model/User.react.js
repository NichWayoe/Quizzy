
export default class User {
    constructor(firstName, lastName) {
      this.#firstName = firstName;
      this.#lastName  = lastName;
      
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    static convertor = {
        toFirestore: (User) => {
            return {
                firstName: User.firstName,
                lastName: User.lastName,
                };
        },
        fromFirestore: function(snapshot, options) {
            const data = snapshot.data(options);
            return new User(data.firstName,  data.lastName);
        }
    }
  }
