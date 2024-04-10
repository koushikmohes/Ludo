var randomNumber = Math.random();
randomNumber= (randomNumber*6)+1;
randomNumber=Math.floor(randomNumber);

var randomImages= "dice"+randomNumber+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImages);


var randomNumber1=Math.random();
randomNumber1= (randomNumber1*6)+1;
randomNumber1= Math.floor(randomNumber1);
var randomImages1= "dice"+randomNumber1+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImages1);

if(randomNumber>randomNumber1){
    document.querySelector("h1").innerHTML= "Player 1 Wins!";
}
if(randomNumber1>randomNumber){
    document.querySelector("h1").innerHTML= "Player 2 Wins!";
}
if(randomNumber===randomNumber1){
    document.querySelector("h1").innerHTML= "Its a Draw!";
}