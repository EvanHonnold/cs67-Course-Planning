function Season(name){
    var name_winter = "winter";
    var name_spring = "spring";
    var name_summer = "summer";
    var name_fall = "fall";

    console.log("got here");

    if (!(name == "winter" || name == "spring" || name =="summer" || name == "fall")){
        console.log("Invalid name entered to create a Season object");
        throw "Invalid name entered to create a Season object";
    }
};