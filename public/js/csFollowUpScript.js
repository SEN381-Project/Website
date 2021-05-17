document.getElementById("btnSetReminder").onclick = OpenSetReminderSite;

function OpenSetReminderSite() 
{
    alert("Redirecting to the 'set reminder' form");
    window.location.replace("/csSetReminder");
}

async function InsertFollowUP(id, status, date) {
    console.log(`Insert this ${id} ${status} ${date}`);
    // removing id because ID is now auto generated
    // naming according to API naming convention
    const data = {
        FollowupStatus: status,
        FollowupDate: date
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
    const response = await fetch('http://localhost:3000/db/followUp', options);
    const responseData = await response.json();
    console.log(responseData);
}

async function UpdateFollowUP(id, status, date) {
    console.log(`Update this ${id} ${status} ${date}`);
    // removing id because ID is now auto generated
    // naming according to API naming convention
    const data = {
        FollowupStatus: status,
        FollowupDate: date
    }
    
    // PATCH/PUT request
    const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const finalLink = 'http://localhost:3000/db/followUp/' + id;
    const response = await fetch(finalLink, options);
    const responseData = await response.json();
    console.log(responseData);
}

async function DeleteFollowUP(id) {
    console.log(`Delete this ${id}`);
    let data = {
        id: id
    }
    console.log(data);
    // DELETE request 
    const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const finalLink = 'http://localhost:3000/db/followUp/' + id;
    const response = await fetch(finalLink, options);
    const responseData = await response.json();
    console.log(responseData);
}


