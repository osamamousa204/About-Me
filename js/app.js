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

var sky = prompt("do i love science answer(yes/no) or (y/n)");
console.log(sky);

switch (sky.toLowerCase()){
    case 'yes' :
     case 'y' :
    alert('you are right i love it so much');
    break;
    case 'no' :
    case 'n' :
     alert("you are wrong for sure!!");
     break;
     
    
    
    default :
 alert("you didn't type a correct answer!");
}
var phi = prompt("Is phisics what i love the most in science? answer(yes/no) or (y/n)");
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
var zero = prompt("do i play pes now ? answer(yes/no) or (y/n)");
switch(zero.toLowerCase()){
 case "yes" :
    alert('you are wrong i was playing it sadly i can not now ');
    break;
 case "no" :
     alert("you are right!!");
     break;
 case "y" :
    alert('you are wrong i was playing it sadly i can not now');
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

var life = prompt("do i love mansaf? answer(yes/no) or (y/n)");
switch(life.toLowerCase()){
 case "yes" :
    alert("you are right!! who hates mansaf");
    break;
 case "no" :
     alert(" sure you are wrong !  ");
     break;
     case "y" :
        alert("you are right!! who hates mansaf");
        break;
     case "n" :
         alert("sure you are wrong ! ");
         break;
 default :
 alert("you didn't type a correct answer!");
}

alert("thank you to vist my website " + Name)