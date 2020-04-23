var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var started = false;
var level =0;
var count = 0;
//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

  $(document).on("keypress",function(){
    if(!started){
      $("#level-title").text("Level " + level);
      started = true;
      nextSequence();


    }
  });

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");

  //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

checkAnswer(userClickedPattern.length-1);




});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);


}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor){

 $( "#"+currentColor ).addClass( "pressed" );
setTimeout(function(){   $( "#"+currentColor ).removeClass( "pressed" ); }, 100)

}
 function checkAnswer(level){

      if(userClickedPattern[level]===gamePattern[level]){
        console.log("success");

          if(userClickedPattern.length===gamePattern.length){
                        userClickedPattern=[];
                      setTimeout(function () {nextSequence();
               }, 1000);

           }

         }else{
           $("body").addClass("game-over");
           $("#level-title").addClass("press");
           setTimeout(function(){   $( "body" ).removeClass( "game-over" ); }, 100);
           setTimeout(function(){   $( "h1" ).removeClass( "press" ); }, 100);
           $("#level-title").text("Game Over, Press any key to Restart");
          startOver();
          console.log("wrong");
         }

}

function startOver(){
  level=0;
  started=false;
  gamePattern = [];
  userClickedPattern=[];
}

/*var gamePattern = [];
var userClickedPattern =[];
var buttonColours = ["red", "blue", "green", "yellow"];
$(".btn").click(function() {
var userChosenColour = $(this).attr("id");
console.log(userClickedPattern);
});




function playSound(item){
  var audio = new Audio("sounds/"+item.toString()+".mp3");
  audio.play();
}



function flash(item){
  var count=0;
  var id = setInterval(function(){item.fadeOut(20,"linear").fadeIn(20,"linear");
  if(count===3){
    clearInterval(id);
  }else{
   count++;
  }
  }, 20);

}
function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

}*/
