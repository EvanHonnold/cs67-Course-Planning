function generateCourseBrowser(element){
	var section_title = document.createElement("h1");
	var title_text = document.createTextNode("Course Browser");
	section_title.appendChild(title_text);
	element.appendChild(section_title);

	var courses_dictionary = new Object();
	courses_dictionary={ 
    	"Computer Science":["COSC 1 - Intro to Programming and Computation","COSC 10 - Intro to Java", "COSC 30 - Discrete Mathematics","COSC 31 - Algorithms", "COSC 50 - Software Development and Implementation", "COSC 51 - Computer Architecture"], 
     	"Psychological and Brain Sciences":["PSYC 1- Intro to psychology","PSYC 10 - Statistics","PSYC 23 - Social Psychology","PSYC 27 - Cognition","PSYC 6 - Intro to Neuroscience","PSYC 45 - Behavioral Neuroscience"], 
     	"Economics":["ECON 1 - Intro to Economics", "ECON 10 - Statistics", "ECON 35 - Game Theoy"]
	};

	var courses = document.createElement("div");
	courses.id = "courseblock";
	courses.classList.add('course-listing-container');
	element.appendChild(courses);

 	var integer = 0
	var majorDisplay = getMajorDepartment(courses_dictionary, "Computer Science", integer);
	element.appendChild(majorDisplay);

	var info = document.createElement("div");
	info.id = "popup";
	info.classList.add("course-info-container");
	element.appendChild(info);
	info.style.display = 'block';
	var coursetitle = document.createElement("div");
	coursetitle.id = "coursetitle";
	var courseinfo = document.createElement("div");
	courseinfo.id = "courseinfo";
	var courseterm = document.createElement("div");
	courseterm.id = "courseterm";
	var courseinstructor = document.createElement("div");
	courseinstructor.id = "courseinstructor";
	var coursedistribs = document.createElement("div");
	coursedistribs.id = "coursedistribs";
	var courseprereqs = document.createElement("div");
	courseprereqs.id = "courseprereqs";
	coursetitle.classList.add("info-box");
	courseinfo.classList.add("info-box");
	courseterm.classList.add("info-box");
	courseinstructor.classList.add("info-box");
	coursedistribs.classList.add("info-box");
	courseprereqs.classList.add("info-box");
	info.appendChild(coursetitle);
	info.appendChild(courseinfo);
	info.appendChild(courseinstructor);
	info.appendChild(coursedistribs);
	info.appendChild(courseterm);
	info.appendChild(courseprereqs);
	displayInfo("COSC 1 - Intro to Programming and Computation");

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
	var integer = 1;
	var majorDisplay = getMajorDepartment(courses_dictionary, "Computer Science", integer);
	//document.getElementById("courseblock").appendChild(majorDisplay);
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
	var integer = 1;

	var majorDisplay = getMajorDepartment(courses_dictionary, "Psychological and Brain Sciences", integer);
	//document.getElementById("courseblock").appendChild(majorDisplay);
}

function econ(element) {
	document.getElementById("department-name").textContent="Economics";
	document.getElementById("courses").remove();

	var courses_dictionary = new Object();
	courses_dictionary={ 
    	"Computer Science":["COSC 1 - Intro to Programming and Computation","COSC 10 - Intro to Java", "COSC 30 - Discrete Mathematics","COSC 31 - Algorithms", "COSC 50 - Software Development and Implementation", "COSC 51 - Computer Architecture"], 
     	"Psychological and Brain Sciences":["PSYC 1- Intro to psychology","PSYC 10 - Statistics","PSYC 23 - Social Psychology","PSYC 27 - Cognition","PSYC 6 - Intro to Neuroscience","PSYC 45 - Behavioral Neuroscience"], 
     	"Economics":["ECON 1 - Intro to Economics", "ECON 10 - Statistics", "ECON 35 - Game Theory"]
	};
	var integer = 1;

	var majorDisplay = getMajorDepartment(courses_dictionary, "Economics", integer);
	///document.getElementById("courseblock").appendChild(majorDisplay);
}

