const nodeSize = document.querySelectorAll('.option-size');
const nodeColor = document.querySelectorAll('.option-color');
const shoes = document.querySelectorAll('.shoe');
const gradient = document.querySelectorAll('.gradient');

function changeBgSize(){
	nodeSize.forEach(node => node.classList.remove('active'));
	this.classList.add('active');
}

function changeBgItem(){
	let getBg = this.getAttribute('bg');
	let getColor = this.getAttribute('color');
	let getShoe = document.querySelector(`.shoe[color=${getColor}]`);
	let getGradient = document.querySelector(`.gradient[color=${getColor}]`);

	nodeColor.forEach(node => node.classList.remove('option-node'));
	this.classList.add('option-node');

	document.documentElement.style.setProperty('--bg', getBg);

	shoes.forEach(shoe => shoe.classList.remove('display'));
	getShoe.classList.add('display');
	
	gradient.forEach(gradient => gradient.classList.remove('display-bg-current'));
	getGradient.classList.add('display-bg-current');
}
nodeSize.forEach(node => node.addEventListener('click', changeBgSize));
nodeColor.forEach(node => node.addEventListener('click', changeBgItem));