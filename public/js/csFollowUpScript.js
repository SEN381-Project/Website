document.getElementById("btnSetReminder").onclick = OpenSetReminderSite;

function OpenSetReminderSite() 
{
    alert("Redirecting to the 'set reminder' form");
    window.location.replace("/csSetReminder");
}

function InsertFollowUP(id, status, date) {
    console.log(`Insert this ${id} ${status} ${date}`);
    // POST request
}

function UpdateFollowUP(id, status, date) {
    console.log(`Update this ${id} ${status} ${date}`);
    // PATCH request
}

function DeleteFollowUP(id) {
    console.log(`Delete this ${id}`);
    // DELETE request 
}
