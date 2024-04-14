let store = {
  _state: {
    entry: {
      loginText: "",
      passwordText: "",
      password2Text: "",
      userEntry: false,
      users: [
        { id: 0, login: "1234", password: "1234" },
        { id: 1, login: "12345", password: "1234" },
        { id: 2, login: "12346", password: "1234" },
        { id: 3, login: "12347", password: "1234" },
      ],
    },

    theory: {
      theoryTopics: [
        { id: 1, name: "Past Simple" },
        { id: 2, name: "Past Continuous" },
        { id: 3, name: "Past Perfect" },
        { id: 4, name: "Past Perfect Continuous" },
        { id: 5, name: "Present Simple" },
        { id: 6, name: "Present Continuous" },
        { id: 7, name: "Present Perfect" },
        { id: 8, name: "Present Perfect Continuous" },
        { id: 9, name: "Future Simple" },
        { id: 10, name: "Future Continuous" },
        { id: 11, name: "Future Perfect" },
        { id: 12, name: "Future Perfect Continuous" },
      ],
    },

    dictionary: {
      dictionaryTopics: [
        { id: 1, name: "Food" },
        { id: 2, name: "Animals" },
        { id: 3, name: "Art" },
        { id: 4, name: "Home" },
        { id: 5, name: "Furniture" },
        { id: 6, name: "Anatomy" },
        { id: 7, name: "Market" },
        { id: 8, name: "Computer" },
        { id: 9, name: "Sport" },
      ],
      dictionaryWords: [
        {
          id: 1,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 2,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 3,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 4,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 5,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 6,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 7,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 8,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 9,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 10,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 11,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 12,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 13,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 14,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 15,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 16,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 17,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 18,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 19,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 20,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 21,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 22,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 23,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 24,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 25,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 26,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 27,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 28,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 29,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 30,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 31,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 32,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
        {
          id: 33,
          word: "some word",
          transcription: "some transcription",
          translation: "some translation",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  addUser() {
    let userNotExist = true
    for (let i = 0; i < this._state.entry.users.length; i++) {
      if (this._state.entry.users[i].login === this._state.entry.loginText){
        console.log("Пользователь с таким логином уже существует")
        userNotExist = false;
        break;
      }
    }
    if (userNotExist){
      if (this._state.entry.passwordText === this._state.entry.password2Text) {
        let newUser = {
          id: this._state.entry.users.length,
          login: this._state.entry.loginText,
          password: this._state.entry.passwordText,
        };
        this._state.entry.users.push(newUser);
        this._state.entry.userEntry = true;
        this._state.entry.loginText = "";
        this._state.entry.passwordText = "";
        this._state.entry.password2Text = "";
      } else {
        console.log("Пароли не совпадают");
      }
      this._callSubscriber(this._state);
    }
  },
  loginUser() {
    let userExist = false;
    for (let i = 0; i < this._state.entry.users.length; i++) {
      if (this._state.entry.users[i].login === this._state.entry.loginText) {
        if (
          this._state.entry.users[i].password === this._state.entry.passwordText
        ) {
          console.log("Пользователь вошёл в систему");
          this._state.entry.userEntry = true;
          userExist = true;
          break;
        } else {
          console.log("Неверный пароль");
        }
      }
    }

    if (!userExist) {
      console.log("Данный пользователь не существует");
    }
    this._state.entry.loginText = "";
    this._state.entry.passwordText = "";
    this._callSubscriber(this._state);
  },
  updateLoginText(newText) {
    this._state.entry.loginText = newText;
    this._callSubscriber(this._state);
  },
  updatePasswordText(newText) {
    this._state.entry.passwordText = newText;
    this._callSubscriber(this._state);
  },
  updatePassword2Text(newText) {
    this._state.entry.password2Text = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
