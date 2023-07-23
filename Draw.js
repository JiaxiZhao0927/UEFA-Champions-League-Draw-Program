var team1;
var team2;
var team3;
var team4;
var ability1;
var ability2;
var ability3;
var ability4;
var index1;
var index2;
var index3;
var index4;
var random1;
var random2;

onEvent("start", "click", function( ) {
  setScreen("Introduction");
});
onEvent("go", "click", function( ) {
  setScreen("Seed#1");
});

onEvent("Button-Bayern-Munich", "click", function( ) {
  setScreen("BAY");
});
onEvent("back1", "click", function( ) {
  setScreen("Seed#1");
});

onEvent("Button-Real-Madrid", "click", function( ) {
  setScreen("RMD");
});
onEvent("back2", "click", function( ) {
  setScreen("Seed#1");
});

onEvent("Button-Barcelona", "click", function( ) {
  setScreen("BAR");
});
onEvent("back3", "click", function( ) {
  setScreen("Seed#1");
});

onEvent("Button-Juventus", "click", function( ) {
  setScreen("JUV");
});
onEvent("back4", "click", function( ) {
  setScreen("Seed#1");
});

onEvent("Button-AC-Milan", "click", function( ) {
  setScreen("MIL");
});
onEvent("back5", "click", function( ) {
  setScreen("Seed#1");
});

onEvent("Button-Manchester-United", "click", function( ) {
  setScreen("MUN");
});
onEvent("back6", "click", function( ) {
  setScreen("Seed#1");
});

onEvent("Button-PSG", "click", function( ) {
  setScreen("PSG");
});
onEvent("back7", "click", function( ) {
  setScreen("Seed#1");
});

onEvent("Button-Liverpool", "click", function( ) {
  setScreen("LIV");
});
onEvent("back8", "click", function( ) {
  setScreen("Seed#1");
});

onEvent("Button-Dortmund", "click", function( ) {
  setScreen("DOR");
});
onEvent("back9", "click", function( ) {
  setScreen("Seed#2");
});

onEvent("Button-Chelsea", "click", function( ) {
  setScreen("CHE");
});
onEvent("back10", "click", function( ) {
  setScreen("Seed#2");
});

onEvent("Button-Atletico-Madrid", "click", function( ) {
  setScreen("AMD");
});
onEvent("back11", "click", function( ) {
  setScreen("Seed#2");
});

onEvent("Button-Inter-Milan", "click", function( ) {
  setScreen("INT");
});
onEvent("back12", "click", function( ) {
  setScreen("Seed#2");
});

onEvent("Button-Ajax", "click", function( ) {
  setScreen("AJAX");
});
onEvent("back13", "click", function( ) {
  setScreen("Seed#2");
});

onEvent("Button-Manchester-City", "click", function( ) {
  setScreen("MNC");
});
onEvent("back14", "click", function( ) {
  setScreen("Seed#2");
});

onEvent("Button-Sevilla", "click", function( ) {
  setScreen("SEV");
});
onEvent("back15", "click", function( ) {
  setScreen("Seed#2");
});

onEvent("Button-Lyon", "click", function( ) {
  setScreen("LYN");
});
onEvent("back16", "click", function( ) {
  setScreen("Seed#2");
});

onEvent("Next1", "click", function( ) {
  setScreen("Seed#2");
});
onEvent("Next2", "click", function( ) {
  setScreen("Draw");
});
onEvent("Next3", "click", function( ) {
  setScreen("WRP1");
});
onEvent("Next4", "click", function( ) {
  setScreen("WRP2");
});
onEvent("finish", "click", function( ) {
  setScreen("END");
});

var firstseedlist = ["Bayern Munich", "Real Madrid", "Barcelona", "Juventus", "AC Milan", "Manchester United", "Paris Saint German", "Liverpool"];
var secondseedlist = ["Dortmund", "Chelsea", "Atletico Madrid", "Inter Milan", "Ajax", "Manchester City", "Sevilla", "Lyon"];
var firstability = [88.6, 86.1, 87.8, 71.8, 73.7, 77.7, 79.4, 83.7];
var secondability = [81.4, 77.7, 82.5, 81.1, 75.8, 92.4, 70.6, 73.8];
var firstphotolist = ["Bayern-Munich.png", "Real-Madrid.png", "Barcelona.png", "Juventus.jpg", "AC-Milan.png", "Manchester-United.png", "PSG.png", "Liverpool.png"];
var secondphotolist = ["Dortmund.png", "Chelsea.png", "Atletico-Madrid.png", "Inter-Milan.png", "Ajax.jpg", "Manchester-City.png", "Sevilla.png", "Lyon.png"];

onEvent("randomAssignButton","click",function(){
  Draw();
});

function Draw() {
  for (var i = 1; i < 9; i++) {
    //Here are my two if statements.
    if(firstseedlist.length >= 1){
    var randomIndex1 = randomNumber(0,firstseedlist.length-1);
    random1 = firstseedlist[randomIndex1];
    removeItem(firstseedlist,randomIndex1);
    if(i==1){
      team1=random1;
      index1=randomIndex1;
    }
    if(i==2){
      team3=random1;
      index3=randomIndex1;
      if(index1<=index3)index3++;
    }
    if(secondseedlist.length >= 1){
    var randomIndex2 = randomNumber(0,secondseedlist.length-1);
    random2 = secondseedlist[randomIndex2];
    removeItem(secondseedlist,randomIndex2);
    if(i==1){
      team2=random2;
      index2=randomIndex2;
    }
    if(i==2){
      team4=random2;
      index4=randomIndex2;
      if(index2<=index4)index4++;
    }
    }
    setProperty("textarea" + i,"text",(random1 + " vs ") + random2 );
    }
  }
}

onEvent("winrate1", "click", function( ) {
  setProperty("label1", "text", team1);
  setProperty("label2", "text", team2);
  setProperty("image6", "image", firstphotolist[index1]);
  setProperty("image7", "image", secondphotolist[index2]);
  Prediction(0);
});

onEvent("winrate2", "click", function( ) {
  setProperty("label5", "text", team3);
  setProperty("label6", "text", team4);
  setProperty("image8", "image", firstphotolist[index3]);
  setProperty("image9", "image", secondphotolist[index4]);
  Prediction(1);
});

//Here is my function.
function Prediction(x) {
  if(x==0){
  ability1=firstability[index1];
  ability2=secondability[index2];
  if(ability1>ability2){
    setProperty("label3","text",team1+" will win!");
  }
  else setProperty("label3","text",team2+" will win!");
  }
  else{
  ability3=firstability[index3];
  ability4=secondability[index4];
  if(ability3>ability4){
    setProperty("label7","text",team3+" will win!");
  }
  else setProperty("label7","text",team4+" will win!");
  }
}
