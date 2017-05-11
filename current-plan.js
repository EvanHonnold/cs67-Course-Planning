/**
 * Written by Evan Honnold
 * 
 * Currently incomplete
 */

function generateCurrentPlan(element, document){

	var section_title = document.createElement("h1");
	var title_text = document.createTextNode("Current Plan");
	section_title.appendChild(title_text);
	element.appendChild(section_title);

	console.log("current plan loaded");
}
