/* 


* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page */


var currentDay = $("#currentDay");
var timeblockTextArea = $(".col-10");
var officeHours = $(".hour");
var nowTimeHrMin = moment().format('HH');
var saveButton = $(".btnBtn");


/////OFFICE HOUR FORMATED TO MOMENT TIME
var firstHr = moment("09", "HH").format("HH");
var firstHrdis = moment("09", "HH").format("HH:mm");
$("#first-hr").text(firstHrdis);

var secondHr = moment("10:00", "HH").format("HH");
var secondHrdis = moment("10:00", "HH").format("HH:mm");
$("#second-hr").text(secondHrdis);

var thirdHr = moment("11:00", "HH").format("HH");
var thirdHrdis = moment("11:00", "HH").format("HH:mm");
$("#third-hr").text(thirdHrdis);

var fourthHr = moment("12:00", "HH").format("HH");
var fourthHrdis = moment("12:00", "HH").format("HH:mm");
$("#fourth-hr").text(fourthHrdis);

var fifthHr = moment("13:00", "HH").format("HH");
var fifthHrdis = moment("13:00", "HH").format("HH:mm");
$("#fifth-hr").text(fifthHrdis);

var sixthHr = moment("14:00", "HH").format("HH");
var sixthHrdis = moment("14:00", "HH").format("HH:mm");
$("#sixth-hr").text(sixthHrdis);

var seventhHr = moment("15:00", "HH").format("HH");
var seventhHrdis = moment("15:00", "HH").format("HH:mm");
$("#seventh-hr").text(seventhHrdis);

var eightHr = moment("16:00", "HH").format("HH");
var eightHrdis = moment("16:00", "HH").format("HH:mm");
$("#eight-hr").text(eightHrdis);

var ninethHr = moment("18:00", "HH").format("HH");
var ninethHrdis = moment("18:00", "HH").format("HH:mm");
$("#nineth-hr").text(ninethHrdis);



////GET AND DISPLAY THE CURRENT DATE
var toDay = moment().format("dddd, MMMM Do YYYY");
currentDay.text(toDay);

///// LOGIC FOR THE COLOR-CODE TIMEBLOCK AREA FOR EACH WORK HOUR
console.log(nowTimeHrMin);

var firstHrRow = ( $("#textArea1"));
//saveButton.onclick(saveLocalStorage({firstHrRow} ));
firstHrRow.append(textAreaColour(firstHrRow, firstHr ));

var secondHrRow = ( $("#textArea2"));
secondHrRow.append(textAreaColour(secondHrRow, secondHr ));

var thirdHrRow = ( $("#textArea3"));
thirdHrRow.append(textAreaColour(thirdHrRow, thirdHr ));

var fourthHrRow = ( $("#textArea4"));
fourthHrRow.append(textAreaColour(fourthHrRow, fourthHr ));

var fifthHrRow = ( $("#textArea5"));
fifthHrRow.append(textAreaColour(fifthHrRow, fifthHr ));

var sixthHrRow = ( $("#textArea6"));
sixthHrRow.append(textAreaColour(sixthHrRow, sixthHr ));

var seventhHrRow = ( $("#textArea7"));
seventhHrRow.append(textAreaColour(seventhHrRow, seventhHr ));

var eightHrRow = ( $("#textArea8"));
eightHrRow.append(textAreaColour(eightHrRow, eightHr ));

var ninethHrRow = ( $("#textArea9"));
ninethHrRow.append(textAreaColour(ninethHrRow, ninethHr ));


/////FUNCTION TO SET THE COLOR TEXT AREA BASE ON PAST PRESENT OR FUTURE TIME
function textAreaColour(textAreaRow, hrRow){
    
    if(nowTimeHrMin > hrRow){
        textAreaRow.addClass('past');

    }else if (nowTimeHrMin == hrRow){
        textAreaRow.addClass('present');

    }else if(nowTimeHrMin < hrRow){
        textAreaRow.addClass('future');
    };
}





console.log(saveButton);


saveLocalStorage(firstHrRow);

function saveLocalStorage(textAreaRow){
    //event.preventDefault();
    var myAgenda = textAreaRow.text();
    
    localStorage.setItem("Agenda", myAgenda );
    localStorage.getItem("Event");
}