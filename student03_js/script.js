
var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');

var mark=0;
var count=0;
      var app={
                questions:[
                          {q:'Which is the capital of Sri Lanka?', options:["Sri Jayawardanapura","Trincomalle","Batticaloa","Colombo"],answer:1},

                          {q:'Which is the currency of Sir Lanka?',options:["Taka","Yen","Rupee","Baht"],answer:3},

                          {q:'Which is the longest river in Sir Lanka?',options:["Cauvery","Padama","Amban","Mahaweli"],answer:4},

                          {q:'Which is the highest?',options:["Adam's Park","Pidurutalagala","Kirigalpotta","Godwin Austin"],answer:2},

                          {q:'which strait separates Sri lanka form India?',options:["Palk Strait","Davis Strait","johore Strait"],answer:1},

                          {q:'What is the name of king Kasyapa\'s Fortess?',options:["Sigiriya", "Adam's Park", "Galle fort", "Sithulpawva"],answer:1},

                          {q:'How many districts are there in Sri Lanka?',options:["28", "25", "9", "22"],answer:2},

                          {q:'Which ocean surrounds Sri Lanka?',options:["Arctic Ocean", "Southern Ocean", "Indian Ocean", "Atlantic Ocean"],answer:3},

                          {q:'In which Sri lankan province is the fomous Temple of the Tooth located?',options:["Anuradapura", "Galle", "Colombo", "Kandy"],answer:4},

                          {q:' How many monsoon seasons are there in Sri Lanka?',options:["Fore", "Two", "Six", "Eight"],answer:2}

                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{
                        count++;
                        quizBox.innerHTML="Quiz Over......!!!" ;
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(num){
                   
                         var id=num.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score+=2;
                         	num.className="correct";
                         	num.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                             this.score-=1;
                         	num.className="wrong";
                         	num.innerHTML="Wrong";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                    mark=this.score;
                	scoreCard.innerHTML=20+"/"+this.score;
                }

           }


           window.onload=app.load();

           function button(num){
           	     app.check(num);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         }


var totalSeconds = 300;
var minutes = parseInt(totalSeconds / 60);
var seconds = parseInt(totalSeconds % 60);
var myTimer;

function timechecker() {
    document.getElementById("headerTimer2").innerHTML = minutes + ' min : ' + seconds + ' secs ';

    if (totalSeconds <= 0) {

        setTimeout('summary()', 1);
if(count==0){  alert("Times Up, Your Score is "+mark +" , to go back press Ok button");}

        window.location.replace("quiz.html");
    } else {
        totalSeconds = totalSeconds - 1;
        minutes = parseInt(totalSeconds / 60);
        seconds = parseInt(totalSeconds % 60);
        myTimer = setTimeout("timechecker()", 1000);
    }
}
myTimer = setTimeout("timechecker()", 1000);

var num = 0,
    test, QuestionNo, question, choice, choices, chA, chB, chC, chD, correct = 0;
var marks = 0;
var correctarr01 = new Array(10); //this array will hold the quetion that the user got right.
if (num == 0) {
    alert("You cannot able to go for the previous questions once you click the Next button ");
}


