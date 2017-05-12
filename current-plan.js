/**
 * Written by Evan Honnold
 * 
 * Currently incomplete
 */



function generateCurrentPlan(element){

	var section_title = document.createElement("h1");
	var title_text = document.createTextNode("Current Plan");
	section_title.appendChild(title_text);
	element.appendChild(section_title);

	// for testing, until this script can accept term 
	// objects to define what terms will be shown on the plan:

	//var termDisplay = getTermDisplay();
	//element.appendChild(termDisplay);


	console.log("current plan loaded");
}

// for testing, until this script can accept term 
// objects to define what terms will be shown on the plan:
function getTermDisplay(){

}