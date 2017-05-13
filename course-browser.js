function generateCourseBrowser(element){
	var section_title = document.createElement("h2");
	var title_text = document.createTextNode("Course Browser");
	section_title.appendChild(title_text);
	element.appendChild(section_title);

	var courses_dictionary = new Object();
	courses_dictionary={ 
    	"Computer Science":["COSC 1 - Intro to Programming and Computation","COSC 10 - Intro to Java", "COSC 30 - Discrete Mathematics","COSC 31 - Algorithms", "COSC 50 - Software Development and Implementation", "COSC 51 - Computer Architecture"], 
     	"Psychological and Brain Sciences":["PSYC 1- Intro to psychology","PSYC 10 - Statistics","PSYC 23 - Social Psychology","PSYC 27 - Cognition","PSYC 6 - Intro to Neuroscience","PSYC 45 - Behavioral Neuroscience"], 
     	"Economics":["ECON 1 - Intro to Economics", "ECON 10 - Statistics", "ECON 35 - Game Theoy"]
	};

	var majorDisplay = getMajorDepartment(courses_dictionary, "Computer Science");
	element.appendChild(majorDisplay);

	console.log("course browser loaded");
}

function cs(element) {
	document.getElementById("department-name").textContent="Computer Science";
	document.getElementById("courses").remove();

	var courses_dictionary = new Object();
	courses_dictionary={ 
    	"Computer Science":["COSC 1 - Intro to Programming and Computation","COSC 10 - Intro to Java", "COSC 30 - Discrete Mathematics","COSC 31 - Algorithms", "COSC 50 - Software Development and Implementation", "COSC 51 - Computer Architecture"], 
     	"Psychological and Brain Sciences":["PSYC 1- Intro to psychology","PSYC 10 - Statistics","PSYC 23 - Social Psychology","PSYC 27 - Cognition","PSYC 6 - Intro to Neuroscience","PSYC 45 - Behavioral Neuroscience"], 
     	"Economics":["ECON 1 - Intro to Economics", "ECON 10 - Statistics", "ECON 35 - Game Theoy"]
	};

	var majorDisplay = getMajorDepartment(courses_dictionary, "Computer Science");
	document.getElementById("courseblock").appendChild(majorDisplay);
}

function psych(element) {
	document.getElementById("department-name").textContent="Psychological and Brain Sciences";
	document.getElementById("courses").remove();

	var courses_dictionary = new Object();
	courses_dictionary={ 
    	"Computer Science":["COSC 1 - Intro to Programming and Computation","COSC 10 - Intro to Java", "COSC 30 - Discrete Mathematics","COSC 31 - Algorithms", "COSC 50 - Software Development and Implementation", "COSC 51 - Computer Architecture"], 
     	"Psychological and Brain Sciences":["PSYC 1- Intro to psychology","PSYC 10 - Statistics","PSYC 23 - Social Psychology","PSYC 27 - Cognition","PSYC 6 - Intro to Neuroscience","PSYC 45 - Behavioral Neuroscience"], 
     	"Economics":["ECON 1 - Intro to Economics", "ECON 10 - Statistics", "ECON 35 - Game Theoy"]
	};

	var majorDisplay = getMajorDepartment(courses_dictionary, "Psychological and Brain Sciences");
	document.getElementById("courseblock").appendChild(majorDisplay);
}

function econ(element) {
	document.getElementById("department-name").textContent="Economics";
	document.getElementById("courses").remove();

	var courses_dictionary = new Object();
	courses_dictionary={ 
    	"Computer Science":["COSC 1 - Intro to Programming and Computation","COSC 10 - Intro to Java", "COSC 30 - Discrete Mathematics","COSC 31 - Algorithms", "COSC 50 - Software Development and Implementation", "COSC 51 - Computer Architecture"], 
     	"Psychological and Brain Sciences":["PSYC 1- Intro to psychology","PSYC 10 - Statistics","PSYC 23 - Social Psychology","PSYC 27 - Cognition","PSYC 6 - Intro to Neuroscience","PSYC 45 - Behavioral Neuroscience"], 
     	"Economics":["ECON 1 - Intro to Economics", "ECON 10 - Statistics", "ECON 35 - Game Theoy"]
	};

	var majorDisplay = getMajorDepartment(courses_dictionary, "Economics");
	document.getElementById("courseblock").appendChild(majorDisplay);
}

function getMajorDepartment(dictionary, title){
	var courses = document.createElement("div");
	courses.id = "courseblock"
	courses.classList.add('course-listing-container');

	var coursesDisplay = document.createElement("div");
	coursesDisplay.id = "courses"
	coursesDisplay.classList.add('course-listing-course-container');
	courses.appendChild(coursesDisplay);

	var myStringArray = dictionary[title];
	var arrayLength = myStringArray.length;
	for (var i = 0; i < arrayLength; i++) {
		var course1 = document.createElement("div");
		course1.classList.add("course-box");
		var text1 = document.createTextNode(myStringArray[i]);
		course1.appendChild(text1);
		coursesDisplay.appendChild(course1);
	}

	return courses;
}