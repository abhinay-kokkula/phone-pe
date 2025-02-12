let myform = document.getElementById("myform");

myform.addEventListener("submit", function (event) {
    event.preventDefault();
    playaudio();
    function playaudio(){
        var audio = document.getElementById("myaudio");
        audio.play();
    }
    const names = document.getElementById("name").value;
    const amount = document.getElementById("number").value;

    document.getElementById("displayamount").innerHTML = "Payment of ₹" + amount + " to";
    document.getElementById("displayname").innerHTML = names;
    document.getElementById("success").innerHTML = "successful.";
    document.getElementById("myform").style.display = "none";
    document.body.style.backgroundColor = '#28a745';
    document.getElementById('inner').style.display="block";
    document.getElementById('viewdetails').textContent = "VIEW DETAILS";
    document.getElementById('checkbalances').textContent = "CHECK BALANCE";
    document.getElementById('historybtn').textContent = "DONE";
    const historybtn = document.getElementById("history");
    historybtn.addEventListener("click" ,function(){
        historydetails();
    });
    function historydetails(){
        document.getElementById("inner").style.display="none";
        document.getElementById("historydetails").style.display="flex";
        document.getElementById("hname").innerHTML = names.toUpperCase();
        document.getElementById("hamount").innerHTML="₹"+amount;
        shortname(names);
        function shortname(names){
            const namearray = names.split(" ");
            const shorted = namearray.map(na => na.charAt(0).toUpperCase()).join('');
            document.getElementById("ka").innerHTML=shorted;
        }
        getCurrentDate();
            function getCurrentDate() {
            const now = new Date();
            const day = now.getDate(); 
            const monthIndex = now.getMonth(); 
            const year = now.getFullYear(); 
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const month = months[monthIndex];
            const formattedDate = `${day} ${month} ${year}`;
            const dateElements = document.querySelectorAll('#date-time');
            dateElements.forEach(element => {
                element.textContent = formattedDate;
            });
        }
    }
});