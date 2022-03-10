$(document).ready(function(){
    $("#blanks form").submit(function(event){
        event.preventDefault();
    });
    var dateInput=$("input#date").val();
    var genderInput=$("input#gender").val();
    let d = new Date(dateInput);
    let day = d.getDay();
    let maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    let weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    if (genderInput==="male"){
            $(".bday").append(weekDays[day]);
            $(".gen").append(maleNames[day]);
        }
    else if (genderInput==="female"){
            $(".bday").append(weekDays[day]);
            $(".gen").append(femaleNames[day]);
        }
    else{
            alert("Please Enter a Valid Gender")
        }
});