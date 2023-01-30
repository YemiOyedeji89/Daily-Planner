var currentDay = $("#currentDay");
var timeblockTextArea = $(".col-10");
var officeHours = $(".hour");
var nowTimeHrMin = moment().format('HH');
var  saveAgenda = $("#showSave");



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

var ninethHr = moment("17:00", "HH").format("HH");
var ninethHrdis = moment("17:00", "HH").format("HH:mm");
$("#nineth-hr").text(ninethHrdis);



////GET AND DISPLAY THE CURRENT DATE
var toDay = moment().format("dddd, MMMM Do YYYY");
currentDay.text(toDay);

///// LOGIC FOR THE TIMEBLOCK AREA FOR EACH WORK HOUR
console.log(nowTimeHrMin);

var firstHrRow = ( $("#textArea1"));
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


/////FUNCTION TO SET THE COLOR TIMEBLOCK BASE ON PAST PRESENT OR FUTURE TIME
function textAreaColour(textAreaRow, hrRow){
    
    if(nowTimeHrMin > hrRow){
        textAreaRow.addClass('past');

    }else if (nowTimeHrMin == hrRow){
        textAreaRow.addClass('present');

    }else if(nowTimeHrMin < hrRow){
        textAreaRow.addClass('future');
    };
}
//////SAVING TIMEBLOCK TEXT TO LOCAL STORAGE FUNCTION

function saveLocalStorage(textAreaRow){
    
    var myAgenda = textAreaRow.val();

    //// STORING 9AM AGENDA
    if (textAreaRow === firstHrRow){
    localStorage.setItem("Agenda9", JSON.stringify( myAgenda));
    }
    //// STORING 10AM AGENDA
    if(textAreaRow === secondHrRow){
    localStorage.setItem("Agenda10", JSON.stringify( myAgenda));
    }
     //// STORING 11AM AGENDA
    if(textAreaRow === thirdHrRow){
    localStorage.setItem("Agenda11", JSON.stringify( myAgenda));
    }
    //// STORING 12NOON AGENDA
    if(textAreaRow === fourthHrRow){
    localStorage.setItem("Agenda12", JSON.stringify( myAgenda));
    }
    //// STORING 1PM AGENDA
    if(textAreaRow === fifthHrRow){
    localStorage.setItem("Agenda13", JSON.stringify( myAgenda));
    }
    //// STORING 2PM AGENDA
    if(textAreaRow === sixthHrRow){
    localStorage.setItem("Agenda14", JSON.stringify( myAgenda));
    }
    //// STORING 3PM AGENDA
    if(textAreaRow === seventhHrRow){
    localStorage.setItem("Agenda15", JSON.stringify( myAgenda));
    }
    //// STORING 4PM AGENDA
    if(textAreaRow === eightHrRow){
    localStorage.setItem("Agenda16", JSON.stringify( myAgenda));
    }
    //// STORING 5PM AGENDA
    if(textAreaRow === ninethHrRow){
    localStorage.setItem("Agenda17", JSON.stringify( myAgenda));
    }
} 

//////PERSISTIN TIMEBLOCK TEXT 

///PERSISTING 9AM AGENDA
firstHrRow.append(JSON.parse(localStorage.getItem ("Agenda9")));

///PERSISTING 10AM AGENDA
secondHrRow. append(JSON.parse(localStorage.getItem ("Agenda10")));

////PERSISTING 11AM AGENDA
thirdHrRow.append(JSON.parse(localStorage.getItem ("Agenda11")));

///PERSISTING 12NOON AGENDA
fourthHrRow.append(JSON.parse(localStorage.getItem ("Agenda12")));

////PERSISTING 1PM AGENDA
fifthHrRow.append(JSON.parse(localStorage.getItem ("Agenda13")));

////PERSISTING 2PM AGENDA
sixthHrRow.append(JSON.parse(localStorage.getItem ("Agenda14")));

////PERSISTING 3PM AGENDA
seventhHrRow.append(JSON.parse(localStorage.getItem ("Agenda15")));

////PERSISTING 4PM AGENDA
eightHrRow.append(JSON.parse(localStorage.getItem ("Agenda16")));

////PERSISTING 5PM AGENDA
ninethHrRow.append(JSON.parse(localStorage.getItem ("Agenda17")));

setTimeout(function(){  
location.reload();  
}, (60*6000));  
    


 
 









    