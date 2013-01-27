/* Sidebar.js
 * For all sidebar items
 */

function drawSidebar(){

  var size=150;

  ctx.fillStyle="rgb(10,40,50)";
  ctx.fillRect(gameWidth,0,size,size);

  ctx.fillStyle="rgb(10,200,50)";
  ctx.fillRect(gameWidth,150,size,size);

  ctx.fillStyle="rgb(200,40,50)";
  ctx.fillRect(gameWidth,300,size,size);
}

function updateStats(){
  //to be completed
  //this is you
  //happyface
}

function updateItem(){
  
}

function updateMoves(){
  ctx.fillStyle="rgb(200,40,50)";
  ctx.fillRect(gameWidth,300,size,size);
  ctx.font="30pt Monospace";
  ctx.fillStyle="#000";
  ctx.fillText(numTurns,500,350);
}
