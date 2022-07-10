//Create Random Number for Pin with Bubble event
function getPin() {
    let pin = Math.round(Math.random() * 10000);
    let pinstring = pin + "";
    if (pinstring.length == 4) {
        return pin;
    } else {
        return getPin();
    }
};

//Display Pin
function genaratePin() {
    const pin = getPin();
    let pinDisplay = document.getElementById('pin-display');
    pinDisplay.value = pin;
};


//Enter pin section
document.getElementById('key-pad').addEventListener('click', function (event) {
    let number = event.target.innerText;
    const numberInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == "C") {
            numberInput.value = "";
        }
    } else {
        //Show On The Display
        const previousNumber = numberInput.value;
        const newNumber = previousNumber + number;
        numberInput.value = newNumber;
    }
});

//pin Match
document.getElementById('submit-btn').addEventListener('click', function () {
    const pin = document.getElementById('pin-display').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const succMsg = document.getElementById('success-msg');
    const errMsg = document.getElementById('failed msg');

    if (pin == typedNumber) {
        succMsg.style.display = "block";
        errMsg.style.display = "none"
    } else {
        errMsg.style.display = "block";
        succMsg.style.display = "none";
    }

});