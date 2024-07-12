function convertUnit(){
    var input = document.getElementById("cinput").value;
    var inputOption = document.getElementById("cdropdown1").value;
    var outputOption = document.getElementById("cdropdown2").value;

    if(inputOption == "kilometers" && outputOption == "yards"){
        var output = input * 1093.6133;
    }
    else if(outputOption == "kilometers" && inputOption == "yards"){
        var output = input * 0.0009144;
    }
    else if(inputOption == "miles" && outputOption == "kilometers"){
        var output = input * 1.60934;
    }else if(inputOption == "kilometers" && outputOption == "miles"){
        var output = input * 0.621371;
    }else if(inputOption == "miles" && outputOption == "meters"){
        var output = input * 1609.34;
    }else if(inputOption == "meters" && outputOption == "miles"){
        var output = input * 0.000621371;
    }else if(inputOption == "kilometers" && outputOption == "meters"){
        var output = input * 1000;
    }else if(inputOption == "meters" && outputOption == "kilometers"){
        var output = input * 0.001;
    }else if(inputOption == "kilometers" && outputOption == "feet"){
        var output = input * 3280.84;
    }else if(inputOption == "feet" && outputOption == "kilometers"){
        var output = input * 0.000304
    }
    else if(inputOption == "feet" && outputOption == "meters"){
        var output = input * 0.3048;
    }
    else if(inputOption == "meters" && outputOption == "feet"){
        var output = input * 3.28084;
    }
    else if(inputOption == "feet" && outputOption == "yards"){
        var output = input * 3;
    }else if(inputOption == "yards" && outputOption == "feet"){
        var output = input * 0.3333333;
    }else if(inputOption == "yards" && outputOption == "meters"){
        var output = input * 0.9144;
    }

    document.getElementById("coutput").value = output;
}


// document.addEventListener('DOMContentLoaded', () =>{
//     convertUnit();
// });
