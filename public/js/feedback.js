const { reset } = require("nodemon");

function Insert()
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

    var feedBackObj = {ID:ID, problem:problem, helpedOnTime:helpedOnTime, comment:comment, date:date};

    //fetch('http://localhost:8080', {method: 'POST', body: feedBackObj}).then(results => results.json()).then(console.log);

    console.log(feedBackObj);
}