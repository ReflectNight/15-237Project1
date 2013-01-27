/*
This is to be the dialogue files

*/

function drawDialogue(){
	ctx.fillStyle = "black";
  ctx.fillRect(0,450,600,150);
  //ctx.save();
}

function printDialogue(txt){
  drawDialogue();
	
	ctx.textAlign = 'left';
  ctx.font="20pt Monospace";
  ctx.fillStyle = "white";
  ctx.fillText(txt,10,500);
  //press space to continue
}
