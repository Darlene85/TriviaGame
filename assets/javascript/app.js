$(".btn").on("click", function () {
    setTimeout(function () {
        location.reload;
    }, 3000);

var incorrectAnswers=0;
var correctAnswers = 0;
var score=0;
 function check(){
     var question1 = document.quiz.question1.value;
     var question2 = document.quiz.question2.value;
     var question3 = document.quiz.question3.value;
     var question4 = document.quiz.question4.value;
     var question5 = document.quiz.question5.value;
     var question6 = document.quiz.question6.value;

     if(question1 === "1924"){
         correctAnswers++;
     }

     if(question2 === "20"){
         correctAnswers++;
     }

     if(question3 === "Seminole"){
         correctAnswers++;
     }

     if(question4 === "Benjamin Franklin"){
         correctAnswers++;
     }

     if(question5 === "All the Above"){
         correctAnswers++;
     }

     if(question6 === "New York City"){
         correctAnswers++;
     }
 }


    var messages=["You're knowledgeable.","Continue to research.","Learning is the first step."];
    
    if (score === 2){
        $("#message").text(messages[2]);
    }
    
    else if (score === 4){
        $("#messages").text(messages[1])
    }

    else if(score === 6){
        $("#messages").text(messages[0])
    }

    //var images=[];
    
    //var imageChoice=
     })
    
     