function convertUnit(){
    var input = document.getElementById("cinput").value;
    var inputOption = document.getElementById("cdropdown1").value;
    var outputOption = document.getElementById("cdropdown2").value;

    if (inputOption == "kilometers" && outputOption == "yards") {
        output = input * 1093.6133;
    }
    else if (inputOption == "yards" && outputOption == "kilometers") {
        output = input * 0.0009144;
    }
    else if (inputOption == "miles" && outputOption == "kilometers") {
        output = input * 1.60934;
    } else if (inputOption == "kilometers" && outputOption == "miles") {
        output = input * 0.621371;
    } else if (inputOption == "miles" && outputOption == "meters") {
        output = input * 1609.34;
    } else if (inputOption == "meters" && outputOption == "miles") {
        output = input * 0.000621371;
    } else if (inputOption == "kilometers" && outputOption == "meters") {
        output = input * 1000;
    } else if (inputOption == "meters" && outputOption == "kilometers") {
        output = input * 0.001;
    } else if (inputOption == "kilometers" && outputOption == "feet") {
        output = input * 3280.84;
    } else if (inputOption == "feet" && outputOption == "kilometers") {
        output = input * 0.0003048;
    } else if (inputOption == "feet" && outputOption == "meters") {
        output = input * 0.3048;
    } else if (inputOption == "meters" && outputOption == "feet") {
        output = input * 3.28084;
    } else if (inputOption == "feet" && outputOption == "yards") {
        output = input * 0.333333;
    } else if (inputOption == "yards" && outputOption == "feet") {
        output = input * 3;
    } else if (inputOption == "yards" && outputOption == "meters") {
        output = input * 0.9144;
    }

    document.getElementById("coutput").value = output;
}


// document.addEventListener('DOMContentLoaded', () =>{
//     convertUnit();
// });

function swap(){
    var from = document.getElementById("cdropdown1").value;
    var to = document.getElementById("cdropdown2").value;
    document.getElementById("cdropdown1").value = to;
    document.getElementById("cdropdown2").value = from;
}
