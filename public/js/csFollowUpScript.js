document.getElementById("btnSetReminder").onclick = OpenSetReminderSite;

function OpenSetReminderSite() 
{
    alert("Redirecting to the 'set reminder' form");
    window.location.replace("/csSetReminder");
}

function InsertFollowUP(id, status, date) {
    console.log(`Insert this ${id} ${status} ${date}`);
    let data = {
        id: id,
        status: status,
        date: date
    }
    console.log(data);
    // POST request
}

function UpdateFollowUP(id, status, date) {
    console.log(`Update this ${id} ${status} ${date}`);
    let data = {
        id: id,
        status: status,
        date: date
    }
    console.log(data);
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
