function loadCourses(){
    console.log("loadCourses called");

    var filePath = "data/courses.txt";
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status === 200){
                var allText = req.responseText;
                console.log(allText);
            }
        }
    }
    req.open("get", filePath, true);
    req.send(null);
}

function Course(department, number, name, information, distribList){

}