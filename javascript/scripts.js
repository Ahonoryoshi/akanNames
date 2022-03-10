$(document).ready(function(){
    $("#blanks form").submit(function(event){
        event.preventDefault();
        var dateInput=$("input#date").val();
        var genderInput=$("input#gender").val();
        var weekDay=dateInput;
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
            $(".bday").text(weekDays[day]);
            $(".gen").text(femaleNames[day]);
        }
        else{
            alert("Please Enter a Valid Gender")
        }
        $("#yourInput").show();

    });
});