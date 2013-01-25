/* game.js
 * 		Runs the game. Redraws the entire canvas repeatedly.
*/

// drawBG(): Draws the background.
function drawBG(){
	if (state === 0) //enter teleport menu
		teleportMenu();
	if ((state === 1) && (current_world < numWorlds))
		ctx.drawImage(worldMap[current_world].img, 0, 0, 450, 450); // resize to 150x150
}

// drawObjAbove(playerLoc): Draws all objects above the player.
function drawObjAbove(playerLoc){
}

// drawObjBelow(playerLoc): Draws all objects below the player.
function drawObjBelow(playerLoc){
	
}

// onTimer(): Handles the event when page is refreshed. 
function onTimer(){
	var pos = getPlayerPos();

	drawBG();
	drawObjAbove(pos.x);
	drawPlayer();
	drawObjBelow(pos.x);
}

// run(): Executes the game.
function run(){
	console.log("Game start.");
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	
	intervalID = setInterval(onTimer, timerDelay);
}