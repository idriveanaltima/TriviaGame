$(document).ready(function () {
  var number = 4;
  var x;
  var count = 0;
  var userGuess;
  var correct = 0;
  var incorrect = 0;

  var trivia = {
    questions: [{question: "what is happening?", a: "t", b: "a", c:"f", d:"d", answer:"d"},{question: "what is cool?", a: "something", b: "nothing", c:"everything", d:"unsure", answer:"c"}],
    
    start: function () {
      clearInterval(x);
      x = setInterval(trivia.countdown, 1000);
      $("#time").html("<p> Time Remaining: <span id='timer'></span></p>");
      trivia.displayQuestion();
    },
    countdown: function () { 
      number--;
      $("#timer").html(number);
      if (number === 0) {
        trivia.stop();
      }
    },
    stop: function () {
      clearInterval(x);
      console.log("game over");
    },
    displayQuestion: function () {
      $(".main").html("<h2 id='question'>" + trivia.questions[count].question + "</h2>"+"<p class='answer'>"+trivia.questions[count].a+"<p class='answer'>"+trivia.questions[count].b+"<p class='answer'>"+trivia.questions[count].c+"<p class='answer'>"+trivia.questions[count].d+"</p>");
      count++;
    },
   displayConfirm: function () {
    $(".main").html("<p class='answer'>Correct Answer "+correct+"<p class='answer'>Incorrect Answer"+incorrect+"<p class='answer'>")
    $(".main").append("<button id='reset'>Start Over</button>")
    },
   reset: function () {
       count = 0;
       correct = 0;
       incorrect = 0;
       number = 4;
       this.start ();
   }

 }

  //starts the game

  $("#gameStart").on("click", function () {
    trivia.start(); 
    

  });

  $(".main").on("click", ".answer", function (event) {
 console.log(event.data)
 console.log(event.key)
 console.log(event.result)
 console.log(event.value)
 console.log(event.which + "which")
 console.log(event.target + "target")
 console.log(event.metaKey + "meta key")
 console.log(event.currentTarget === this)
 
 if (count == trivia.questions.length) {
          trivia.displayConfirm();
          trivia.stop();
    
        } else if (count < trivia.questions.length) {
            if (trivia.questions.indexOf(userGuess)  == trivia.questions[count].answer)  {
                $(".main").html("Correct Answer")
                 correct++;
                } else {
                $(".main").html("Not the Correct Answer")
                incorrect++;
                }
              } else {
          trivia.displayQuestion ();
      }
    });

    console.log()

  $("body").on("click", "#reset", function () {
        trivia.reset();
  });
   
  });
