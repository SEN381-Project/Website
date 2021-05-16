

setInterval(DisplayCurrentTime, 1000);

//functions
function DisplayCurrentTime() 
{
    let Today = new Date();
    document.getElementById("currentTimeDisplay").innerHTML = "<u>Current time</u> = " + Today.getHours() + " : " + Today.getMinutes() + " : " + Today.getSeconds();
}