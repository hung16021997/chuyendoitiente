function convert() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    result = amount * to / from;
    document.getElementById("result").innerHTML = result;
}