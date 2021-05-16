document.getElementById("btnSetReminder").onclick = OpenSetReminderSite;
document.getElementById("btnInsert").onclick = InsertFollowUP;
document.getElementById("btnUpdate").onclick = UpdateFollowUP;
document.getElementById("btnDelete").onclick = DeleteFollowUP;

function OpenSetReminderSite() 
{
    alert("Redirecting to the 'set reminder' form");
    window.location.replace("/csSetReminder");
}

function InsertFollowUP() {
    console.log("Insert object here");
    
}

function UpdateFollowUP() {
    console.log("Update object here");
}

function DeleteFollowUP() {
    console.log("Delete object here");
}
