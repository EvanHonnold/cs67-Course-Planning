function generateRequirementsView(element){

  var csreqDisplay = getCSRequirementsDisplay();
  element.appendChild(csreqDisplay);

  // var preqDisplay = getPRequirementsDisplay();
  // element.appendChild(preqDisplay);

  // var ereqDisplay = getERequirementsDisplay();
  // element.appendChild(ereqDisplay);
  //
  // var cselement = document.getElementById("cse");
  // cselement.onclick = csreq;
  //
  // var psychelement = document.getElementById("psyche");
  // psychelement.onclick = psychreq;
  //
  // var econelement = document.getElementById("econe");
  // econelement.onclick = econreq;


  console.log("requirements view loaded");
  }

  // function csreq(element) {
// document.getElementById("department-name").textContent="Computer Science";
// var csreqDisplay = getCSRequirementsDisplay("Computer Science");
  //   // document.getElementById("courses").remove();
// // assignCallbacks(element);
// }
  //
  // function psychreq(element) {
// document.getElementById("department-name").textContent="Psychological and Brain Sciences";
// // document.getElementById("courses").remove();
// var psychreqDisplay = getPRequirementsDisplay("Psychological and Brain Sciences");
// // assignCallbacks(element);
// }
  //
  // function econreq(element) {
  //   document.getElementById("department-name").textContent="Economics";
  //   // document.getElementById("courses").remove();
  //
  //   var econreqDisplay = getERequirementsDisplay("Economics");
  //   assignCallbacks(element);
  // }


function getCSRequirementsDisplay(){
var Requirementscontainer = document.getElementsByClassName("main-out-container")[0];


  var reqsdisplay= document.getElementsByClassName("first")[0];

  Requirementscontainer.appendChild(reqsdisplay);

  var req1= document.getElementsByClassName("first-1")[0];
  req1.textContent="Major";

  var distributives= document.getElementsByClassName("first-2")[0];
  distributives.textContent="Distributives and World Culture Requirement";

   var req1= document.getElementsByClassName("first-a")[0];
   req1.textContent="Prerequisites COSC 1 and COSC 10";

   var req2= document.getElementsByClassName("first-b")[0];
   req2.textContent="Two theory or algorithms courses (30-49)";

   var req3= document.getElementsByClassName("first-c")[0];
   req3.textContent="Two systems or hardware courses (50-69)";

   var req4= document.getElementsByClassName("first-d")[0];
   req4.textContent="Two applied computer science courses (70-89)";

   var req5= document.getElementsByClassName("first-e")[0];
   req5.textContent="Three elective courses (drawn from 30-89)";


//fufilled or not?
   var reqsfulfilleddisplay= document.getElementsByClassName("second")[0];
   Requirementscontainer.appendChild(reqsfulfilleddisplay);

   var fulreq1= document.getElementsByClassName("second-1")[0];


   var fulreq1= document.getElementsByClassName("second-a")[0];
   fulreq1.textContent="0/2";

   var fulreq2= document.getElementsByClassName("second-b")[0];
   fulreq2.textContent="0/2";

   var fulreq3= document.getElementsByClassName("second-c")[0];
   fulreq3.textContent="0/2";

   var fulreq4= document.getElementsByClassName("second-d")[0];
   fulreq4.textContent="0/2";

   var fulreq5= document.getElementsByClassName("second-e")[0];
   fulreq5.textContent="0/3";
updateDistribs("tla");
return Requirementscontainer;
}


