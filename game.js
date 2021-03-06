/* game.js
 * 		Runs the game. Redraws the entire canvas repeatedly.
*/

// drawBG(): Draws the background.
function drawBG(){
	ctx.drawImage(worldMap[currentWorld].img, 0, 0, 450, 450); // resize to 150x150
}

// drawObjAbove(playerLoc): Draws all objects above the player.
function drawObjAbove(playerLoc){
	for (var i = 0; i < worldMap[currentWorld].grid.length; i++)
		for (var j = 0; j < playerLoc; j++)
		{
			if (worldMap[currentWorld].grid[i][j] !== undefined)
			{
				if (worldMap[currentWorld].grid[i][j].type === "item")
				{
					if(worldMap[currentWorld].grid[i][j].onScreen){
						//console.log(worldMap[currentWorld].grid[i][j].name);
						ctx.drawImage(worldMap[currentWorld].grid[i][j].img, 
							i*50, j*50 + 90);
					}
				}
				else 
					ctx.drawImage(worldMap[currentWorld].grid[i][j].img, 
						i*50, j*50 + 80);
			}
		}
}

// drawObjBelow(playerLoc): Draws all objects below the player.
function drawObjBelow(playerLoc){
	for (var i = 0; i < worldMap[currentWorld].grid.length; i++)
		for (var j = playerLoc; j < worldMap[currentWorld].grid[0].length; j++)
		{
			if (worldMap[currentWorld].grid[i][j] !== undefined)
			{
				if (worldMap[currentWorld].grid[i][j].type === "item")
				{
					if(worldMap[currentWorld].grid[i][j].onScreen){
						//console.log(worldMap[currentWorld].grid[i][j].name);
						ctx.drawImage(worldMap[currentWorld].grid[i][j].img, 
							i*50, j*50 + 90);
					}
				}
				else 
					ctx.drawImage(worldMap[currentWorld].grid[i][j].img, 
						i*50, j*50 + 80);
			}
		}
}

// onTimer(): Handles the event when page is refreshed. 
function onTimer(){
	var pos = getPlayerPos();

	drawBG();
	drawObjAbove(pos.y);
	drawPlayer();
	drawObjBelow(pos.y);
	drawTeleportMenu();
}

// run(): Executes the game.
function run(){
	console.log("Game start.");
	
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	
	drawSidebar();
	drawDialogue();
	
	intervalID = setInterval(onTimer, timerDelay);
}