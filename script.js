/* 
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page */


var currentDay = $("#currentDay");
var timeblockTextArea = $(".description");
var officeHours = $(".hour");

var nowTimeHour = moment().hour();
var nowTimeMinutes= moment().minutes();
//console.log(officeHours);
//console.log(timeblockTextArea);
console.log(typeof(officeHours));


////GET AND DISPLAY THE CURRENT DATE
var toDay = moment().format("dddd, MMMM Do YYYY");
currentDay.text(toDay);

textAreaColour();

///// LOGIC FOR THE COLOR-CODE TIMEBLOCK AREA
function textAreaColour(){
   
   // console.log(nowTimeHour);
    //console.log(nowTimeMinutes);
    

   
}