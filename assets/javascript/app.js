$(document).ready(function () {
  var number = 0;
  var x;
  var count = 0;
  var userGuess;
  var correct = 0;
  var incorrect = 0;
  var userValue;

  var trivia = {
    questions: [{
      question: "what is happening?",
      a: "t",
      b: "a",
      c: "f",
      d: "d",
      answer: "d",
      image: "<img src='assets/images/crystal1.gif'</>"
    }, {
      question: "what is cool?",
      a: "something",
      b: "nothing",
      c: "everything",
      d: "unsure",
      answer: "c",
      image: ""
    }],

    start: function () {
      this.displayQuestion();
    },
    setTimer: function () {
      number = 4
      $("#time").html("<p> Time Remaining: <span id='timer'></span></p>");
      clearInterval(x);
      x = setInterval(trivia.countdown, 1000);
    },
    countdown: function () {
     
      number--;
      $("#timer").html(number);
      if (number == 0) {
        trivia.stop();
        trivia.displayAnswer();
      }
    },
    stop: function () {
      clearInterval(x);
    },
    displayQuestion: function () {
      if (count == trivia.questions.length) {
        trivia.displayConfirm();

      } else {
      trivia.setTimer();
      $(".main").html("<h2 id='question'>" + trivia.questions[count].question + "</h2>" + "<p class='answer' data-value='a'>" + trivia.questions[count].a + "<p class='answer' data-value='b'>" + trivia.questions[count].b + "<p class='answer' data-value='c'>" + trivia.questions[count].c + "<p class='answer' data-value='d'>" + trivia.questions[count].d + "</p>"); 
      }
    },
    displayAnswer: function () {
      if (userValue == trivia.questions[count].answer) {
        $(".main").html("Correct Answer")
        correct++;
      } else if (userValue !== trivia.questions[count].answer || number === 0){
        $(".main").html("Not the Correct Answer")  
        incorrect++;
      }
      $(".main").append("<p>"+this.questions[count].image+"</p>")  
      count++;
      setTimeout(trivia.displayQuestion, 1000 * 3);
      
    },
    displayConfirm: function () {
      trivia.stop();
      $(".main").html("<p class='answer'>Correct Answer " + correct + "<p class='answer'>Incorrect Answer" + incorrect + "<p class='answer'>")
      $(".main").append("<button id='reset'>Start Over</button>")
    },
    
    resetGame: function () {
      count = 0;
      correct = 0;
      incorrect = 0;
      number = 4;
      trivia.start();
    }

  }

  //starts the game

  $("#gameStart").on("click", function () {
    trivia.start();
  });

  $(".main").on("click", ".answer", function (event) {
    userValue = $(this).attr("data-value")
    if (count < trivia.questions.length) {
      trivia.stop()
      trivia.displayAnswer();
    } 
  });

  $("body").on("click", "#reset", function () {
    trivia.resetGame();
  });

});