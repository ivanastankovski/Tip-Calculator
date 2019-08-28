//on load
document.getElementById("totalTip").style.display = "none";

//click to call the function:
document.getElementById("calculate").addEventListener("click", calculateTip);

function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    //validate input:

    if(billAmount === "" || serviceQuality == 0) {
        alert("Please enter values");
        return;
    }
    //check the input if it's empty or equal to 1:
    if(numOfPeople === "" || numOfPeople <=1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    var total = (billAmount * serviceQuality) / numOfPeople;
    //round to two decimal places:
    total = total.toFixed(2);

    var totalTip = document.getElementById("tip");
    totalTip.textContent = total;

    document.getElementById("totalTip").style.display = "block";

}





