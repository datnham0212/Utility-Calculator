var displayField = document.getElementsByClassName("calc-display");
function buttonPressed(that){
    
    var buttonValue = that.textContent;
    
    if(buttonValue == "C"){
        displayField[0].value = "";
        count = 0;
    }
    else if(buttonValue == "CE"){
        displayField[0].value = displayField[0].value.slice(0, -1);
    }

    else if(buttonValue == "="){
        if(displayField[0].value.includes("x")){
            displayField[0].value = displayField[0].value.replace("x", "*");
        }
        else if(displayField[0].value.includes("÷")){
            displayField[0].value = displayField[0].value.replace("÷", "/");
        }
        else if(displayField[0].value.includes("mod")){
            displayField[0].value = displayField[0].value.replace("mod", "%");
        }
        
        let str = String(displayField[0].value);
        let result = eval(str);   

        if(result === undefined){
            // displayField[0].value = "";
            // return displayField[0].value;
            return "";
        }
        
        displayField[0].value = result;    
    }
    
    else{
        displayField[0].value += buttonValue;
    }
    
}