function getPRequirementsDisplay(){

  var PRRequirementscontainer = document.getElementsByClassName("main-out-container")[0];


  var preqsdisplay= document.getElementsByClassName("first")[0];

  PRRequirementscontainer.appendChild(preqsdisplay);

  var preq1= document.getElementsByClassName("first-a")[0];
  preq1.textContent="Prerequisites Psych 1 and 10";

  var preq2= document.getElementsByClassName("first-b")[0];
  preq2.textContent="Psych 11";

  var preq3= document.getElementsByClassName("first-c")[0];
  preq3.textContent="One course from list of  PSYC 23, PSYC 24, PSYC 25";

  var preq4= document.getElementsByClassName("first-d")[0];
  preq4.textContent="One course from list of PSYC 21, PSYC 22, PSYC 27, PSYC 28";

  var preq5= document.getElementsByClassName("first-e")[0];
  preq5.textContent="At least one elective course numbered 50 or higher.";
  //
  // var preq6= document.getElementsByClassName("first-f")[0];
  // preq6.textContent="A course number 60 or higher, but not numbered 88 or 89, which will serve as your Culminating Experience.";
  //
  // var preq7= document.getElementsByClassName("first-g")[0];
  // preq7.textContent="Three additional elective courses numbered between PSYC 21 through PSYC 89";


  var prereqsfulfilleddisplay= document.getElementsByClassName("second")[0];
  PRRequirementscontainer.appendChild(prereqsfulfilleddisplay);

  var pfulreq1= document.getElementsByClassName("second-a")[0];
  pfulreq1.textContent="0/2";

  var pfulreq2= document.getElementsByClassName("second-b")[0];
  pfulreq2.textContent="0/1";

  var pfulreq3= document.getElementsByClassName("second-c")[0];
  pfulreq3.textContent="0/1";

  var pfulreq4= document.getElementsByClassName("second-d")[0];
  pfulreq4.textContent="0/1";

  var pfulreq5= document.getElementsByClassName("second-e")[0];
  pfulreq5.textContent="0/1";
  //
  // var pfulreq6= document.getElementsByClassName("second-f")[0];
  // pfulreq6.textContent="0/1";
  //
  // var pfulreq7= document.getElementsByClassName("second-g")[0];
  // pfulreq7.textContent="0/3";


    return PRequirementscontainer;
}


 function getERequirementsDisplay(){

   var ERequirementscontainer = document.getElementsByClassName("main-out-container")[0];

   var ereqsdisplay= document.getElementsByClassName("first")[0];

   ERequirementscontainer.appendChild(ereqsdisplay);

       var ereq1= document.getElementsByClassName("first-a")[0];
       ereq1.textContent="Prerequisites: Econ 1,10 and Math 3";

       var ereq2= document.getElementsByClassName("first-b")[0];
       ereq2.textContent=" Econ 20, 21 and 22";

       var ereq3= document.getElementsByClassName("first-c")[0];
       ereq3.textContent=" Econ 20, 21 and 22";

       var ereq4= document.getElementsByClassName("first-d")[0];
       ereq4.textContent=" Econ 20, 21 and 22";


       var ereqsfulfilleddisplay= document.getElementsByClassName("second")[0];
       ERequirementscontainer.appendChild(ereqsfulfilleddisplay);

       var ereq1= document.getElementsByClassName("second-a")[0];
       ereq1.textContent="0/3";

       var ereq2= document.getElementsByClassName("second-b")[0];
       ereq2.textContent="0/3";

       var ereq3= document.getElementsByClassName("second-c")[0];
       ereq3.textContent="0/3";


      return ERequirementscontainer;
 }
 
function updateReqs(course){
  var number = course.name;
  var reqs = ["second-a", "second-b", "second-c", "second-d", "second-e"];
  reqDict = new Object();
  reqDict = {"COSC 1 - Intro to Programming and Computation":["second-a"],
              "COSC 10 - Problem Solving via Object-Oriented Programming":["second-a"],
            "COSC 30 - Discrete Mathematics":["second-b", "second-e"],
            "COSC 31 - Algorithms":["second-b", "second-e"],
            "COSC 50 - Software Development and Implementation":["second-c", "second-e"],
            "COSC 51 - Computer Architecture": ["second-c", "second-e"],
            "COSC 39 - Theory of Computation":["second-b", "second-e"],
            "COSC 67 - Introduction to Human-Computer Interaction":["second-c", "second-e"],
            "COSC 73 - Computational Linguistics": ["second-d", "second-e"],
            "COSC 74 - Machine Learning and Statistical Data Analysis": ["second-d", "second-e"],
            "COSC 87 - Rendering Algorithms":["second-d", "second-e"],
            "COSC 51 - Computer Architecture":["second-c", "second-e"],
            "COSC 35 - Data Stream Algorithms":["second-b", "second-e"]
  };

  var length = reqs.length;
  for (var j = 0; j < length; j++ ) {
    var req = reqs[j];
    var courselist = reqDict[course.name];
    var arrayLength = courselist.length;
    console.log(course.name);
    for (var i = 0; i < arrayLength; i++) {
      if (coursename == courselist[i]) {
        var num = document.getElementsByClassName(req)[0].textContent.charAt(0).parseInt();
        var newnum = num + 1;
        if ( newnum != document.getElementsByClassName(req)[0].textContent.charAt(2).parseInt()) {
          var csreq1 = document.getElementsByClassName(req)[0].textContent = "$newnum/2";
          if ( newnum == document.getElementsByClassName(req)[0].textContent.charAt(2).parseInt()) {
            var element = document.getElementByClassName(req)[0];
            // change color
            element.classList.add(req+"1");
            element.classList.remove(req);
          }
        } else {
          continue;
        }
      }
    }
  }

}


// update distribs - loops over all distribs a course satisfies (must be lowercase abbreviation as seen in main-screen.html (id's for distribs)
//and changes color to green
function updateDistribs(distriblist){
  var arrayLength = distriblist.length;
  for (var i = 0; i < arrayLength; i++) {
    var distrib = distriblist[i];
    var element = document.getElementById(distrib);
    // change color
    element.classList.add('distrib-box2');
    element.classList.remove('distrib-box1');
  }
}