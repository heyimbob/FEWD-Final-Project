window.onload = function(event) {
	var firstNameInput = document.getElementById('first_name');
	var lastNameInput = document.getElementById('last_name');
	var firstQuestion = document.getElementById('first_question');


	var nameBtn = document.getElementById('name_btn');
	var qSubmit = document.getElementById('questionSubmit');

	var oneA = document.getElementById('choice-one');
	var oneB = document.getElementById('choice-two');
	var oneC = document.getElementById('choice-three');

	var twoA = document.getElementById('choice-four');
	var twoB = document.getElementById('choice-five');
	var twoC = document.getElementById('choice-six');
	var twoD = document.getElementById('choice-seven');
	let selectedAnswer = document.getElementsByClassName('select-dropdown')[0];


qSubmit.onclick = function(event) {
		console.log(firstNameInput.value);
		console.log(lastNameInput.value);
		
	}

	console.log(firstNameInput, lastNameInput, nameBtn);
	}


// let x = document.getElementsByClassName('select-dropdown')[0];

// <input type=​"text" class=​"select-dropdown" readonly=​"true" data-activates=​"select-options-e0e850d8-c501-f66c-35c6-65c5f7390b0e" value=​"Choose your option">​
// x.hasChildNodes
// ƒ hasChildNodes() { [native code] }
// x.hasChildNodes()
// false
// x.childElementCount

// x.value
// "I know basic lifts, but could use a refresher/option>              "
// x.value
// "I know basic lifts, but could use a refresher/option>              "
// x.value
// "I'm a current athlete"
// x.child
// undefined
// x.childElementCount
// 0
// x.childElementCount
// 0



