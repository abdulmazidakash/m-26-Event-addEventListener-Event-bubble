console.log('This is separate js file');

//option - 1: directly set on the HTML element
/**<button onclick="document.body.style.backgroundColor= 'yellow'">Make Yellow</button>
 */

//option -2: add onclick function on the html element
/**<button onclick="makeRed()">Make red</button>*/ 
//important: we will use this
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


//option -4: 
const pinkButton = document.getElementById('make-pink');
// console.log(pinkButton);
pinkButton.addEventListener('click', makePink)

function makePink(){
	document.body.style.backgroundColor  = 'pink';
}

//option -4: another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
	document.body.style.backgroundColor = 'green';
});


//option -4: final
//important: we will use this sometimes
// document.getElementById('make-goldenrod').addEventListener('click', function(){})

document.getElementById('make-goldenrod').addEventListener('click', function(){
	document.body.style.backgroundColor = 'goldenrod';
})