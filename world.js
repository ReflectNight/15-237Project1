/* world.js
 * 		Handles teleporting and drawing the world's NPCs and items.
*/

// Brings up the menu to teleport to a different world.
function drawTeleportMenu(){
	if (state === 0)
	{
		ctx.font = '30pt Helvetica';
		ctx.textAlign = "center";
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.fillText("Teleporting...", 225, 225);
	}
}

function goToWorld(label){
	currentWorld = label;
	console.log("Went to world " + currentWorld);
}