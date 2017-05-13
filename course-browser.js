function generateCourseBrowser(element){
	var section_title = document.createElement("h2");
	var title_text = document.createTextNode("Course Browser");
	section_title.appendChild(title_text);
	element.appendChild(section_title);

	var majorDisplay = getMajorDepartment();
	element.appendChild(majorDisplay);

	//console.log("course browser loaded");
}

function cs() {
	document.getElementById("department-name").textContent="Computer Science";

}

function psych() {
	document.getElementById("department-name").textContent="Psychological and Brain Sciences";
}

function econ() {
	document.getElementById("department-name").textContent="Economics";

}

function getMajorDepartment(){
	var courses = document.createElement("div");
	courses.classList.add('course-listing-container');

	var coursesDisplay = document.createElement("div");
	coursesDisplay.classList.add('course-listing-course-container');
	courses.appendChild(coursesDisplay);

	var course1 = document.createElement("div");
	var course2 = document.createElement("div");
	var course3 = document.createElement("div");
	var course4 = document.createElement("div");
	var course5 = document.createElement("div");
	var course6 = document.createElement("div");

	course1.classList.add("course-box");
	course2.classList.add("course-box");
	course3.classList.add("course-box");
	course4.classList.add("course-box");
	course5.classList.add("course-box");
	course6.classList.add("course-box");

	var text1 = document.createTextNode("COSC 1 - Intro to Programming & Computation");
	var text2 = document.createTextNode("COSC 10 - Intro to Java");
	var text3 = document.createTextNode("COSC 30 - Discrete Mathematics in Computer Science");
	var text4 = document.createTextNode("COSC 31 - Algorithms")
	var text5 = document.createTextNode("COSC 50 - Software Development & Implementation")
	var text6 = document.createTextNode("COSC 51 - Computer Architecture")
	course1.appendChild(text1);
	course2.appendChild(text2);
	course3.appendChild(text3);
	course4.appendChild(text4);
	course5.appendChild(text5);
	course6.appendChild(text6);

	
	coursesDisplay.appendChild(course1);
	coursesDisplay.appendChild(course2);
	coursesDisplay.appendChild(course3);
	coursesDisplay.appendChild(course4);
	coursesDisplay.appendChild(course5);
	coursesDisplay.appendChild(course6);

	return courses;
}