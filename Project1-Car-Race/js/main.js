var speed = document.getElementById('speed');
var score = document.getElementById('score');
var background = document.getElementById('background');
var start = document.getElementById('bttStart');
var playGame = false;
var playAnimation = requestAnimationFrame(play);
var obsMove,car;
var numScore = 0;
var keys = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowLeft: false,
	ArrowRight: false
}

start.addEventListener('click', startGame);
document.addEventListener('keydown', pressKeyOn);
document.addEventListener('keyup', pressKeyOff);




function startGame(){
	console.log('lets play');
	start.style.display = 'none';
	playGame = true;
	
	car = document.getElementById('playerCar');


	 for(var o = 0; o <4; o++){
		var obs = document.createElement('div');
		obs.setAttribute('class', 'obstacles');
		obs.style.left = 150 + Math.floor(Math.random() *100*o) + 'px';
		obs.style.top = 0 - o*200 + 'px';
		background.appendChild(obs);
	 }

	requestAnimationFrame(play);


}

function play(){
	if (playGame){
		treeMoving();
		obsMoving();
		var numtop = car.offsetTop;
		var numleft = car.offsetLeft;
		if(keys.ArrowUp && numtop >0){
			numtop -= 2;
		}
		if(keys.ArrowDown && numtop < 420){
			numtop += 2;
		}
		if(keys.ArrowRight && numleft < 330){
			numleft += 2;
			
		}
		if(keys.ArrowLeft && numleft > 151){
			numleft -= 2;
			
		}

		car.style.top = numtop + 'px';
		car.style.left = numleft + 'px';
	 }
	playAnimation = requestAnimationFrame(play);
}

function obsMoving(){
obsMove = document.getElementsByClassName('obstacles');
var nnum0 = obsMove[0].offsetTop;
var nnum1 = obsMove[1].offsetTop;
var nnum2 = obsMove[2].offsetTop;
var nnum3 = obsMove[3].offsetTop;

	if(nnum0 <  500){
		nnum0 = nnum0 + 1;
	}
	else{

		numScore++;
		// document.getElementById('score').innerHTML = '' + numScore;
		score.innerHTML = '' + numScore;
		checkWin();
		nnum0 = -5;
		obsMove[0].style.left = 150 + Math.floor(Math.random() *150) + 'px';

	}
	if(nnum2 <  500){
		nnum2 = nnum2 + 1;
	}
	else{
		nnum2 = -5;
		numScore++;
		// document.getElementsB('score')[0].innerHTML = '' + numScore;
		score.innerHTML = '' +numScore;
		checkWin();
		obsMove[2].style.left = 150 + Math.floor(Math.random() *150) + 'px';
	}
	if(nnum3 <  500){
		nnum3 = nnum3 + 1;
	}
	else{
		nnum3 = -5;
		numScore++;
		// document.getElementById('score').innerHTML = '' + numScore;
		score.innerHTML = '' + numScore;
		checkWin();
		obsMove[3].style.left = 150 + Math.floor(Math.random() *0) + 'px';
	}
	if(nnum1 <  500){
		nnum1 = nnum1 + 1;
	}
	else{
		nnum1 = -5;
		numScore++;

		// document.getElementById('score').innerHTML = '' + numScore;
		score.innerHTML = '' + numScore;
		checkWin();
		obsMove[1].style.left = 150 + Math.floor(Math.random() *200) + 'px';
	}

	obsMove[0].style.top = nnum0 + 'px';

	obsMove[1].style.top = nnum1 + 'px';

	obsMove[2].style.top = nnum2 + 'px';

	obsMove[3].style.top = nnum3 + 'px';
	for (var cc = 0; cc < 4; cc++){
			if (checkCollide(obsMove[cc],car)){
		stopGame();
	}
	}
}


function treeMoving(){
	var move1 = document.getElementById('tree1');
	var move2 = document.getElementById('tree2');
	var move3 = document.getElementById('tree3');
	var move4 = document.getElementById('tree4');
	var move5 = document.getElementById('tree5');
	var move6 = document.getElementById('tree6');

	var num1 = move1.offsetTop;
	var num2 = move2.offsetTop;
	var num3 = move3.offsetTop;
	var num4 = move4.offsetTop;
	var num5 = move5.offsetTop;
	var num6 = move6.offsetTop;

	if(num1 <  520){
		num1 = num1 + 3;
	}
	else{
		num1 = -10;
	}
	if(num2 <  520){
		num2 = num2 + 3;
	}
	else{
		num2 = -10;
	}
	if(num3 <  520){
		num3 = num3 + 3;
	}
	else{
		num3 = -10;
	}
	if(num4 <  520){
		num4 = num4 + 3;
	}
	else{
		num4 = -10;
	}
	if(num5 <  520){
		num5 = num5 + 3;
	}
	else{
		num5 = -10;
	}
	if(num6 <  520){
		num6 = num6 + 3;
	}
	else{
		num6 = -10;
	}
	move1.style.top = num1 + 'px';
	move2.style.top = num2 + 'px';
	move3.style.top = num3 + 'px';
	move4.style.top = num4 + 'px';
	move5.style.top = num5 + 'px';
	move6.style.top = num6 + 'px';
}


function checkCollide(obs,car){
	return ( ((obs.offsetTop < car.offsetTop +40) && 
		     (obs.offsetTop > car.offsetTop - 40)) &&
		( (obs.offsetLeft < car.offsetLeft+20) && (car.offsetLeft < obs.offsetLeft + 20)))

}


function stopGame(){

	clearGame();
//	document.getElementById('headline').innerHTML = 'Game Over';
	document.getElementById('level').innerHTML = 'You Lose';
}

function checkWin(){
	if(numScore === 10){

		clearGame();
		document.getElementById('headline').innerHTML = 'You Win!';
	}
}
function clearGame(){
	numScore = 0;
		obsMove[0].style.display = 'none';
	obsMove[1].style.display = 'none';

obsMove[2].style.display = 'none';

obsMove[3].style.display = 'none';
document.getElementById('tree1').style.display = 'none';
document.getElementById('tree2').style.display = 'none';
document.getElementById('tree3').style.display = 'none';
document.getElementById('tree4').style.display = 'none';
document.getElementById('tree5').style.display = 'none';
document.getElementById('tree6').style.display = 'none';
	car.style.display = 'none';
}

function pressKeyOn(event){
	event.preventDefault();
	console.log(event.key);
	keys[event.key] = true;
}

function pressKeyOff(event){
	event.preventDefault();
	console.log(keys);
	keys[event.key] = false;
}