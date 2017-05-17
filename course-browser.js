function generateCourseBrowser(element){
	var courses = document.createElement("div");
	courses.id = "courseblock";
	courses.classList.add('course-listing-container');
	element.appendChild(courses);

	var majorDisplay = getMajorDepartment("Computer Science");
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

	console.log("course browser loaded");
}

function cs(element) {
	document.getElementById("department-name").textContent="Computer Science";
	document.getElementById("courses").remove();

	var integer = 1;
	var majorDisplay = getMajorDepartment("Computer Science", integer);
}

function psych(element) {
	document.getElementById("department-name").textContent="Psychological and Brain Sciences";
	document.getElementById("courses").remove();

	var majorDisplay = getMajorDepartment("Psychological and Brain Sciences");
}

function econ(element) {
	document.getElementById("department-name").textContent="Economics";
	document.getElementById("courses").remove();

	var majorDisplay = getMajorDepartment("Economics");
}

function getMajorDepartment(department){
	var courses = document.getElementById('courseblock');
	var coursesDisplay = document.createElement("div");
	coursesDisplay.id = "courses"
	coursesDisplay.classList.add('course-listing-course-container');
	courses.appendChild(coursesDisplay);
	
	var courses_dictionary = new Object();
	courses_dictionary={ 
	    "Computer Science":["COSC 1 - Intro to Programming and Computation","COSC 10 - Problem Solving via Object-Oriented Programming", "COSC 30 - Discrete Mathematics","COSC 31 - Algorithms", "COSC 35 - Data Stream Algorithms", "COSC 39 - Theory of Computation", "COSC 50 - Software Development and Implementation", "COSC 51 - Computer Architecture","COSC 67 - Introduction to Human-Computer Interaction","COSC 73 - Computational Linguistics","COSC 74 - Machine Learning and Statistical Data Analysis","COSC 87 - Rendering Algorithms"],    
	    "Psychological and Brain Sciences":["PSYC 1- Intro to psychology","PSYC 6 - Intro to Neuroscience","PSYC 10 - Statistics","PSYC 11 - Laboratory in Psychological Science","PSYC 21 - Perception","PSYC 23 - Social Psychology","PSYC 50.01 - Neuroscience of Mental Illness","PSYC 60 - Principles of Human Brain Mapping with fMRI","PSYC 80.03 - Spatial Cognition and Navigation: A Neurobiological Perspective","PSYC 81.07 - Decoding Human Brain Activity","PSYC 83.03 - The Self"],
	    "Economics":["ECON 1 - Intro to Economics", "ECON 10 - Statistics", "ECON 35 - Game Theoy"]
	};

	var myStringArray = courses_dictionary[department];
	var arrayLength = myStringArray.length;
	for (var i = 0; i < arrayLength; i++) {
		var course1 = document.createElement("div");
		course1.classList.add("course-box");
		course1.classList.add("draggable");
		var text1 = document.createTextNode(myStringArray[i]);
		course1.appendChild(text1);
		// target elements with the "draggable" class
		interact('.draggable')
		.draggable({

		    // enable inertial throwing
		    inertia: true,
		    // keep the element within the area of it's parent
		    restrict: {
		      restriction: "parent",
		      endOnly: true,
		      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
		    },
		    // enable autoScroll
		    autoScroll: true,

		    //call this function on every dragmove event
		    onmove: dragMoveListener,
		    ondragend: dragMoveEnd
		});

		function dragMoveListener (event) {
    		var target = event.target,
        		// keep the dragged position in the data-x/data-y attributes
        		x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        		y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

		    // translate the element
		    target.style.webkitTransform =
		    target.style.transform =
		    'translate(' + x + 'px, ' + y + 'px)';

		    // update the posiion attributes
		    target.setAttribute('data-x', x);
		    target.setAttribute('data-y', y);
		}
		function dragMoveEnd(event) {
    		var target = event.target,
        		// keep the dragged position in the data-x/data-y attributes
        		x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        		y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        	var name = this.textContent;
        	if (notifyDroppedClass(x,y,name)) {
        		// remove element from course list
        		for (var i = 0; i < arrayLength; i++) {
        			if ( myStringArray[i].equals(name) ) {
        				myStringArray.splice(i, 1);
        			}
        		}
        		// update course list
        		document.getElementById("department-name").click();
        	} else {
        		document.getElementById("department-name").click();
        	}
		}
		coursesDisplay.appendChild(course1);
	}

	var courselist= document.getElementById("courses");
	var children = courselist.children;
	for (var i = 0; i < children.length; i++) {
		console.log(children[i].textContent);
		children[i].addEventListener("mouseover", function(){
			var info = document.getElementById('popup');

			var info_dict = new Object();
			info_dict={
				"COSC 1 - Intro to Programming and Computation":["COSC 1 - Intro to Programming and Computation","This course introduces computational concepts that are fundamental to computer science and are useful for the sciences, social sciences, engineering, and digital arts. Students will write their own interactive programs to analyze data, process text, draw graphics, manipulate images, and simulate physical systems. Problem decomposition, program efficiency, and good programming style are emphasized throughout the course. No prior programming experience is assumed.", "Farid (fall), Balkcom (winter), Cormen (spring)", "TLA", "16F, 17W, 17S", "None"],
				"COSC 10 - Problem Solving via Object-Oriented Programming":["COSC 10 - Problem Solving via Object-Oriented Programming", "Motivated by problems that arise in a variety of disciplines, this course examines concepts and develops skills in solving computational problems. Topics covered include abstraction (how to hide details), modularity (how to decompose problems), data structures (how to efficiently organize data), and algorithms (procedures for solving problems). Laboratory assignments are implemented using object-oriented programming techniques.", "Bailey-Kellogg (fall), Kotz (winter), Casey (spring)", "TLA","16F, 17W, 17S", "COSC 1, ENGS 20, or placement through the Advanced Placement exam or the local placement exam."], 
				"COSC 30 - Discrete Mathematics": ["COSC 30 - Discrete Mathematics", "This course integrates discrete mathematics with algorithms and data structures, using computer science applications to motivate the mathematics. It covers logic and proof techniques, induction, set theory, counting, asymptotics, discrete probability, graphs, and trees. MATH 19 is identical to COSC 30 and may substitute for it in any requirement.", "Jayanti (fall), Chakrabarti (winter)", "16F, 17W", "QDS", "COSC 1, ENGS 20, or placement through the Advanced Placement exam or the local placement exam."],
				"COSC 31 - Algorithms": ["COSC 31 - Algorithms", "A survey of fundamental algorithms and algorithmic techniques, including divide-and-conquer algorithms, lower bounds, dynamic programming, greedy algorithms, amortized analysis, and graph algorithms. Presentation, implementation and formal analysis, including space/time complexity and proofs of correctness, are all emphasized.", "Cormen (fall), Jayanti (winter)", "16F, 17W", "QDS", "COSC 10 and COSC 30. Students who have not taken COSC 30 but have a strong mathematical background may take COSC 31 with the instructor's permission."], 
				"COSC 50 - Software Development and Implementation": ["COSC 50 - Software Design and Implementation", "Techniques for building large, reliable, maintainable, and understandable software systems. Topics include UNIX tools and filters, programming in C, software testing, debugging, and teamwork in software development. Concepts are reinforced through a small number of medium-scale programs and one team programming project.", "Zhou (summer), Palmer (winter), Kotz (spring)", "16X:, 17W, 17S", "TLA", "COSC 10"], 
				"PSYC 6 - Intro to Neuroscience": ["PSYC 6 - Intro to Neuroscience", "This course provides students with an introduction to the fundamental principles of neuroscience. The course will include sections on cellular and molecular neuroscience, neurophysiology, neuroanatomy, and cognitive neuroscience. Neuroscience is a broad field that is intrinsically interdisciplinary. As a consequence, the course draws on a variety of disciplines, including biochemistry, biology, physiology, pharmacology, (neuro)anatomy and psychology. The course will begin with in-depth analysis of basic functions of single nerve cells. We will then consider increasingly more complex neural circuits, which by the end of the course will lead to an analysis of the brain mechanisms that underlie complex goal-oriented behavior.", "Cramer, Winter", "16F: 11, 17W: 2", "SCI", "None"], 
				"PSYC 10 - Statistics": ["PSYC 10 - Statistics", "This course covers the various ways in which empirical information is obtained and analyzed in psychology and neuroscience. Statistical techniques covered will include ways to describe center and spread, t-tests, linear regression, chi-square, and complex analysis of variance (ANOVA), as well as use of a common statistical program to analyze data (SPSS). This course is the preferred preparation for Psychology 11, Laboratory in Psychological Science.", "Soltani, Pfister, Prescott", "16X: 10, 16F: 9L, 17W: 11, 17S: 9L", "QDS", "PSYC 1 or PSYC 6 (may be taken concurrently). Because of the large overlap in material covered, no student may receive credit for more than one of the courses ECON 10, GOV 10, MATH 10, MSS 15 or MSS 45, PSYC 10, or SOCY 10 except by special petition. Cannot be taken concurrently with PSYC 11."], 
				"PSYC 1- Intro to psychology": ["PSYC 1- Intro to psychology", "A course designed to serve as a general introduction to the science of human behavior. Emphasis will be placed upon the basic psychological processes of perception, learning, and motivation as they relate to personality, individual differences, social behavior, and the behavior disorders.", "The staff", "16F, 17W, 17S: 10", "SOC", "None"], 
				"ECON 35 - Game Theory": ["ECON 35 - Game Theory", "info", "instructors", "terms", "distribs", "prereqs"], 
				"ECON 10 - Statistics": ["ECON 10 - Statistics", "info", "instructors", "terms", "distribs", "prereqs"], 
				"ECON 1 - Intro to Economics": ["ECON 1 - Intro to Economics", "info", "instructors", "terms", "distribs", "prereqs"], 
				"COSC 51 - Computer Architecture": ["COSC 51 - Computer Architecture", "The architecture and organization of a simple computer system is studied. Topics covered include how information is represented in memory, machine-language instructions and how they can be implemented at the digital logic level and microcode level, assembly language programming, and input/output operations. Speedup techniques, such as pipelining and caching, are also covered.", "Smith", "17S", "TAS", "COSC 1, ENGS 20, or placement through the Advanced Placement exam or the local placement exam."],
				"COSC 39 - Theory of Computation": ["COSC 39 Theory of Computation", "This course serves as an introduction to formal models of languages and computation. Topics covered include finite automata, regular languages, context-free languages, pushdown automata, Turing machines, computability, and NP-completeness.", "Smith", "17W", "QDS", "COSC 30 and/or COSC 31. Students who have not taken COSC 30 and/or 31, but have a strong mathematical background, may take COSC 39 with the instructor's permission."],
				"COSC 67 - Introduction to Human-Computer Interaction": ["COSC 67 Introduction to Human-Computer Interaction", "This course provides the fundamentals of human-computer interaction, including human factors, usability, user-centered design, prototyping, and usability evaluation. Students will learn the skills and knowledge to identify users’ needs and limitations through observations and interviews. They will experience rapid prototyping and will learn common HCI evaluation techniques, such as qualitative and quantitative methods, to evaluate their designs and implementations. Additionally, students will be exposed to the state-of-the-art research within HCI. ", "Yang", "17S", "TAS", "COSC 50 or COSC 65"],
				"COSC 73 - Computational Linguistics": ["COSC 73 - Computational Linguistics", "The study of human language from a computational perspective. This course will survey formal models for representing linguistic objects, and statistical approaches to learning from natural language data. We will pay attention to the use of computational techniques to understand the structure of language, as well as practical engineering applications like speech recognition and machine translation. Students will implement simple algorithms for several key tasks in language processing and learning.  ", "", "Not offered in 2016-2017", "QDS", "COSC 1 or instructor permission for a comparable quantitative course."],
				"COSC 74 - Machine Learning and Statistical Data Analysis": ["COSC 74 - Machine Learning and Statistical Data Analysis", "This course provides an introduction to statistical modeling and machine learning. Topics include learning theory, supervised and unsupervised machine learning, statistical inference and prediction, and data mining. Applications of these techniques to a wide variety of data sets will be described.", "Torresani (fall), Liu (winter)", "16F, 17W", "QDS", "COSC 1 or ENG; MATH 2- 2 or MATH 24."],
				"COSC 87 - Rendering Algorithms": ["COSC 87 - Rendering Algorithms", "This course is designed for graduate and upper-level undergraduate students interested in obtaining an in-depth understanding of physically based rendering. Students will learn about the principles of how light interacts with a scene and how to translate the associated image formation problem into efficient rendering algorithms. Since this is an upper-level course, a focus is placed on state-of-the-art techniques and recent trends in research. By the end of the quarter, students will understand, and know how to      im­plement, many of the core algorithms used for rendering visual effects and 3D animated films.", "Jarosz", "17S", "TAS", "MATH 8 and COSC 77, or instructor's permission."],
				"COSC 51 - Computer Architecture": ["COSC 51 - Computer Architecture", "info", "instructors", "terms", "distribs", "prereqs"],
				"PSYC 11 - Laboratory in Psychological Science": ["PSYC 11 - Laboratory in Psychological Science", "This laboratory course will provide a general introduction to the experimental methods of psychological science. Lectures will provide an overview of experimental techniques in four content areas (behavioral neuroscience, sensation/perception, cognitive/cognitive neuroscience, and social/applied psychology). The focus will be on how psychological scientists pursue research questions using diverse techniques, such as functional brain imaging, reaction time, psychopharmacology, self-reports, and survey methods. Laboratory exercises will complement the lecture material. Ethical issues as they pertain to psychological research will also be addressed.", "Manning, Gobbini, Duchaine", "16X: 2A, 16F: 12, 17S: 12, Laboratory", "SLA", "PSYC 1 or PSYC 6 and PSYC 10. Cannot be taken concurrently with PSYC 10."],
				"PSYC 21 - Perception": ["PSYC 21 - Perception", "Our senses are our windows to the world, and the scientific study of the senses is one of the oldest sub-disciplines in experimental psychology. This course introduces students to the fundamental workings of our senses of vision, hearing, touch, taste and smell. The course includes careful consideration of experimental methodology as well as content.", "Hughes", "16F: 12", "SCI", "PSYC 1 or PSYC 6."],
				"PSYC 23 - Social Psychology": ["PSYC 23 - Social Psychology", "This course is an introduction to contemporary psychological theory and research on social behavior. Specific topics include self-presentation, nonverbal behavior, interpersonal relations, conformity, persuasion, aggression, altruism, and group dynamics. Within these contexts, emphasis is placed on the importance of both personality and situational factors as determinants of social behavior.", "Wheatley", "17W: 11", "SOC", "PSYC 1"],
				"PSYC 50.01 - Neuroscience of Mental Illness": ["PSYC 50.01 - Neuroscience of Mental Illness", "The goal of this course is to explore the neurological correlates of psychopathology. For each mental illness covered in the class, we will first review the characteristics and diagnostic criteria of the disorder and will then explore the neurological correlates in terms of etiology, manifestation, and treatment. We will examine evidence from a variety of sources, including neuroanatomical studies, neuroimaging experiments, and neurodevelopmental studies, with a focus on current research findings. Case histories and video footage will be used to illustrate the experience of psychopathology with the goal of elucidating the links between the brain and behavior.", "Funnell", "16F: 12", "SCI", "PSYC 6 and one of the following: PSYC 24, PSYC 26, PSYC 27, PSYC 45, PSYC 46, PSYC 50 (any), PSYC 65, BIOL 34"],
				"PSYC 60 - Principles of Human Brain Mapping with fMRI": ["PSYC 60 - Principles of Human Brain Mapping with fMRI", "This course is designed to introduce students to the theoretical and practical issues involved in conducting functional magnetic resonance imaging (fMRI) experiments of cognitive and behaviorally-related brain activity. Participants will gain an understanding of the physiological principles underlying the fMRI signal change, as well as the considerations for experimental design. The course will include firsthand exposure to the scanning environment and data collection procedures. Participants will be provided conceptual and hands-on experience with image processing and statistical analysis. At the completion of this course, it is expected that participants will be prepared to critique, design, and conduct fMRI studies; appreciate limitations and potentials of current fMRI methods and techniques; and better understand the broad range of expertise required in an fMRI research program. The course is designed to provide the participant with intensive, hands-on instruction. As a result, enrollment in the course will be limited to 15 students. Knowledge of MR physics, signal processing, or the UNIX/Linux operating system is not a prerequisite.", "Kelley", "16F, 17W: 2A", "TLA", "Permission through the department website."],
				"PSYC 80.03 - Spatial Cognition and Navigation: A Neurobiological Perspective": ["PSYC 80.03 - Spatial Cognition and Navigation: A Neurobiological Perspective", "Each year elephants in Chad, Africa migrate over hundreds of miles to different locations in order to obtain food and water resources.  They migrate over a featureless plane, where there is little in the way of distal landmarks, such as mountains, that they can use as reference points to guide them.  How do they do they perform this feat? Closer to home, perhaps you know someone who has a poor sense of direction – how can we assess directional ability and how does the brain compute the path required to accurately navigate to different familiar and novel destinations? What brain areas are involved in these calculations and how are these computations performed? These questions are addressed in this course on the neural basis of spatial navigation. Our focus will be on understanding the relationship between navigational abilities and the patterns of activity generated in the brain (hippocampal place cells, head direction cells, grid cells) as well as data from fMRI, virtual reality, and clinical studies in humans.", "Taube", "17W: 10A", "N/A", "Permission through the department website"],
				"PSYC 81.07 - Decoding Human Brain Activity": ["PSYC 81.07 - Decoding Human Brain Activity", "This seminar will cover state-of-the-art methods for decoding the information that is carried in patterns of human brain activity and the application of these methods for investigating the functional organization of the human brain and application to brain computer interfaces.  Human brain activity can be measured non-invasively with a range of methods, including functional magnetic resonance imaging (fMRI), magnetoencephalography (MEG), and electroencephalography (EEG).  Computational approaches for decoding human brain activity include multivariate pattern classification, representational similarity analysis, and forward encoding based on stimulus or cognitive models.  The course also will cover state-of-the-art computational models of stimulus and cognitive factors, including convolutional neural networks.  Some background in linear algebra and computer programming are recommended.", "Haxby", "17W: 10A", "N/A", "PSYC 27 and permission through the department website"],
				"PSYC 83.03 - The Self": ["PSYC 83.03 - The Self", "A unitary sense of self that exists across time and place is a central feture of human experience.  Understanding the nature of self-what it is and what it does-has challenged scholars for many centuries.  Although most people intuitively understand what is meant by the term self, definitions have tended toward the philosophical and metaphysical.  Efforts at creating more formal definitions have largely been unsuccessful as many features of self are empirically murky, difficult to identify and assess using objective methods.  Yet the phenomenological experience of self is highly familiar to everyone.  So, at issue is not whether the self exists, but how best to study it.  This course will survey contemporary approaches to understanding the self, with a strong emphasis on approaches from social psychology. We will consider self's development, its cognitive and affective components, motives related to it, and how it is regulated. We will consider its functional basis, examining both its adaptive and maladaptive consequences.  We will also examine its neurological basis, including case studies of peple with disorders of self. ", "Heatherton", "17W: 2A", "N/A", "PSYC 1, PSYC 23, and permission through the department website"],
				//"COSC 51 - Computer Architecture": ["COSC 51 - Computer Architecture", "info", "instructors", "terms", "distribs", "prereqs"],

				"COSC 35 - Data Stream Algorithms": ["COSC 35 Data Stream Algorithms", "This course studies algorithms that process massive amounts of data; so massive that they will not fit in a computer’s storage. The course will cover a wide variety of techniques for summarizing such large amounts of data into succinct “sketches” that nevertheless retain important and useful information. The course starts from the basics, assuming only a basic knowledge of algorithms, and builds up to advanced techniques from recent research. The necessary mathematical tools are developed within the course.", "Staff", "QDS", "Not offered every year", "COSC 31 or permission of the instructor."]
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


			coursetitle1.appendChild(title);
			courseinfo1.appendChild(information);
			courseterms1.appendChild(term);
			courseinstructor1.appendChild(prof);
			coursedistribs1.appendChild(distribs);
			courseprereqs1.appendChild(prereqs);
			info.style.display = 'block';
		});
		children[i].addEventListener("mouseout", function(){
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
			info.style.display = 'none';
		});
	}
		
	return courses;

}


function removeInfo() {
	console.log("moused out")
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
	info.style.display = 'none';
}