/* NPCs.js
 * 		Contains NPC-related functions.
*/

function npcAction(npc,item){
  if(item==undefined)
		talk(npc);
	else{
		hasItem(npc,item)
	};
}
function talk(npc){
	printDialogue(npc.name+": "+npc.hintDialogue[0]);
}

function hasItem(npc,item){
	if (item.name===npc.itemID)
		printDialogue(npc.name+": "+npc.acceptDialogue [0]);
	else
		printDialogue(npc.name+": "+npc.rejectDialogue [0]);
}
