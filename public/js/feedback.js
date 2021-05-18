async function Insert()
{
    var onTime;

    let ID = document.getElementById("feedbackID").value;
    //alert(ID);

    let problem = document.getElementById("feedbackProblem").value;
    //alert(problem);

    let helpedOnTime = document.getElementById("followupDate").checked;
    //alert(helpedOnTime);

    let comment = document.getElementById("feedbackComment").value;
    //alert(comment);

    let date = document.getElementById("feedbackDate").value;
    //alert(date);

    document.getElementById("feedbackID").value = "";
    document.getElementById("feedbackProblem").value = "";
    document.getElementById("followupDate").checked = false;
    document.getElementById("feedbackComment").value = "";
    document.getElementById("feedbackDate").value = "";

    var feedBackObj = {Problem:problem, HelpedOnTime:helpedOnTime, Comment:comment, FeedbackDate:date};

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(feedBackObj)
    }

    const response = await fetch('http://localhost:3000/db/feedback', options);
    const responseData = await response.json();
    console.log(responseData);
}

async function Update()
{
    var onTime;

    let ID = document.getElementById("feedbackID").value;
    //alert(ID);

    let problem = document.getElementById("feedbackProblem").value;
    //alert(problem);

    let helpedOnTime = document.getElementById("followupDate").checked;
    //alert(helpedOnTime);

    let comment = document.getElementById("feedbackComment").value;
    //alert(comment);

    let date = document.getElementById("feedbackDate").value;
    //alert(date);

    document.getElementById("feedbackID").value = "";
    document.getElementById("feedbackProblem").value = "";
    document.getElementById("followupDate").checked = false;
    document.getElementById("feedbackComment").value = "";
    document.getElementById("feedbackDate").value = "";

    var feedBackObj = {Problem:problem, HelpedOnTime:helpedOnTime, Comment:comment, FeedbackDate:date};

    const options = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(feedBackObj)
    }

    const response = await fetch('http://localhost:3000/db/feedback/' + ID, options);
    const responseData = await response.json();
    console.log(responseData);
}

async function Delete()
{
    let ID = document.getElementById("feedbackID").value;
    //alert(ID);

    document.getElementById("feedbackID").value = "";

    var feedBackObj = {ID:ID};

    const options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(feedBackObj)
    }

    const response = await fetch('http://localhost:3000/db/feedback/' + ID, options);
    const responseData = await response.json();
    console.log(responseData);
}