function getMajorDepartment(dictionary, title, boolean){
	var courses = document.getElementById('courseblock');
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

	var courselist= document.getElementById("courses");
	var children = courselist.children;
	if (boolean==1) {
		for (var i = 0; i < children.length; i++) {
			console.log(children[i].textContent);
			children[i].addEventListener("mouseover", function(){
				var info = document.getElementById('popup');

				var info_dict = new Object();
				info_dict={
					"COSC 1 - Intro to Programming and Computation":["COSC 1 - Intro to Programming and Computation","This course introduces computational concepts that are fundamental to computer science and are useful for the sciences, social sciences, engineering, and digital arts. Students will write their own interactive programs to analyze data, process text, draw graphics, manipulate images, and simulate physical systems. Problem decomposition, program efficiency, and good programming style are emphasized throughout the course. No prior programming experience is assumed.", "Farid (fall), Balkcom (winter), Cormen (spring)", "TLA", "16F, 17W, 17S", "None"],
					"COSC 10 - Intro to Java":["COSC 10 - Intro to Java", "Motivated by problems that arise in a variety of disciplines, this course examines concepts and develops skills in solving computational problems. Topics covered include abstraction (how to hide details), modularity (how to decompose problems), data structures (how to efficiently organize data), and algorithms (procedures for solving problems). Laboratory assignments are implemented using object-oriented programming techniques.", "Bailey-Kellogg (fall), Kotz (winter), Casey (spring)", "16F, 17W, 17S", "TLA",  "COSC 1, ENGS 20, or placement through the Advanced Placement exam or the local placement exam."], 
					"COSC 30 - Discrete Mathematics": ["COSC 30 - Discrete Mathematics", "info", "instructors", "terms", "distribs", "prereqs"],
					"COSC 31 - Algorithms": ["COSC 31 - Algorithms", "info", "instructors", "terms", "distribs", "prereqs"], 
					"COSC 50 - Software Development and Implementation": ["COSC 50 - Software Design and Implementation", "info", "instructors", "terms", "distribs", "prereqs"], 
					"PSYC 45 - Behavioral Neuroscience": ["PSYC 45 - Behavioral Neuroscience", "info", "instructors", "terms", "distribs", "prereqs"], 
					"PSYC 6 - Intro to Neuroscience": ["PSYC 6 - Intro to Neuroscience", "info", "instructors", "terms", "distribs", "prereqs"], 
					"PSYC 27 - Cognition": ["PSYC 27 - Cognition", "info", "instructors", "terms", "distribs", "prereqs"], 
					"PSYC 23 - Social Psychology": ["PSYC 23 - Social Psychology", "info", "instructors", "terms", "distribs", "prereqs"], 
					"PSYC 10 - Statistics": ["PSYC 10 - Statistics", "info", "instructors", "terms", "distribs", "prereqs"], 
					"PSYC 1- Intro to psychology": ["PSYC 1- Intro to psychology", "info", "instructors", "terms", "distribs", "prereqs"], 
					"ECON 35 - Game Theory": ["ECON 35 - Game Theory", "info", "instructors", "terms", "distribs", "prereqs"], 
					"ECON 10 - Statistics": ["ECON 10 - Statistics", "info", "instructors", "terms", "distribs", "prereqs"], 
					"ECON 1 - Intro to Economics": ["ECON 1 - Intro to Economics", "info", "instructors", "terms", "distribs", "prereqs"], 
					
					"COSC 51 - Computer Architecture": ["COSC 51 - Computer Architecture", "info", "instructors", "terms", "distribs", "prereqs"]
				
				};
				var coursename = this.textContent;
				var coursetitle1 = document.getElementById("coursetitle");
				var courseinfo1 = document.getElementById("courseinfo");
				var courseinstructor1 = document.getElementById("courseinstructor");
				var courseterms1 = document.getElementById("courseterm");
				var coursedistribs1 = document.getElementById("coursedistribs");
				var courseprereqs1 = document.getElementById("courseprereqs");
				coursetitle1.innerHTML = '';
				courseinfo1.innerHTML = '';
				coursedistribs1.innerHTML = '';
				courseterms1.innerHTML = '';
				courseinstructor1.innerHTML = '';
				courseprereqs1.innerHTML = '';
				var title= document.createTextNode("Title: " + info_dict[coursename][0]);
				var information = document.createTextNode("Information: " + info_dict[coursename][1]);
				var term = document.createTextNode("Terms offered: " + info_dict[coursename][4]);
				var prof = document.createTextNode("Instructor(s): " + info_dict[coursename][2]);
				var distribs = document.createTextNode("Distributives satisfied: " + info_dict[coursename][3]);
				var prereqs = document.createTextNode("Prerequisites: " + info_dict[coursename][5]);

				//var title= document.createTextNode("Title: " + info_dict["COSC 1 - Intro to Programming and Computation"][0]);
				//var information = document.createTextNode("Information: " + info_dict["COSC 1 - Intro to Programming and Computation"][1]);
				//var term = document.createTextNode("Terms offered: " + info_dict["COSC 1 - Intro to Programming and Computation"][4]);
				//var prof = document.createTextNode("Instructor(s): " + info_dict["COSC 1 - Intro to Programming and Computation"][2]);
				//var distribs = document.createTextNode("Distributives satisfied: " + info_dict["COSC 1 - Intro to Programming and Computation"][3]);
				//var prereqs = document.createTextNode("Prerequisites: " + info_dict["COSC 1 - Intro to Programming and Computation"][5]);

				console.log("at display");

				coursetitle1.appendChild(title);
				courseinfo1.appendChild(information);
				courseterms1.appendChild(term);
				courseinstructor1.appendChild(prof);
				coursedistribs1.appendChild(distribs);
				courseprereqs1.appendChild(prereqs);
				info.style.display = 'block';
			});
			children[i].onMouseout = removeInfo;
		}
	}
		
	return courses;

}

