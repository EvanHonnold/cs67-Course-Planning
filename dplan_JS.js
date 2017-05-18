var compInfoArray = [{
  "id": 5,
  "cityname": "Fall",
  "area": "FR"
}, {
  "id": 8,
  "cityname": "Winter",
  "area": "UK"
}, {
  "id": 12,
  "cityname": "Spring",
  "area": "GER"
}, {
  "id": 13,
  "cityname": "Summer",
  "area": "G"
}];

function showname() {
  var id = document.form1.id.value;
  var index = compInfoArray.contains(id);
  document.form1.cityname.value = compInfoArray[index]["cityname"];
  document.form1.area.value = compInfoArray[index]["area"];
}

window.onload = function() {
  showname();
}

Array.prototype.contains = function(needle) {
  for (var i in this) {
    for (var key in this[i]) {
      if (this[i][key] == needle) {
        return i;
      }
    }
  }
  return false;
}
