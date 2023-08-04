$document.ready(function() {
  var magic8Ball = {};
  magic8Ball.listOfAnswers = [ "yes", "no", "i dont think so...","Of course!", "Indubitably", "In your dreams."];

  $("#answer").hide();

  magic8Ball.answerQuestion = function(question) {
    $("#8ball").effect("shake");
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    $("#8ball").fadeIn(4000);

    var randomNumber = Math.random();
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers[randomIndex];

    $("#answer").text(answer);
    console.log(question);
    console.log(answer);
  }

    var onClick = function() {
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

      setTimeOut function() {
        var question = prompt("ASK A YES/NO QUESTION!");
          magic8Ball.answerQuestion(question);
      } , 500);

       };

  $("#questionButton").click(onClick);

});
    
