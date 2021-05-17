document.getElementById("btnSetReminder").onclick = OpenSetReminderSite;

function OpenSetReminderSite() 
{
    alert("Redirecting to the 'set reminder' form");
    window.location.replace("/csSetReminder");
}

async function InsertFollowUP(id, status, date) {
    console.log(`Insert this ${id} ${status} ${date}`);
    const data = {
        id: id,
        status: status,
        date: date
    }
    console.log(data);
    // POST request
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    // the response still does come as a hige set of data. 
    //fetch('http://localhost:3000/', options).then(res => {
    //    console.log(res);
    //});
    // from a normal method and bot usinf 2 .then functions to await async
    const response = await fetch('http://localhost:3000/', options);
    const responseData = await response.json();
    console.log(responseData);
}

function UpdateFollowUP(id, status, date) {
    console.log(`Update this ${id} ${status} ${date}`);
    const data = {
        id: id,
        status: status,
        date: date
    }
    
    // PATCH request
}

function DeleteFollowUP(id) {
    console.log(`Delete this ${id}`);
    let data = {
        id: id
    }
    console.log(data);
    // DELETE request 
}


