

setInterval(DisplayCurrentTime, 1000);

//functions
function DisplayCurrentTime() 
{
    let Today = new Date();
    document.getElementById("currentTimeDisplay").innerHTML = "<u>Current time</u> = " + Today.getHours() + " : " + Today.getMinutes() + " : " + Today.getSeconds();
}

async function Insert(id, text, date) 
{
    alert("Inserting: " + id + ", " + text + ", " + date);
    let obj = {
        ReminderText: {
            type: text
        },
        ReminderDate: {
            type: date
        }
    }
    const options = {         
        method: 'POST',         
        headers: {'Content-Type': 'application/json'},         
        body: JSON.stringify(obj)    
    }      
    const response = await fetch('http://localhost:3000/db/reminder', options);
    const responseData = await response.json();
    console.log(responseData);
}

async function Update(id, text, date) 
{
    alert("Updating: " + id + ", to: " + text + ", " + date);
    let obj = {
        ReminderText: {
            type: text
        },
        ReminderDate: {
            type: date
        }
    }

    const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    };
    const finalLink = 'http://localhost:3000/db/reminder/' + id;
    const response = await fetch(finalLink, options);
    const responseData = await response.json();
    console.log(responseData);
}

async function Delete(id) 
{
    alert("Deleting: " + id);
    let obj = {
        id: id
    }

    const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    };
    const finalLink = 'http://localhost:3000/db/reminder/' + id;
    const response = await fetch(finalLink, options);
    const responseData = await response.json();
    console.log(responseData);
}