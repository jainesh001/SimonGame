buttonColors=["red","blue","green","yellow"];
gamePattern=[];
userClickedPattern=[];
level=0;
count=0;
intervalID=0;

window.addEventListener("keydown",function(){  
    if(count===0){
        autoPlayOneStepInGame();
        count++;
        // start();
        // clearInterval(intervalID);
    }
});


function nextRandomNumber(){
    var randomNumber = Math.floor(Math.random()*4)

    return randomNumber;
}

function nextSequence(){
    var rColor=nextRandomNumber();
    level++;
    var lValue="Level "+ level;
    $("h1").text(lValue);
   return buttonColors[rColor];
}
function checkAnswer(currentlevel){
    var result=true;
    if(gamePattern[currentlevel]===userClickedPattern[currentlevel]){
    }else{
        result=false;
    }
    if(gamePattern.length==userClickedPattern.length){
        for(var j=0;j<gamePattern.length;j++){
            if(gamePattern[j]===userClickedPattern[j]){
           
            }else{
    
                result=false;   
            }
        }  
        if(result){
            intervalID=setTimeout(function(){
                autoPlayOneStepInGame();
                userClickedPattern=[];
            },2000);
        }
        console.log("gamePattern "+gamePattern);
        console.log("userPattern "+userClickedPattern);
        console.log(result);
    }
    if(!result){
        play("wrong");
    
        showEffect("notclass","body","game-over",200);
        $("h1").text("Game Over, Press Any Key to Restart");
        reset();
    }
   
}

function reset(){
    count=0;
    level=0;
    gamePattern=[];
    userClickedPattern=[];
}

function play(typeOfEvent){
  
    switch(typeOfEvent){
        case "red":
            var red=new Audio("./sounds/red.mp3");
            red.play();
            break;
        case "blue":
            var blue=new Audio("./sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green=new Audio("./sounds/green.mp3");
            green.play();
            break;
        case "yellow":
            var yellow=new Audio("./sounds/yellow.mp3");
            yellow.play();
            break;
        case "wrong":
            var wrong=new Audio("./sounds/wrong.mp3");
            wrong.play();
            break;
        default:   
            console.log(typeOfEvent+" error") ;           
    }
}



function autoPlayOneStepInGame(){
    var randomChosenColour=nextSequence();
    gamePattern.push(randomChosenColour);
  
    console.log(randomChosenColour);
    play(randomChosenColour);
    showEffect("class",randomChosenColour,"pressed",500);
}

$(".btn").on("click",function(event){
    var userChosenColor= event.target.id;
    userClickedPattern.push(userChosenColor);
    showEffect("class",userChosenColor,"pressed",500);
    play(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})

function showEffect(type,item,className,duration){
    if(type==="class"){
        $("."+item).addClass(className);
    }else{
        $(item).addClass(className);
    }
    setTimeout(function(){
        if(type==="class"){
            $("."+item).removeClass(className);
        }else{
            $(item).removeClass(className);
        }
    },duration);
}

// $("."+randomChosenColour).on("click",function(){
 
// });
// count=1;
// window.addEventListener("keydown",function(){
//     var tex="Level"+ count;
//     $("h1").text(tex);

//     while(true){
//         if(playgame()){
//             count++;
//             $("h1").text(tex);
//             break;
//         }else{
//             $("h1").text("Game Over");
//             break;
//         }

//     }


// });


// function showClick(color){
//     document.querySelector("."+color).classList.add("pressed");
//     setTimeout(function(){
//         document.querySelector("."+color).classList.remove("pressed");
//     },500);
// }

// function step1(){
//     var randomChosenColour=buttonColorsM();
//     gamePattern.push(randomChosenColour);
//     showClick(randomChosenColour);

// }


// arr=document.querySelectorAll(".btn");
// userInput=[];
// gameResult=true;
// for(var i=0;i<arr.length;i++){
//     arr[i].addEventListener("click",function(event){
//          console.log(event.srcElement.id);
//          userInput.push(event.srcElement.id);
//          showClick(event.srcElement.id);
         
//          for(var j=0;j<gamePattern.length;j++){
//             if(gamePattern[j]===userInput[j]){
    
//             }else{
//                 gameResult=false;
//             }
//         }  

//     });
// }

// flag=true;
// function playGame(){
//     while(flag){
//         step1();
//         // setTimeout(function(){
//         if(gameResult){

//         }else{
//             break;
//         }
//         // },50000);
     
      
//         break;
//     }
// }





// for(var j=0;j<gamePattern.length;j++){
//     if(gamePattern[j]===userInput[j]){

//     }else{
//         console.log("loss");
//     }
// }  

// var randomChosenColour=buttonColorsM();
// gamePattern.push(randomChosenColour);
// // setTimeout(function(){
// //     console.log("waiting");
// // },1000);



// buttonColors=["red","blue","green","yellow"];

