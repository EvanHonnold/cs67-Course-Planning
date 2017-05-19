function loadCourses(){
    console.log("loadCourses called");

    var filePath = "data/courses-test.txt";
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status === 200){
                var allText = req.responseText;
                processCourseString(allText);
            }
        }
    }
    req.open("get", filePath, true);
    req.send(null);
}

/*
function processCourseString(string){

    var deptListings = new Array();
    var lines = string.match(/[^\r\n]+/g);
    var index = 0;
    while (index < lines.length){
        var firstLine = lines[index];
        var deptName = firstLine.split(":")[1];
        var deptAbbr = firstLine.split(":")[2];
        console.log("department name: " + deptName);
        while (index < lines.length - 1){
            index++;
            // does the line at Index contain the department indicator?
            if (lines[index].includes("DEPT-LISTING")){
                index--;
                break;
            }
            else {
                console.log("course record: " + lines[index]);
            }
        }
        index++;
    }
    
} */

function Course(department, number, name, information, distribList){
    this.department = department;
    this.number = parseFloat(number);
    this.name = name;
    this.information = information;
    this.distribList = distribList;

    // true if the number is an int: n % 1 === 0

    this.toString = function(){
        return department + " " + number + ": " + name;
    }
}

function DepartmentListing(deptName, courses){
    this.deptName = deptName;
    this.courses = courses;
}