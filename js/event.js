console.log('This is separate js file');

//option - 1: directly set on the HTML element

//option -2: onclick add
function makeRed(){
	document.body.style.backgroundColor = 'red';
}

//option -3: onclick function add
const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;

function makeBlue(){
	document.body.style.backgroundColor = 'blue';
}


//option -3: another 

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
	document.body.style.backgroundColor = 'purple';
}