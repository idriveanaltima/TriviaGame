$(document).ready(function () {
  var number = 15;
  var x;
  var count = 0;
  var correct = 0;
  var incorrect = 0;
  var userValue;
  var main = $(".main");

  // object that contains everything needed for the game
  var trivia = {
    items: [{
        question: "What is Dartmouth's Mascot?",
        answers: ["Boaty McBoatface", "Keggy the Keg", "Wildcats", "Wolverines"],
        answer: ["b", "Keggy the Keg"],
        image: "<img src='assets/images/dartmouth.jpg'</>"
      }, {
        question: "What is Stanford's Mascot?",
        answers: ["Cayenne", "Beavers", "Bulldog", "Tree"],
        answer: ["d", "Tree"],
        image: "<img src='assets/images/stanford.jpeg'</>"
      },
      {
        question: "What is Georgia's Mascot?",
        answers: ["Hairy Dawg", "Chilly Cat", "Mountaineers", "Panthers"],
        answer: ["a", "Hairy Dawg"],
        image: "<img src='assets/images/ga.jpeg'</>"
      },
      {
        question: "What is Michigan State's Mascot?",
        answers: ["Nittany Lions", "Bruins", "Tigers", "Sparty the Spartan"],
        answer: ["d", "Sparty the Spartan"],
        image: "<img src='assets/images/msu.jpeg'</>"
      },
      {
        question: "What is Syracuse's Mascot?",
        answers: ["Ducks", "Keggy the Keg", "Otto the Orange", "Yellow Jackets"],
        answer: ["c", "Otto the Orange"],
        image: "<img src='assets/images/syracuse.jpeg'</>"
      }
    ],
    setTimer: function () {
      number = 15
      $("#time").html("<p> Time Remaining: <span id='timer'> " + number + "</span></p>");
      trivia.stop();
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
      if (count == trivia.items.length) {
        trivia.displayConfirm();
      } else {
        trivia.setTimer();
        $(main).html("<h1 id='question'>" + trivia.items[count].question + "</h1>" + "<p class='answer' data-value='a'>" + trivia.items[count].answers[0] + "<p class='answer' data-value='b'>" + trivia.items[count].answers[1] + "<p class='answer' data-value='c'>" + trivia.items[count].answers[2] + "<p class='answer' data-value='d'>" + trivia.items[count].answers[3] + "</p>");
      }
    },
    displayAnswer: function () {
      if (userValue == trivia.items[count].answer[0]) {
        $(main).html("Correct Answer");
        $(main).append("<p>" + trivia.items[count].image + "</p>");
        correct++;
      } else if (number === 0) {
        $(main).html("Out of Time");
        $(main).append("<p>The correct answer was: " + trivia.items[count].answer[1] + "</p><p>" + trivia.items[count].image + "</p>");
        incorrect++;
      } else if (userValue !== trivia.items[count].answer[0]) {
        $(main).html("Not the Correct Answer");
        $(main).append("<p>The correct answer was: " + trivia.items[count].answer[1] + "</p><p>" + trivia.items[count].image + "</p>");
        incorrect++;
      }
      count++;
      setTimeout(trivia.displayQuestion, 1000 * 3);
    },
    displayConfirm: function () {
      trivia.stop();
      $(main).html("<p>Correct Answer " + correct + "</p><p>Incorrect Answer " + incorrect + "</p>");
      $(main).append("<button class='btn btn-lg' id='reset'>Start Over</button>");
    },
    resetGame: function () {
      count = 0;
      correct = 0;
      incorrect = 0;
      trivia.displayQuestion();
    }
  }

  //on click functions that determine game start, how to handle the selected answers, and reset the game

  $("body").on("click", "#gameStart", function () {
    $("#time").html("<p> Time Remaining: <span id='timer'> " + number + "</span></p>");
    trivia.displayQuestion();
  }).on("click", ".answer", function (event) {
    userValue = $(this).attr("data-value")
      trivia.stop()
      trivia.displayAnswer();
  }).on("click", "#reset", trivia.resetGame)

});