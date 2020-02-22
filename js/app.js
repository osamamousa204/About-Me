'use strict';
var mark = 0;
var result = document.getElementById("gis");
var myAge;
var mycolor;
var major;
var Name;
function myInfo(){
    Name = prompt("what is your name??")
   alert("welcome  " + Name)
   alert("i am not going to ask you to guess  my name because you already know it so i will ask you to guess something you don't know");
    myAge = prompt("guess what is my  age");
    mycolor = prompt("guess what is my favorite color");
    major = prompt("guess what is my  spacialty");
   

}

function qSky(){
   var sky = prompt("do i love science answer(yes/no) or (y/n)");

   switch (sky.toLowerCase()) {
      case 'yes':
      case 'y':
         alert('you are right i love it so much');
         mark = mark + 1;
         break;
      case 'no':
      case 'n':
         alert("you are wrong for sure!!");
         break;
   
   
   
      default:
         alert("you didn't type a correct answer!");
   }

}
function favSub(){
   var phi = prompt("Is phisics what i love the most in science? answer(yes/no) or (y/n)");
   switch (phi.toLowerCase()) {
      case "yes":
         alert('you are right ');
         mark = mark + 1;
   
         break;
      case "no":
         alert("you are wrong!!");
         break;
      case "y":
         alert('you are right ');
         mark = mark + 1;
   
         break;
      case "n":
         alert("you are wrong!!");
         break;
      default:
         alert("you didn't type a correct answer!");
   }

}


function myGame(){
   var zero = prompt("do i play pes now ? answer(yes/no) or (y/n)");
   switch (zero.toLowerCase()) {
      case "yes":
         alert('you are wrong i was playing it sadly i can not now ');
   
         break;
      case "no":
         alert("you are right!!");
         mark = mark + 1;
   
         break;
      case "y":
         alert('you are wrong i was playing it sadly i can not now');
   
         break;
      case "n":
         alert("you are right!!");
         mark = mark + 1;
   
         break;
      default:
         alert("you didn't type a correct answer!");
   }

}

function myFood(){
   var hungry = prompt("am i hungry? answer(yes/no) or (y/n)");
   switch (hungry.toLowerCase()) {
      case "yes":
         alert("you are right!!");
         mark = mark + 1;
   
         break;
      case "no":
         alert("you are wrong!!");
         break;
      case "y":
         alert("you are right!!");
         mark = mark + 1;
   
         break;
      case "n":
         alert("you are wrong!!");
         break;
      default:
         alert("you didn't type a correct answer!");
   }

}

function myLife(){

   var life = prompt("do i love mansaf? answer(yes/no) or (y/n)");
   switch (life.toLowerCase()) {
      case "yes":
         alert("you are right!! who hates mansaf");
         mark = mark + 1;
   
         break;
      case "no":
         alert(" sure you are wrong !  ");
         break;
      case "y":
         alert("you are right!! who hates mansaf");
         mark = mark + 1;
   
         break;
      case "n":
         alert("sure you are wrong ! ");
         break;
      default:
         alert("you didn't type a correct answer!");
   }
}


function evenNum(){
   var myNumber = 8;
   var guessNumber = prompt("guess an even number from 0 to 10 (you have only 4 attempts)");
   for (var i = 0; i < 4; i++) {
   
      if (myNumber == guessNumber) {
         mark = mark + 1;
         alert("your answer " + guessNumber + " is right");
         break;
      }
         if(i == 3){
         break;
         }
   
      else if (guessNumber < myNumber) {
         alert('your answer too low ')
         guessNumber = prompt("guess an even number from 0 to 10 (try ahain)");
   
      }
      else if (guessNumber > myNumber) {
         alert('your answer too high ')
         guessNumber = prompt("guess an even number from 0 to 10 (try again");
   
      } else {
         alert('your answer is wrong ');
         guessNumber = prompt("guess an even number from 0 to 10 (try again");
      }
   
   
   
   }
}

function favInst(){
   var guessFav = ['razan', 'shihab', 'baraa', 'samer', 'bashar', 'riham', 'all'];

   var userfav = prompt("guess my favourit instructor (you have only 6 attepts) ");
   for (var i = 0; i < 6; i++) {
      for (var x = 0; x < guessFav.length; x++) {
         if (userfav == guessFav[x]) {
            mark = mark + 1
            alert("yes but she/he is not the only one");
            var test = "y";
         }
      }
      x = 0;
      if (test == "y") {
         break;
      }
      if(i == 5){
         break;
      }
      userfav = prompt("guess my favourit instructor try again!");
   
   
   
   }
   alert("thank you to vist my website " + Name + " and you have " + mark + " out of 7 ");
   result.innerHTML = "My age:  "+ myAge + "    " + '<br>' + "my fav color:  "+ mycolor + "    " + '<br>' + "My major: " + major + '<br>' + "Your mark is : " + mark + " out of 7";


}





