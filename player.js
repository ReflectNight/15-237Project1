/* player.js
 *		Handles all player actions, stats, items, and interactions. All
 *		player data is stored in the player Object.
*/

// getPlayerPos(): Gets the 50x50 square the player is inhabiting.
function getPlayerPos(){
	var pos = new Object();
	pos.x = Math.ceil(player.x / 50);
	pos.y = Math.ceil((player.y - 100)/ 50);
	
	console.log("Player position: (" + pos.x + ", " + pos.y + ")");
	return pos;
}

// drawPlayer(): Draws the player.
function drawPlayer(){
	if (moveUp)
	{
		player.dir = 2;
		if (100 <= player.y)	
			player.y -= 5;
	}
	else if (moveDown)
	{
		player.dir = 0;
		if (player.y <= (gameHeight - 50))	
			player.y += 5;
	}
	else if (moveLeft)
	{
		player.dir = 1;
		if (0 <= player.x)	
			player.x -= 5;
	}
	else if (moveRight)
	{
		player.dir = 3;
		if (player.x <= (gameWidth - 50))	
			player.x += 5;
	}
	
	switch (player.dir){
		case 0:
			ctx.drawImage(player.img,0,0,50,50,player.x, player.y,50,50);
			break;
		case 1:
			ctx.drawImage(player.img,100,0,50,50,player.x, player.y,50,50);
			break;
		case 2:
			ctx.drawImage(player.img,45,0,50,50,player.x, player.y,50,50);
			break;
		case 3:
			ctx.drawImage(player.img,150,0,50,50,player.x, player.y,50,50);
			break;
		default:
			break;
	}
}

// doAction(): Tries to complete an action with the object in the same
// grid square.
function doAction(){
	var pos = getPlayerPos();
	var obj = worldMap[currentWorld].grid[pos.x][pos.y];
	
	if (obj !== undefined){
		// item action
		if (obj.type === "item"){
			itemAction();
		}
		// NPC action
		else if (obj.type === "NPC"){
			npcAction();
		}
	}
}