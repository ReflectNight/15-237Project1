/* items.js
 * 		Contains item-related functions.
*/

function itemAction(obj){
	
	if(player.item === null)
		pickUp(obj);
	else{
		switchItem(obj);
	};
}

function pickUp(item){
  player.item = item;
	item.onScreen = false;
	item.x=inventory.x;
	item.y=inventory.y;
	printDialogue("you have picked up "+item.name+"!");//this could be randomized
}

function switchItem(newItem){
	onHand.onScreen = true;
	newItem.onScreen = false;
	
	player.item.x=newItem.x;
	player.item.y=newItem.y;
	newItem.x=inventory.x;
	newItem.y=inventory.y;
	
	player.item = newItem;
	
	printDialogue("You dropped "+onHand.name+" and picked up "+newItem.name+"!");
}
