(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ':' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(answer) {
    if (answer === 'exit' || answer === null) {
      exitGame();
    } else if (answer == this.correct) {
      displayCorrectMessage();
    } else {
      displayIncorrectMessage();
    }
  };

  function exitGame() {
    keepPlaying = false;
    console.log('Ending game');
  }

  function displayCorrectMessage() {
    console.log('Correct answer!');
    if (score == 0) {
      console.log('You now have ' + ++score + ' point!');
    } else {
      console.log('You now have ' + ++score + ' points!');
    }
  }

  function displayIncorrectMessage() {
    console.log('Wrong answer. Try again!');
    if (score == 0 || score > 1) {
      console.log('Your current score is ' + score + ' points!');
    } else {
      console.log('Your current score is ' + score + ' point!');
    }
  }

  function playGame() {
    var random = Math.floor(Math.random() * questions.length);
    questions[random].displayQuestion();
    var answer = prompt('Please select the correct answer');
    questions[random].checkAnswer(answer);
  }

  var q1 = new Question(
    'Is JS the coolest programming language?',
    ['yes', 'no'],
    0
  );

  var q2 = new Question(
    "What is the name of this course's teacher?",
    ['John', 'Max', 'Jonas'],
    2
  );

  var q3 = new Question(
    'What best describes coding?',
    ['Boring', 'Hard', 'Fun', 'Tedious'],
    2
  );

  var questions = [q1, q2, q3];
  var keepPlaying = true;
  var score = 0;

  while (keepPlaying) {
    playGame();
  }
})();