function displayInfo(coursename) {
	var info = document.getElementById('popup');

	var info_dict = new Object();
	info_dict={
		"COSC 1 - Intro to Programming and Computation":["COSC 1 - Intro to Programming and Computation","This course introduces computational concepts that are fundamental to computer science and are useful for the sciences, social sciences, engineering, and digital arts. Students will write their own interactive programs to analyze data, process text, draw graphics, manipulate images, and simulate physical systems. Problem decomposition, program efficiency, and good programming style are emphasized throughout the course. No prior programming experience is assumed.", "Farid (fall), Balkcom (winter), Cormen (spring)", "TLA", "16F, 17W, 17S", "None"],
		"COSC 10 - Intro to Java":["COSC 10 - Intro to Java", "Motivated by problems that arise in a variety of disciplines, this course examines concepts and develops skills in solving computational problems. Topics covered include abstraction (how to hide details), modularity (how to decompose problems), data structures (how to efficiently organize data), and algorithms (procedures for solving problems). Laboratory assignments are implemented using object-oriented programming techniques.", "Bailey-Kellogg (fall), Kotz (winter), Casey (spring)", "16F, 17W, 17S", "TLA",  "COSC 1, ENGS 20, or placement through the Advanced Placement exam or the local placement exam."], 
		"COSC 30 - Discrete Mathematics": ["COSC 30 - Discrete Mathematics", "info", "instructors", "terms", "distribs", "prereqs"],
		"COSC 31 - Algorithms": ["COSC 31 - Algorithms", "info", "instructors", "terms", "distribs", "prereqs"], 
		"COSC 50 - Software Development and Implementation": ["COSC 50 - Software Design and Implementation", "info", "instructors", "terms", "distribs", "prereqs"], 
		"COSC 51 - Computer Architecture": ["COSC 51 - Computer Architecture", "info", "instructors", "terms", "distribs", "prereqs"]
	};

	var coursetitle1 = document.getElementById("coursetitle");
	var courseinfo1 = document.getElementById("courseinfo");
	var courseinstructor1 = document.getElementById("courseinstructor");
	var courseterms1 = document.getElementById("courseterm");
	var coursedistribs1 = document.getElementById("coursedistribs");
	var courseprereqs1 = document.getElementById("courseprereqs");
	coursetitle1.innerHTML = '';
	courseinfo1.innerHTML = '';
	coursedistribs1.innerHTML = '';
	courseterms1.innerHTML = '';
	courseinstructor1.innerHTML = '';
	courseprereqs1.innerHTML = '';
	var title= document.createTextNode("Title: " + info_dict[coursename][0]);
	var information = document.createTextNode("Information: " + info_dict[coursename][1]);
	var term = document.createTextNode("Terms offered: " + info_dict[coursename][4]);
	var prof = document.createTextNode("Instructor(s): " + info_dict[coursename][2]);
	var distribs = document.createTextNode("Distributives satisfied: " + info_dict[coursename][3]);
	var prereqs = document.createTextNode("Prerequisites: " + info_dict[coursename][5]);

	//var title= document.createTextNode("Title: " + info_dict["COSC 1 - Intro to Programming and Computation"][0]);
	//var information = document.createTextNode("Information: " + info_dict["COSC 1 - Intro to Programming and Computation"][1]);
	//var term = document.createTextNode("Terms offered: " + info_dict["COSC 1 - Intro to Programming and Computation"][4]);
	//var prof = document.createTextNode("Instructor(s): " + info_dict["COSC 1 - Intro to Programming and Computation"][2]);
	//var distribs = document.createTextNode("Distributives satisfied: " + info_dict["COSC 1 - Intro to Programming and Computation"][3]);
	//var prereqs = document.createTextNode("Prerequisites: " + info_dict["COSC 1 - Intro to Programming and Computation"][5]);

	console.log("at display");

	coursetitle1.appendChild(title);
	courseinfo1.appendChild(information);
	courseterms1.appendChild(term);
	courseinstructor1.appendChild(prof);
	coursedistribs1.appendChild(distribs);
	courseprereqs1.appendChild(prereqs);
	info.style.display = 'block';
}

function removeInfo() {
	var info = document.getElementById('popup');
	var coursetitle1 = document.getElementById("coursetitle");
	var courseinfo1 = document.getElementById("courseinfo");
	var courseinstructor1 = document.getElementById("courseinstructor");
	var courseterms1 = document.getElementById("courseterm");
	var coursedistribs1 = document.getElementById("coursedistribs");
	var courseprereqs1 = document.getElementById("courseprereqs");
	coursetitle1.innerHTML = '';
	courseinfo1.innerHTML = '';
	coursedistribs1.innerHTML = '';
	courseterms1.innerHTML = '';
	courseinstructor1.innerHTML = '';
	courseprereqs1.innerHTML = '';
	var title= document.createTextNo
	info.style.display = 'none';
}