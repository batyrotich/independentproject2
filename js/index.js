var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

var femaleAkanNames = ['Akosua', 'Adwao', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

function getAkanName() {

var day = parseInt(document.getElementById("day").Value);
var month =  parseInt(document.getElementById("month").Value);
var year =  parseInt(document.getElementById("year").Value);

if(day < 1 || day > 31){
    alert("Invalid day")
}

}