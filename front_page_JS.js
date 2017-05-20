/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//store the value of the dropdown selection
function storeValue(obj){
    if(obj.selectedIndex == 0){return;}
    var major = obj.value;
    console.log('saves');
    // alert('Selected Is:  '+ major);
}
  window.onload = function(){
  document.getElementsByName('Majors')[0].onchange=function(){storeValue(this);}
  document.getElementsByName('Minors')[0].onchange=function(){storeValue(this);}
  }

function saveData(){
  localStorage["Majors"] = document.getElementsByName("Majors").value;
  localStorage["Minors"] = document.getElementsByName("Minors").value;
}
