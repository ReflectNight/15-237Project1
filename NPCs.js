/* NPCs.js
 * 		Contains NPC-related functions.
*/
function npcAction(npc, item){

	if(npc.done !== true){
		if(item === null)
			talk(npc);
		else{
			hasItem(npc, item);
		};
		numTurns--;
	}
	else{
		printDialogue(npc.name+": "+"Thank you for your help! You're awesome.");
	}
}

function talk(npc){
	
	printDialogue(npc.name+": "+npc.hintDialogue[0]);
}

function hasItem(npc,item){
	
	if (item.name === npc.itemID){
		printDialogue(npc.name+": "+npc.acceptDialogue[0]);
		item.x=600;
		item.y=600; // hides the item from the page
		npc.done=true;
	}
	else
		printDialogue(npc.name+": "+npc.rejectDialogue[0]);
}
