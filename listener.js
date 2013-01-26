/* listener.js
 * 		Handles all key listener events.
*/

function updateDown(keyCode, x){
	console.log("Key Pressed: " + keyCode);

	if ((48 <= keyCode) && (keyCode <= (48 + numWorlds))){
		if (state === 0){
				goToWorld(keyCode - 48);
				state = 1;
			}
	}
	
	switch (keyCode){
	//performing an action
		case 32: // spacebar
			if (state !== 0){
				doAction();
			}
			break;
	
	//WASD movement
		case 38:
		case 87: //w
			moveUp = x;
			break;
		case 37:
		case 65: //a
			moveLeft = x;
			break;
		case 40:
		case 83: //s
			moveDown = x;
			break;
		case 39:
		case 68: //d
			moveRight = x;
			break;
			
		//Teleporting
		case 84: // t
			if (state !== 0){
				//enter teleport menu
				state = 0;
			}
			else{ //exit teleport menu
				state = 1;
			}
			break;
		default:
			break;
	}
}

function updateUp(keyCode, x){
	console.log("Key Released: " + keyCode);

	switch (keyCode){
	//WASD movement
		case 38:
		case 87: //w
			moveUp = x;
			break;
		case 37:
		case 65: //a
			moveLeft = x;
			break;
		case 40:
		case 83: //s
			moveDown = x;
			break;
		case 39:
		case 68: //d
			moveRight = x;
			break;
		default:
			break;
	}
}

function onKeyDown(evt){
	updateDown(evt.keyCode, true);
}

function onKeyUp(evt){
	updateUp(evt.keyCode, false);
}

window.addEventListener('keydown',onKeyDown,true);
window.addEventListener('keyup',onKeyUp,false);