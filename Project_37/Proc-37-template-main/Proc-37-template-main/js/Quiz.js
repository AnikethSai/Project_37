class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("Yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);
    text("The answer is \"2\" because an Envelope is used to store a letter... ",0,85);
    Contestant.getContestantInfo();

if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,385);
      /*fill("Blue");
      textSize(20);
      text("Contestant\t\t\t\tAnswer",250,225);
      text("--------------------------------",250,240);*/

      for(var plr in allContestants){
         var correctAns = "2";
        if (correctAns === allContestants[plr].answer){
          fill("Green")
        }
        else{
          fill("red");
        }
        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
   }
  }
 }
}

