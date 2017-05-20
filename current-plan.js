/**
 * Written by Evan Honnold
 * 
 * Currently incomplete
 */

function CurrentPlan(screenSection){

	var currentPlan = this;
	this.termDisplays = new Array();

	// adds in the title
	screenSection.appendChild(makeElemWithText("h1", "Current Plan"));

	// takes a list of terms and adds html to display them
	this.showTerms = function(terms){
		if (!(terms instanceof Array))
			throw "Current Plan must be created with an array of Term objects";
		currentPlan.termDisplays = new Array();
		for (var i = 0; i < terms.length; i++){
			if (!(terms[i] instanceof Term))
				throw "Current Plan was given an array containing an object that isn't a Term";
			var newTermDisplay = new SingleTermDisplay(terms[i], screenSection);
			currentPlan.termDisplays.push(newTermDisplay);
		}
	}

	// example of Tim's function call: 	updateDistribs("tla");

	// local helper function
	function getCourseSlots(){
		var slots = new Array();
		for (var i = 0; i < currentPlan.termDisplays.length; i++){
			var currSlots = currentPlan.termDisplays[i].courseSlots;
			for (var j = 0; j < currSlots.length; j++)
				slots.push(currSlots[j]);
		}
		return slots;
	}

	function SingleTermDisplay(term, parentElement){
		var singleTermDisplay = this;
		this.courseSlots = new Array();

		/////////////////////////////////////////
		// ---- generate the HTML dynamically ----
		/////////////////////////////////////////

		// container
		var termListingContainer = makeElemWithClass("div", "term-listing-container");
		parentElement.appendChild(termListingContainer);

		if (term.onCampus){

			// left part (the term)
			var termListingTermName = makeElemWithClass("div", "term-listing-term-name");
			termListingContainer.appendChild(termListingTermName);
			var topDiv = document.createElement("div");
			topDiv.style.flex = 0.5;
			termListingTermName.appendChild(topDiv);
			var termListingTermNameText = makeElemWithClass("div","term-listing-term-name-text");
			termListingTermName.appendChild(termListingTermNameText);
			termListingTermNameText.textContent = term.toString();
			var btmDiv = topDiv.cloneNode();
			termListingTermName.appendChild(btmDiv);

			// right part (the set of slots for courses)
			var termListingCoursesContainer = makeElemWithClass("div", "term-listing-courses-container");
			termListingContainer.appendChild(termListingCoursesContainer);
			for (var i = 0; i < 3; i++){
				new CourseSlot(termListingCoursesContainer);
				if (i < 2)
					termListingCoursesContainer.appendChild(makeElemWithClass("div", "course-box-divider"));
			}
		}
		else {

			// if the student is off campus:
			var offtermDisplay = makeElemWithClass("div", "term-listing-off-campus");
			var displayText = makeElemWithClass("span", "term-listing-off-campus-text");
			displayText.textContent = "off-term";
			offtermDisplay.appendChild(displayText);
			termListingContainer.appendChild(offtermDisplay);
		}

		/////////// END of HTML GENERATION ////////////////

		function CourseSlot(parentElement){

			////// Dynamic HTML Generation //////
			var courseSlot = makeElemWithClass("div", "course-slot");
			parentElement.appendChild(courseSlot);
			var courseSlotBackground = makeElemWithClass("span", "course-slot-background");
			courseSlot.appendChild(courseSlotBackground);
			courseSlotBackground.textContent = "drag and drop a course here";

			////// End of Dynamic HTML Generation //////

			function inBounds(x, y){
				var bounds = courseSlot.courseBox.getBoundingClientRect();
				if (x > bounds.left && x < bounds.right && y > bounds.top && y < bounds.bottom)
					return true;
				else
					return false;
			}
			
			courseSlot.onmouseup = function(event){
				if (draggedElement){
					courseSlot.children[0].style.display = "none";
					courseSlot.appendChild(draggedElement.children[0]);
					draggedElement.remove();
					draggedElement = null;
				}
			}
			
			courseSlot.onmousedown = function(event){
				// check if there's a class in the slot:
				var courseBoxes = courseSlot.getElementsByClassName("course-box");
				if (courseBoxes.length > 0){

					// get the offset, so the dragged item appears in the right place
					// relative to the cursor:
					var rect = courseBoxes[0].getBoundingClientRect();

					// create an html element to hold the course box while it's dragging:
					var boxFloater = makeElemWithClass("div", "course-box-floater");
					boxFloater.style.left = rect.left + "px";
					boxFloater.style.top = rect.top + "px";
					document.getElementsByTagName("body")[0].appendChild(boxFloater);
					boxFloater.appendChild(courseBoxes[0]);

					// store the offset inside the HTML element:
					boxFloater.offsetX = rect.left - event.pageX;
					boxFloater.offsetY = rect.top - event.pageY;

					courseSlot.classList.add("dragged-course-slot");

					// allow the floater to move on mouse position change:
					draggedElement = boxFloater;
					document.addEventListener("mousemove", mouseMovedWhileDragging);
					document.addEventListener("mouseup", mouseReleasedWhileDragging);
				}
			}
		}
	}
}

