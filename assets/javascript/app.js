$(document).ready(function () {
  var number = 0;
  var x;
  var count = 0;
  var userGuess;
  var correct = 0;
  var incorrect = 0;
  var userValue;

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
      answers: ["Bulldog", "Bobcat", "Mountaineers", "Panthers"],
      answer: ["a", ""],
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
      if (count == trivia.items.length) {
        trivia.displayConfirm();

      } else {
      trivia.setTimer();
      $(".main").html("<h2 id='question'>" + trivia.items[count].question + "</h2>" + "<p class='answer' data-value='a'>" + trivia.items[count].answers[0] + "<p class='answer' data-value='b'>" + trivia.items[count].answers[1] + "<p class='answer' data-value='c'>" + trivia.items[count].answers[2] + "<p class='answer' data-value='d'>" + trivia.items[count].answers[3] + "</p>"); 
      }
    },
    displayAnswer: function () {
      if (userValue == trivia.items[count].answer[0]) {
        
        $(".main").html("Correct Answer");
        $(".main").append("<p>" + trivia.items[count].image + "</p>");
        correct++;
      } else if (number === 0){
        $(".main").html("Out of Time"); 
        $(".main").append("<p>The correct answer was: " + trivia.items[count].answer[1] + "</p><p>" + trivia.items[count].image + "</p>") ;
        incorrect++;
      } 
        else if (userValue !== trivia.items[count].answer[0]){
        $(".main").html("Not the Correct Answer"); 
        $(".main").append("<p>The correct answer was: " + trivia.items[count].answer[1] + "</p><p>" + trivia.items[count].image + "</p>");
        incorrect++;
      } 
      count++;
      setTimeout(trivia.displayQuestion, 1000 * 3);
      
    },
    displayConfirm: function () {
      trivia.stop();
      $(".main").html("<p class='answer'>Correct Answer " + correct + "<p class='answer'>Incorrect Answer " + incorrect + "<p class='answer'>");
      $(".main").append("<button id='reset'>Start Over</button>");
    },
    
    resetGame: function () {
      count = 0;
      correct = 0;
      incorrect = 0;
      number = 4;
      trivia.start();
    }

  }
console.log(trivia.items[count].image)
  //starts the game

  $("#gameStart").on("click", function () {
    trivia.start();
  });

  $(".main").on("click", ".answer", function (event) {
    userValue = $(this).attr("data-value")
    if (count < trivia.items.length) {
      trivia.stop()
      trivia.displayAnswer();
    } 
  });

  $("body").on("click", "#reset", function () {
    trivia.resetGame();
  });

});