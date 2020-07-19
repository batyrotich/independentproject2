// it hide alert
document.getElementById("alert1").style.display = "none";
document.getElementById("alert2").style.display = "none";

//declare arrays for akan names
var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

var femaleAkanNames = ['Akosua', 'Adwao', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

//calling functions
function getAkanName(){
var day = parseInt(document.getElementById("day").Value);
var month = parseInt(document.getElementById("month").Value);
var year = parseInt(document.getElementById("year").Value);
var female = document.getElementById("female");
var male = document.getElementById("male");

// validate day
if(day <= 1 || day >= 32){
    alert(
        "Incorrect day entry! Try again"
  );
}
// validate month
if(month <= 0 || month >= 13){
    alert(
        "Incorrect month entry! Try Again"
    );
}
// validate year
if( year <= 0 || year > 2020){
   alert(
       "Incorrect year entry! Try again"
   );
}
var day = new Date(year + "/" + month + "/" + day);

var dateOfBirth = day.getDay();
	if (female.checked == true) {
		document.getElementById("alert1").style.display = "block";
		document.getElementById("span1").innerHTML =
			"You were born on, " + weekDays[dateOfBirth];
		document.getElementById("span2").innerHTML =
			"your Akan Name is " + femaleAkanNames[dateOfBirth];
	} else if (male.checked == true) {
		document.getElementById("alert1").style.display = "block";
		document.getElementById("span1").innerHTML = 
		    "You were born on, " + weekDays[dateOfBirth];
		document.getElementById("span2").innerHTML = 
		    "your Akan Name is " + maleAkanNames[dateOfBirth];
	}
}
//refresh button function
function refreshPage() {
	window.location.reload();
}