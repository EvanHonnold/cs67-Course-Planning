/**
 * Written by Evan Honnold
 * 
 * Currently incomplete
 */

function CurrentPlan(screenSection, importedHTML){

	// adds in the title
	screenSection.appendChild(importedHTML.getElementsByTagName("h1")[0]);

	this.showTerms = function(terms){
		if (!terms instanceof Array)
			console.log("its not an array");
		else
			console.log("its an array");
	}

}

function generateCurrentPlan(screenSection, importedHTML){

	// adds in the title
	screenSection.appendChild(importedHTML.getElementsByTagName("h1")[0]);

	for (var i = 0; i < 5; i++){
		var mTerm = new Term(new Season("spring"), new Number(2017));
		var newNode = getSingleTermDisplay(importedHTML, mTerm);
		screenSection.appendChild(newNode);
	}

}

function getSingleTermDisplay(importedHTML, term){
	if (!(term instanceof Term)){
		throw "must give getSingleTermDisplay a term object";
	}
	
	var termListingContainer = importedHTML.getElementsByClassName("term-listing-container")[0];
	var newContainer = termListingContainer.cloneNode(true);
	newContainer.getElementsByClassName("term-listing-term-name-text")[0].textContent = term.toString();
	return newContainer;
}

function GetTermsForTesting(){
	var terms = new Array();
	terms.push(new Term(new Season("winter"), new Number(2016)));
	terms.push(new Term(new Season("spring"), new Number(2016)));
	terms.push(new Term(new Season("summer"), new Number(2016)));
	terms.push(new Term(new Season("fall"), new Number(2016)));
	terms.push(new Term(new Season("winter"), new Number(2017)));
	return terms;
}

/*
function generateCurrentPlan(element){

	var section_title = document.createElement("h1");
	var title_text = document.createTextNode("Current Plan");
	section_title.appendChild(title_text);
	element.appendChild(section_title);

	// for testing, until this script can accept term 
	// objects to define what terms will be shown on the plan:

	var termDisplay = getTermDisplay();
	element.appendChild(termDisplay);


	console.log("current plan loaded");
}
*/

/*
// for testing, until this script can accept term 
// objects to define what terms will be shown on the plan:
function getTermDisplay(){
	var container = document.createElement("div");
	container.classList.add('term-listing-container');
	var nameDisplay = document.createElement("span");

	//nameDisplay.appendChild(nameNode);
	nameDisplay.classList.add("term-listing-term-name");
	var nameDisplayText = document.createElement("span");
	var nameNode = document.createTextNode("Fall 2017");
	nameDisplayText.appendChild(nameNode);
	nameDisplay.appendChild(nameDisplayText);
	container.appendChild(nameDisplay);

	var coursesDisplay = document.createElement("div");
	coursesDisplay.classList.add('term-listing-courses-container');
	container.appendChild(coursesDisplay);

	var course1 = document.createElement("div");
	var course2 = document.createElement("div");
	var course3 = document.createElement("div");
	course1.classList.add("course-box");
	course2.classList.add("course-box");
	course3.classList.add("course-box");
	var text1 = document.createTextNode("Course Name Here  .........sdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdf");
	var text2 = document.createTextNode("Course Name Here");
	var text3 = document.createTextNode("Course Name Here");
	course1.appendChild(text1);
	course2.appendChild(text2);
	course3.appendChild(text3);
	
	coursesDisplay.appendChild(course1);
	coursesDisplay.appendChild(course2);
	coursesDisplay.appendChild(course3);


	// var text_1 = document.createElement("span");
	// var text_text = document.createTextNode("text");
	// text_1.appendChild(text_text);
	// var text_2 = document.createElement("span");
	// var text_text2 = document.createTextNode("text");
	// text_2.appendChild(text_text2);
	
	// nameDisplay.appendChild(text_1);
	// coursesDisplay.appendChild(text_2);

	return container;
}
*/