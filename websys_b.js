function checkNumber() {

    let number = Number(document.getElementById("number").value);

    if (number % 2 === 0) {
        document.getElementById("result").innerHTML =
            number + " is an EVEN number.";
    } else {
        document.getElementById("result").innerHTML =
            number + " is an ODD number.";
    }
}