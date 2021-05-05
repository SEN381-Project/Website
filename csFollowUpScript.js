document.getElementById("btnSetReminder").onclick = OpenSetReminderSite;


function OpenSetReminderSite() 
{
    alert("Redirecting to the 'set reminder' form");
    window.location.replace("csSetReminder.html");
}