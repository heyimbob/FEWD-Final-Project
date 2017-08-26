$(document.ready(function(event) {
	var firstNameInput = $('first_name');
	var lastNameInput = $('last_name');
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
	};
