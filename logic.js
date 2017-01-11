var pos = 0, test, test_status, questions, choice, choices, chA, chB, chC, correct = 0; 
 var number = 30;
 var answered = false;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

var questions = [//* multidemensional array with questions and answers//
[ "Which team won the 2009 NBA Championship?", " Los Angeles Lakers", "Dallas Mavericks", "Boston Celtics", "A" ],
[ "Most Blocks shots in NBA history?", "Dikembe Mutombo", "Hakeem Olajuwon", "Kareem Abdul-Jabbar", "A" ],
[ "Which NBA player had the most seasons with 1000 points or more?", "Wilt Chamberlain", "Michael Jordan", "Kareem Abdul-Jabbar", "C" ],
[ "Who founded the game of basketball?", " James Naismith", "Dean Smith", "Red Auerbach", "A" ]
];

function MyFunction(x) {
	return document.getElementById(x); //*returns the object's id reference.//
}
function renderQuestion() {//*populates questions to the page from from multidemensional array//
var test = MyFunction("test");//*references test div


if(pos >= questions.length) {//*stops test after last question.
	test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";//*tells the user how many questions they got correct and changes test status//
	MyFunction("test_status").innerHTML = "Game Over";//*dislays "Game Over in test status"
	pos = 0;//*resets questions back to 0
	correct = 0;//*resets correct back to 0
	stop();
	document.querySelector('#show-number').innerHTML = "";
	return false;//*ensures function render question doesnt render past line 30.
}

MyFunction("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
question = questions[pos][0];//*targets array index 0
chA = questions[pos][1];//*targets array index 1
chB = questions[pos][2];//*targets array index 2
chC = questions[pos][3];//*targets array index 3
test.innerHTML = "<h3>"+question+"</h3>";//*renders question to the user
test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";//*input elements, value A += appends each additional input, note choices is group name for answers. 
test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";//*input elements, value B += appends each additional input 
test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";//*input elements, value C += appends each additional input 
test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";//*button with click event that runs function check answer.
}
function checkAnswer(){//*function that checks answer with a for loop
	choices = document.getElementsByName("choices");//*getElementsbyName grabs the array by name"choices".
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]) {//*evaluates if the selected choice is correct or not.
		correct++;//*increments the correct variable.
		answered = true;
	}
	if (answered = true) {
	pos++;//*increments the questions in order.
	renderQuestion();//*renders question again.
	number = 30;
}
}

window.addEventListener("load", renderQuestion, false);//*loads elements into DOM, then renders questions.  


    //  When the resume button gets clicked, execute the run function.
   
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();
        pos++;//*increments the questions in order.
        renderQuestion();//*renders question again.
        run();
        number = 30;
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();