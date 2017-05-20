function toggleDeptDropdown(){
	var menuContents = document.getElementById("department-dropdown-contents");
	if (menuContents.style.display == "")
		menuContents.style.display = "block";
	else
		menuContents.style.display = "";
}

function generateCourseBrowser(element){

	loadCourses(function(){
		// populate the course listing with CS courses to start:
		var deptName = element.getElementsByClassName("department-dropdown-holder")[0].children[1].textContent;	
		showDepartment(deptName);
	});

	// assign callbacks to dropdown elements:
	var container = document.getElementById("department-dropdown-contents");
	for (var i = 0; i < container.children.length; i++){
		container.children[i].onclick = makeDropdownClick(container.children[i]);
	}
	function makeDropdownClick(item){
		return function(){
			showDepartment(item.textContent);
			toggleDeptDropdown();
			var dropdownHeader = element.getElementsByClassName("department-dropdown-holder")[0];
			dropdownHeader.children[1].textContent = item.textContent;
		}
	}

	var cselement = document.getElementById("cse");
	var psychelement = document.getElementById("psyche");
	var econelement = document.getElementById("econe")

	var info = document.createElement("div");
	info.id = "popup";
	info.classList.add("course-info-container");
	element.appendChild(info);
	info.style.display = 'none';
	var detail = document.createElement("div");
	detail.classList.add("course-detail-header");
	var text = document.createTextNode("Course Detail");
	detail.appendChild(text);
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
	info.appendChild(detail);
	info.appendChild(coursetitle);
	info.appendChild(courseinfo);
	info.appendChild(courseinstructor);
	info.appendChild(coursedistribs);
	info.appendChild(courseterm);
	info.appendChild(courseprereqs);


	function showDepartment(department){

		// remove existing items from the container:
		var container = document.getElementById("browser-class-listing-container");
		while(container.firstChild)
			container.removeChild(container.firstChild);

		// add in the new items:
		var classes = getClasses(department);
		for (var i = 0; i < classes.length; i++) {

			var courseSlot = makeElemWithClass("div", "course-slot");
			var courseBox = makeElemWithClass("div", "course-box");
			courseSlot.appendChild(courseBox);
			container.appendChild(courseSlot);
			courseBox.textContent = classes[i].toString();
			courseBox.course = classes[i];
			courseSlot.onmouseup = makeMouseup(courseSlot);
			courseSlot.onmousedown = makeMousedown(courseSlot);
			courseBox.addEventListener("mouseover", makeMouseover(courseBox));

			function makeMouseup(currSlot){
				return function(event){
					if (draggedElement){
						currSlot.appendChild(draggedElement.children[0]);
						draggedElement.remove();
						draggedElement = null;
					}
				}
			}
			function makeMousedown(currSlot){
				return function(event){
					// check if there's a class in the slot:
					var courseBoxes = currSlot.getElementsByClassName("course-box");
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

						currSlot.classList.add("dragged-course-slot");

						// allow the floater to move on mouse position change:
						draggedElement = boxFloater;
						document.addEventListener("mousemove", mouseMovedWhileDragging);
						document.addEventListener("mouseup", mouseReleasedWhileDragging);
					}
				}
			}
			function makeMouseover(currSlot){ /* fills in the Course Detail window */
				return function(){
					var course = currSlot.course;

					var detailsWindow = document.getElementById("popup");
					detailsWindow.style.display = "block";

					var courseName = document.getElementById("coursetitle");
					var description = document.getElementById("courseinfo");
					var instructor = document.getElementById("courseinstructor");
					var distribs = document.getElementById("coursedistribs");
					
					courseName.textContent = course.department + " " + course.number + ": " + course.name;
					description.textContent = "Description: " + course.information;
					instructor.textContent = "Instructor: " + course.instructor;
					distribs.textContent = "Distributives: " + course.distribs;
				}
			}
		}
	}

	/*  Returns a list of Course objects that represent the classes
		in the given department 
	*/
	function getClasses(department){
		var deptName;
		if (department == "Computer Science" || department == "COSC")
			deptName = "COSC";
		else if (department == "Psychological and Brain Sciences" || department == "PSYC")
			deptName = "PSYC"
		else if (department == "Economics" || department == "ECON")
			deptName = "ECON";
		
		var mClasses = new Array();
		for (var i = 0; i < courseList.length; i++){
			if (courseList[i].department == deptName)
				mClasses.push(courseList[i]);
		}
		return mClasses;
	}
}
