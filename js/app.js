'use strict';
var Name = prompt("what is your name??")
alert("welcome  " + Name)
alert("i am not going to ask you to guess  my name because you already know it so i will ask you to guess something you don't know");
var myAge = prompt("guess what is my  age");
console.log(myAge);
var mycolor = prompt("guess what is my favorite color");
console.log(mycolor);
var spacialty = prompt("guess what is my  spacialty");
console.log(spacialty);
var result = document.getElementById("gis");
console.log(result);

result.innerHTML =  myAge +   "    "  + '<br>'+ mycolor + "    "  + '<br>' + spacialty  ;

var sky = prompt("Is the sky color blue (think before you answer) answer(yes/no) or (y/n)");
console.log(sky);

switch (sky.toLowerCase()){
    case 'yes' :
    alert('you are wrong ');
    break;
    case 'no' :
     alert("you are right!!");
     break;
     case 'y' :
    alert('you are wrong ');
    break;
    case 'n' :
     alert("you are right!!");
     break;
    default :
 alert("you didn't type a correct answer!");
}
var phi = prompt("Is phisics easy? answer(yes/no) or (y/n)");
switch(phi.toLowerCase()){
 case "yes" :
    alert('you are right ');
    break;
 case "no" :
     alert("you are wrong!!");
     break;
     case "y" :
    alert('you are right ');
    break;
 case "n" :
     alert("you are wrong!!");
     break;
 default :
 alert("you didn't type a correct answer!");
}
var zero = prompt("Is zero a number in math? answer(yes/no) or (y/n)");
switch(zero.toLowerCase()){
 case "yes" :
    alert('you are wrong ');
    break;
 case "no" :
     alert("you are right!!");
     break;
 case "y" :
    alert('you are wrong ');
    break;
 case "n" :
     alert("you are right!!");
     break;
 default :
 alert("you didn't type a correct answer!");
}
var hungry = prompt("am i hungry? answer(yes/no) or (y/n)");
switch(hungry.toLowerCase()){
 case "yes" :
    alert("you are right!!");
    break;
 case "no" :
     alert("you are wrong!!");
     break;
     case "y" :
    alert("you are right!!");
    break;
 case "n" :
     alert("you are wrong!!");
     break;
 default :
 alert("you didn't type a correct answer!");
}

var life = prompt("is life good? answer(yes/no) or (y/n)");
switch(life.toLowerCase()){
 case "yes" :
    alert("you are right!!");
    break;
 case "no" :
     alert("you are wrong ! why you hate life!");
     break;
     case "y" :
        alert("you are right!!");
        break;
     case "n" :
         alert("you are wrong ! why you hate life!");
         break;
 default :
 alert("you didn't type a correct answer!");
}

alert("thank you to vist my website " + Name)