

setInterval(DisplayCurrentTime, 1000);

//functions
function DisplayCurrentTime() 
{
    let Today = new Date();
    document.getElementById("currentTimeDisplay").innerHTML = "<u>Current time</u> = " + Today.getHours() + " : " + Today.getMinutes() + " : " + Today.getSeconds();
}

function Insert(id, text, date) 
{
    alert("Inserting: " + id + ", " + text + ", " + date);
    let obj = {
        id: id,
        text: text,
        date: date
    }
}

function Update(id, text, date) 
{
    alert("Updating: " + id + ", to: " + text + ", " + date);
    let obj = {
        id: id,
        text: text,
        date: date
    }
}

function Delete(id) 
{
    alert("Deleting: " + id);
    let obj = {
        id: id,
    }
}