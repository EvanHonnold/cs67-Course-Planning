function loadCourses(onComplete){
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
                        var newCourse = new Course(dept, currClass.number, currClass.title, currClass.description, currClass.distrib, currClass.instructor);
                        courseList.push(newCourse);
                    }
                }
            }
            onComplete();
        }
    }
    req.open("get", filePath, true);
    req.send(null);
}

var courseList = new Array();

function Course(department, number, name, information, distribs, instructor){
    this.department = department;
    this.number = parseFloat(number);
    this.name = name;
    this.information = information;
    this.distribs = distribs;
    this.instructor = instructor;

    this.toString = function(){
        return department + " " + number + ": " + name;
    }
}