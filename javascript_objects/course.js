function loadCourses(){
    console.log("loadCourses called");
    var filePath = "data/courses-test.txt";
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status === 200){
                var allText = req.responseText;
                var fullList = JSON.parse(allText);
                for (var i = 0; i < fullList.length; i++){
                    var cObj = fullList[i];
                    var dept = cObj.departmentCode;
                    for (var j = 0; j < cObj.classes.length; j++){
                        var currClass = cObj.classes[j];
                        var newCourse = new Course(dept, currClass.number, currClass.title, currClass.description, currClass.distrib);
                        courseList.push(newCourse);
                    }
                }
            }
        }
    }
    req.open("get", filePath, true);
    req.send(null);
}

var courseList = new Array();

    /*
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

    */

/*
    loadObj("data/courses-cosc.txt", saveObj);
    loadObj("data/courses-psyc.txt", saveObj);
    loadObj("data/courses-econ.txt", saveObj);


    function saveObj(str){
        var obj = JSON.parse(str);
        var nObj = {};
        if (obj.department == "COSC"){
            nObj.department = "Computer Science";
            nObj.departmentCode = "COSC";
        }
        else if (obj.department == "ECON"){
            nObj.department = "Economics";
            nObj.departmentCode = "ECON";
        }
        else {
            nObj.department = "Psychological and Brain Sciences";
            nObj.departmentCode = "PSYC";
        }
        nObj.classes = obj.classes;

        bigList.push(nObj);
        if (bigList.length == 3){
            console.log("got there");
            download("mData", JSON.stringify(bigList));
        }
    }
    */

/*
var bigList = new Array();

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

*/

// temporary - 2nd argument is a function with one argument (the result)
/*
function loadObj(path, fn){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status === 200){
                fn(req.responseText);
            }
        }
    }
    req.open("get", path, true);
    req.send(null);
}
*/

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

function Course(department, number, name, information, distribs){
    this.department = department;
    this.number = parseFloat(number);
    this.name = name;
    this.information = information;
    this.distribs = distribs;

    this.toString = function(){
        return department + " " + number + ": " + name;
    }
}

function DepartmentListing(deptName, deptCode, courses){
    this.deptName = deptName;
    this.deptCode = deptCode;
    this.courses = courses;
}