function Season(name){
    var thisSeason = this;
    var name_winter = "winter";
    var name_spring = "spring";
    var name_summer = "summer";
    var name_fall = "fall";

    if (!(name == "winter" || name == "spring" 
        || name =="summer" || name == "fall")){
        throw "Invalid name entered to create a Season object";
    }

    this.name = name;
    this.toString = function(){
        return thisSeason.name;
    }
};

function Term(season, year){
    if (!(season instanceof Season))
        throw "Term must be given a season object";
    if (!(year instanceof Number))
        throw "Term must be given a number object to represent the year";
    if (year < 2000 || year > 2050)
        throw "" + year + " is not a valid year";

    this.toString = function(){
        return season + " " + year;
    }
}