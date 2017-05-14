function generateRequirementsView(element){


  var section_title = document.createElement("h3");
	var title_text = document.createTextNode("Requirements");
	section_title.appendChild(title_text);
	element.appendChild(section_title);

  var csreqDisplay = getCSRequirementsDisplay();
  element.appendChild(csreqDisplay);

  var preqDisplay = getPRequirementsDisplay();
  element.appendChild(preqDisplay);

  var ereqDisplay = getERequirementsDisplay();
  element.appendChild(ereqDisplay);

  	console.log("requirements view loaded");
  }


function getCSRequirementsDisplay(){
	var Requirementscontainer = document.createElement("div");
	// Requirementscontainer.classList.add('term-listing-container');
	// var nameDisplay = document.createElement("span");
	// var reqNode = document.createTextNode("Computer Science Major");
	// nameDisplay.appendChild(reqNode);
	// nameDisplay.classList.add("req-name");
	// Requirementscontainer.appendChild(nameDisplay);

  var reqsdisplay= document.createElement("div");
  reqsdisplay.classList.add('req-listing-container');
  Requirementscontainer.appendChild(reqsdisplay);

   var req1 = document.createElement("div");
   req1.classList.add("course-box");
   var req2 = document.createElement("div");
   req2.classList.add("course-box");
   var req3 = document.createElement("div");
   req3.classList.add("course-box");
   var req4 = document.createElement("div");
   req4.classList.add("course-box");
   var req5 = document.createElement("div");
   req5.classList.add("course-box");
   var req6 = document.createElement("div");
   req6.classList.add("course-box");

    var text1 = document.createTextNode("Prequisites COSC 1 and COSC 10");
    req1.appendChild(text1);
    var text2 = document.createTextNode("Two theory or algorithms courses (30-49)");
    req2.appendChild(text2);
    var text3 = document.createTextNode("Two systems or hardware courses (50-69)");
    req3.appendChild(text3);
    var text4 = document.createTextNode("Two applied computer science courses (70-89)");
    req4.appendChild(text4);
    var text5 = document.createTextNode("Three elective courses (drawn from 30-89)");
    req5.appendChild(text5);
    var text6 = document.createTextNode("Three elective courses (drawn from 30-89)");
    req6.appendChild(text6);

    reqsdisplay.appendChild(req1);
    reqsdisplay.appendChild(req2);
    reqsdisplay.appendChild(req3);
    reqsdisplay.appendChild(req4);
    reqsdisplay.appendChild(req5);
    reqsdisplay.appendChild(req6);


  // var yesnodisplay = document.createElement("div");
  // yesnodisplay.classList.add('term-listing-courses-container');
  // reqcontainer.appendChild(yesnodisplay);
  //
  //  var req1 = document.createElement("div");
  //  req1.classList.add("course-box");
  //
  //  var text1 = document.createTextNode("Yes");
  //  req1.appendChild(text1);
  //
  //  yesnodisplay.appendChild(req1);
  //

	return Requirementscontainer;
}

function getPRequirementsDisplay(){
  	var PRequirementscontainer = document.createElement("div");

    var preqsdisplay= document.createElement("div");
    preqsdisplay.classList.add('req-listing-container');
    PRequirementscontainer.appendChild(preqsdisplay);

    var preq1 = document.createElement("div");
    preq1.classList.add("course-box");
    var preq2 = document.createElement("div");
    preq2.classList.add("course-box");
    var preq3 = document.createElement("div");
    preq3.classList.add("course-box");
    var preq4 = document.createElement("div");
    preq4.classList.add("course-box");
    var preq5 = document.createElement("div");
    preq5.classList.add("course-box");
    var preq6 = document.createElement("div");
    preq6.classList.add("course-box");
    var preq7 = document.createElement("div");
    preq7.classList.add("course-box");

    var ptext1 = document.createTextNode("Prequisites Psych 1 and 10");
    preq1.appendChild(ptext1);
    var ptext2 = document.createTextNode("Psych 11");
    preq2.appendChild(ptext2);
    var ptext3 = document.createTextNode("One course from list of  PSYC 23, PSYC 24, PSYC 25");
    preq3.appendChild(ptext3);
    var ptext4 = document.createTextNode("one course from list of PSYC 21, PSYC 22, PSYC 27, PSYC 28");
    preq4.appendChild(ptext4);
    var ptext5 = document.createTextNode("At least one elective course numbered 50 or higher.");
    preq5.appendChild(ptext5);
    var ptext6 = document.createTextNode("A course number 60 or higher, but not numbered 88 or 89, which will serve as your Culminating Experience.");
    preq6.appendChild(ptext6);
    var ptext7 = document.createTextNode("Three additional elective courses numbered between PSYC 21 through PSYC 89");
    preq7.appendChild(ptext7);


    preqsdisplay.appendChild(preq1);
    preqsdisplay.appendChild(preq2);
    preqsdisplay.appendChild(preq3);
    preqsdisplay.appendChild(preq4);
    preqsdisplay.appendChild(preq5);
    preqsdisplay.appendChild(preq6);
    preqsdisplay.appendChild(preq7);

    return PRequirementscontainer;
}


 function getERequirementsDisplay(){
     	var eRequirementscontainer = document.createElement("div");

      var ereqsdisplay= document.createElement("div");
      ereqsdisplay.classList.add('req-listing-container');
      eRequirementscontainer.appendChild(ereqsdisplay);

      var ereq1 = document.createElement("div");
      ereq1.classList.add("course-box");
      var ereq2 = document.createElement("div");
      ereq2.classList.add("course-box");
      var ereq3 = document.createElement("div");
      ereq3.classList.add("course-box");
      var ereq4 = document.createElement("div");
      ereq4.classList.add("course-box");
      var ereq5 = document.createElement("div");
      ereq5.classList.add("course-box");
      var ereq6 = document.createElement("div");
      ereq6.classList.add("course-box");
      var ereq7 = document.createElement("div");
      ereq7.classList.add("course-box");

      var etext1 = document.createTextNode("Prequisites Econ 1, 3 and 10");
      ereq1.appendChild(etext1);
      var etext2 = document.createTextNode(" Econ 20, 21 and 22");
      ereq2.appendChild(etext2);
      var etext3 = document.createTextNode(" Econ 20, 21 and 22");
      ereq3.appendChild(etext3);

      ereqsdisplay.appendChild(ereq1);
      ereqsdisplay.appendChild(ereq2);
      ereqsdisplay.appendChild(ereq3);

      return eRequirementscontainer;
 }

