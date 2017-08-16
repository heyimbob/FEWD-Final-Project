window.onload = function(event) {
	var firstNameInput = document.getElementById('first_name');
	var lastNameInput = document.getElementById('last_name');
	var firstQuestion = document.getElementById('first_question');


	var nameBtn = document.getElementById('name_btn');
	var qOneBtn = document.getElementById('questionOnebtn');
	var qTwoBtn = document.getElementById('questionTwobtn');
	var qThreeBtn = document.getElementById('questionThreebtn');
	var qFourBtn = document.getElementById('questionFourbtn');
	var qFiveBtn = document.getElementById('questionFivebtn');

	var oneA = document.getElementById('choice-one');
	var oneB = document.getElementById('choice-two');
	var oneC = document.getElementById('choice-three');

	var twoA = document.getElementById('choice-four');
	var twoB = document.getElementById('choice-five');
	var twoC = document.getElementById('choice-six');
	var twoD = document.getElementById('choice-seven');

nameBtn.onclick = function(event) {
		console.log(firstNameInput.value);
		console.log(lastNameInput.value);
	}

	console.log(firstNameInput, lastNameInput, nameBtn);

qOneBtn.onclick = function(event) {
	function GetSelectedItem() {
		var option = document.getElementById('question1').selected.value;
		}
	console.log(question1);

	}	
}



