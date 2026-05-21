function calculateperiod() {
    let lastdate = document.getElementById("lastdate").value;
    let cyclelength = document.getElementById("cyclelength").value;
    if (lastdate =="" || cyclelength =="") {
        alert("Please fill in all fields.");
        return;
    }

   //gettingvalue of last period from input and adding cycle length to it to calculate next period date
   
   
    let perioddate = new Date(lastdate);
    perioddate.setDate(perioddate.getDate() + parseInt(cyclelength));

    let nextperiod = perioddate.toLocaleDateString();
    document.getElementById("result").innerHTML ="🌸 Your next period may start on: <br><br> <b>" + nextperiod + "</b>";
}