// globals for keeping track of click and drag:
var draggedElement = null;

// click and drag functions:
function mouseMovedWhileDragging(event){
	draggedElement.style.left = (event.pageX + draggedElement.offsetX) + "px";
	draggedElement.style.top = (event.pageY + draggedElement.offsetY) + "px";
	
	var slots = document.getElementsByClassName("course-slot");
	var dragBox = draggedElement.getBoundingClientRect();
	var bestOverlap = 0;
	var bestOverlapSlot = null;
	for (var i = 0; i < slots.length; i++){
		var boxes = slots[i].getElementsByClassName("course-box");
		if (boxes.length == 0){ // if the slot is empty:
			var currBox = slots[i].getBoundingClientRect();
			var overlap = rectOverlap(dragBox, currBox);
			if (overlap > bestOverlap){
				bestOverlap = overlap;
				bestOverlapSlot = slots[i];
			}
		}
	}

	for (var i = 0; i < slots.length; i++){
		if (slots[i] === bestOverlapSlot)
			slots[i].classList.add("highlighted-course-slot");
		else
			slots[i].classList.remove("highlighted-course-slot");
	}
}

function mouseReleasedWhileDragging(event){
	document.removeEventListener("mousemove", mouseMovedWhileDragging);
	document.removeEventListener("mouseup", mouseReleasedWhileDragging);

	// get a reference to th slot where the dragged course came from:
	var initSlot = document.getElementsByClassName("dragged-course-slot")[0];

	// check whether the element was dropped over an empty slot
	var highlightedSlots = document.getElementsByClassName("highlighted-course-slot");
	if (highlightedSlots.length == 1){
		highlightedSlots[0].onmouseup(event);

		// make the "drag and drop here" message visible again
		// at the source element:
		if (highlightedSlots[0] != initSlot && initSlot.children.length > 0)
			initSlot.children[0].style.display = "";

		highlightedSlots[0].classList.remove("highlighted-course-slot");

		// check distributives
		var courses = document.getElementsByClassName("section")[0].getElementsByClassName("course-box");
		var courselist = new Array();
		for ( var i = 0; i < courses.length; i++ ) {
			courselist.push(courses[i].course);

		}
		updateDistribs(courselist);

	}
	else {
		// if we got here, the element wasn't successfully dropped,
		// so return it to its original place
		initSlot.onmouseup(null);
	}

	// deselect the place where the dragged element came from:
	initSlot.classList.remove("dragged-course-slot");
}


function makeElemWithText(tag, text){
	var elem = document.createElement(tag);
	var elemText = document.createTextNode(text);
	elem.appendChild(elemText);
	return elem;
}

function makeElemWithClass(tag, className){
	var elem = document.createElement(tag);
	elem.classList.add(className);
	return elem;
}

function GetTermsForTesting(){
	var terms = new Array();
	terms.push(new Term(new Season("winter"), new Number(2016), true));
	terms.push(new Term(new Season("spring"), new Number(2016), true));
	terms.push(new Term(new Season("summer"), new Number(2016), true));
	terms.push(new Term(new Season("fall"), new Number(2016), true));
	terms.push(new Term(new Season("winter"), new Number(2017), false));
	terms.push(new Term(new Season("spring"), new Number(2017), true));
	terms.push(new Term(new Season("summer"), new Number(2017), false));
	terms.push(new Term(new Season("fall"), new Number(2017), true));
	terms.push(new Term(new Season("winter"), new Number(2018), true));
	terms.push(new Term(new Season("spring"), new Number(2018), true));

	return terms;
}


// helper
function rectOverlap(rect1, rect2){
	var vert1 = {low:rect1.top, high:rect1.bottom};
	var vert2 = {low:rect2.top, high:rect2.bottom};
	var vertOverlap = rangeOverlap(vert1, vert2);
	if (vertOverlap == 0)
		return 0;
	var horiz1 = {low:rect1.left, high:rect1.right};
	var horiz2 = {low:rect2.left, high:rect2.right};
	var horizOverlap = rangeOverlap(horiz1, horiz2);
	if (horizOverlap == 0)
		return 0;
	return vertOverlap * horizOverlap;
}

function rangeOverlap(range1, range2){
	var lowStart = range1;
	if (range1.low > range2.low)
		lowStart = range2;
	var highStart = range1;
	if (lowStart == range1)
		highStart = range2;
	overlap = 0;
	if (highStart.high > lowStart.high)
		overlap = Math.max(0, lowStart.high-highStart.low);
	else
		overlap = highStart.high - highStart.low;
	return overlap;
}

/*

function generateCurrentPlan(screenSection, importedHTML){

	// adds in the title
	screenSection.appendChild(importedHTML.getElementsByTagName("h1")[0]);

	for (var i = 0; i < 5; i++){
		var mTerm = new Term(new Season("spring"), new Number(2017));
		var newNode = getSingleTermDisplay(importedHTML, mTerm);
		screenSection.appendChild(newNode);
	}

}


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