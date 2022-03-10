$(document).ready(function(){
    $("#blanks form").submit(function(event){
        event.preventDefault();
    });
    var dateInput=$("input#date").val();
    var genderInput=$("input#gender").val();
    let d = new Date(dateInput);
    let day = d.getDay();
    let maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

});