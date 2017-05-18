/**
 * Written by Evan Honnold
 * 
 * Currently incomplete
 */

function CurrentPlan(screenSection){
	var currentPlan = this;
	this.termDisplays = new Array();

	//// NOTE: this is for testing - REMOVE WHEN DONE

	/*
	document.addEventListener("click", function(e){
		currentPlan.notifyDroppedClass(e.pageX, e.pageY, "sdfgsdfgsdFGsdf");
	});
	*/

	/////////// END TESTING

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

	/**
	 *  This function should be called whenever the mouse moves and a class
	 *  is being dragged. The function will check through all the course slots 
	 *  and check whether the mouse is over any of them.  If it is, that slot 
	 *  will temporarily change color. 
	 */
	this.notifyHoveringClass = function(mouseX, mouseY){
		var slots = getCourseSlots();
		for (var i = 0; i < slots.length; i++)
			slots[i].notifyHoveringClass(mouseX, mouseY);
	}

	/**
	 * 	This function should be called whenever a dragged class is dropped. 
	 *  It'll check whether the mouse is over a slot.  If it is, the class 
	 *  will be moved into the slot, and the function will return true. Otherwise, 
	 *  the function will return false. 
	 */
	this.notifyDroppedClass = function(mouseX, mouseY, courseName){
		var slots = getCourseSlots();
		for (var i = 0; i < slots.length; i++){
			var dropSuccess = slots[i].notifyDroppedClass(mouseX, mouseY, courseName);
			if (dropSuccess)
				return true;
		}
		return false;
	}

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
			this.courseSlots.push(new CourseSlot(termListingCoursesContainer));
			if (i < 2)
				termListingCoursesContainer.appendChild(makeElemWithClass("div", "course-box-divider"));
		}

		/////////// END of HTML GENERATION ////////////////

		function CourseSlot(parentElement){
			var courseSlot = this;
			this.filled = false;

			// colors to represent the boxes' statuses:
			var color_filled= "#BDBDBD";  // gray 400
			var color_empty = "#E0E0E0";   // gray 300
			var color_hover = "#EEEEEE";   // gray 200

			////// Dynamic HTML Generation //////
			this.courseBox = makeElemWithClass("div", "course-box");
			parentElement.appendChild(this.courseBox);
			this.courseBox.textContent = "drop a course here";
			colorElement(false);

			////// End of Dynamic HTML Generation //////

			this.notifyHoveringClass = function(mouseX, mouseY){
				if (inBounds(mouseX, mouseY))
					colorElement(true);
				else
					colorElement(false);
			}

			this.notifyDroppedClass = function(mouseX, mouseY, courseName){
				if (!inBounds(mouseX, mouseY))
					return false;
				else {
					if (this.filled)
						return false;
					else {
						courseSlot.courseBox.textContent = courseName;
						courseSlot.filled = true;
						colorElement(false);
						return true;
					}
				}
			}

			function inBounds(x, y){
				var bounds = courseSlot.courseBox.getBoundingClientRect();
				if (x > bounds.left && x < bounds.right && y > bounds.top && y < bounds.bottom)
					return true;
				else
					return false;
			}

			function colorElement(hoveredOver){
				var color;
				if (courseSlot.filled)
					color = color_filled;
				else {
					if (hoveredOver)
						color = color_hover;
					else
						color = color_empty;
				}
				courseSlot.courseBox.style.backgroundColor = color;
			}
		}
	}
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
	terms.push(new Term(new Season("winter"), new Number(2016)));
	terms.push(new Term(new Season("spring"), new Number(2016)));
	terms.push(new Term(new Season("summer"), new Number(2016)));
	terms.push(new Term(new Season("fall"), new Number(2016)));
	terms.push(new Term(new Season("winter"), new Number(2017)));
	return terms;
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