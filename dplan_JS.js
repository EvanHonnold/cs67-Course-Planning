function updateText(type) {
 var id = type+'Text';
 document.getElementById(id).value = document.getElementById(type).value;
}

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

//store the value of the dropdown selection
function storeValue(obj){
    if(obj.selectedIndex == 0){return;}
    var term = obj.value;
    console.log('ugh');
    alert('Selected Is:  '+ term);
}
  window.onload = function(){
  document.getElementById('term1')[0].onchange=function(){storeValue(this);}
  document.getElementById('term2')[0].onchange=function(){storeValue(this);}
  document.getElementById('term3')[0].onchange=function(){storeValue(this);}
  document.getElementById('term4')[0].onchange=function(){storeValue(this);}
  document.getElementById('term5')[0].onchange=function(){storeValue(this);}
  document.getElementById('term6')[0].onchange=function(){storeValue(this);}
  document.getElementById('term7')[0].onchange=function(){storeValue(this);}
  document.getElementById('term8')[0].onchange=function(){storeValue(this);}
  document.getElementById('term9')[0].onchange=function(){storeValue(this);}
  document.getElementById('term10')[0].onchange=function(){storeValue(this);}
  document.getElementById('term11')[0].onchange=function(){storeValue(this);}
  document.getElementById('term12')[0].onchange=function(){storeValue(this);}
  }

  // function saveData(){
  //   localStorage["term1"] = document.getElementsByName("term1").value;
  //   localStorage["term2"] = document.getElementsByName("term2").value;
  //   localStorage["term3"] = document.getElementsByName("term3").value;
  //   localStorage["term4"] = document.getElementsByName("term4").value;
  //   localStorage["term5"] = document.getElementsByName("term5").value;
  //   localStorage["term6"] = document.getElementsByName("term6").value;
  //   localStorage["term7"] = document.getElementsByName("term7").value;
  //   localStorage["term8"] = document.getElementsByName("term8").value;
  //   localStorage["term9"] = document.getElementsByName("term9").value;
  //   localStorage["term10"] = document.getElementsByName("term10").value;
  //   localStorage["term11"] = document.getElementsByName("term11").value;
  //   localStorage["term12"] = document.getElementsByName("term12").value;
  //   localStorage["term13"] = document.getElementsByName("term13").value;
  //   localStorage["term14"] = document.getElementsByName("term14").value;
  // }
  //
	// window.onload = function(){
	// 	subject = parseInt(localStorage["subject"]);
	// 	var trials = parseInt(localStorage["trials"]);
	// 	var amplitudes = JSON.parse("[" + localStorage["amplitudes"] + "]");
	// 	var widths = JSON.parse("[" + localStorage["widths"] + "]");
	// 	var indices = JSON.parse("[" + localStorage["indices"] + "]");
  //
	// 	conditionList = getConditionList(amplitudes, widths, trials);

		/*console.log("subj: " + subject);
		console.log("trials: " + trials);
		console.log("amps: " + amplitudes);
		console.log("widths: " + widths);
		console.log("indices: " + indices);
		printConditionList(conditionList);*/

// function GetTermsForTesting(){
// 	var terms = new Array();
// 	terms.push(new Term(new Season("winter"), new Number(2016), true));
// 	terms.push(new Term(new Season("spring"), new Number(2016), true));
// 	terms.push(new Term(new Season("summer"), new Number(2016), false));
// 	terms.push(new Term(new Season("fall"), new Number(2016), true));
// 	terms.push(new Term(new Season("winter"), new Number(2017), false));
// 	return terms;
// }
