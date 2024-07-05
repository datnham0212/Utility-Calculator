var displayField = document.getElementsByClassName("calc-display");
var count = 0;
function buttonPressed(that){
    
    var buttonValue = that.textContent;
    
    if(buttonValue == "C"){
        displayField[0].value = "";
        count = 0;
    }
    else if(buttonValue == "CE"){
        displayField[0].value = displayField[0].value.slice(0, -1);
        count -= 1;
    }
    else if(buttonValue == "0" && count == 0){
        displayField[0].value = "";
    }

    else{
        displayField[0].value += buttonValue;
        count += 1
    }


    
}