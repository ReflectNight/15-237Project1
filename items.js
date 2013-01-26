/* items.js
 * 		Contains item-related functions.
*/

function itemAction(){
	
	if(arguments[0]===undefined)
		pickUp(arguments[0]);
	else{
		switchItem(arguments[0],arguments[1]);
	};
}

function pickUp(item){
  
	item.x=inventory.x;
	item.y=inventory.y;
	printDialogue("you have picked up "+item.name+"!");//this could be randomized
}

function switchItem(onHand,newItem){
	
	onHand.x=newItem.x;
	onHand.y=newItem.y;
	newItem.x=inventory.x;
	newItem.y=inventory.y;
	printDialogue("You dropped "+onHand.name+" and picked up "+newItem.name+"!");
}
