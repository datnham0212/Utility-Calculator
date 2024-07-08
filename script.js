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

        else if(displayField[0].value.includes("π")){
            displayField[0].value = displayField[0].value.replace("π", "Math.PI");
        }

        else if(displayField[0].value.includes("e")){
            displayField[0].value = displayField[0].value.replace("e", "Math.E");
        }

        
        else if(displayField[0].value.includes("√")){
            displayField[0].value = "Math.sqrt(" + displayField[0].value.replace("√", "") + ")";
        }

        //TODO: need improvements
        else if(displayField[0].value.includes("abs")){
            displayField[0].value = "Math.abs(" + displayField[0].value.replace("abs", "") + ")";
        }
        
        else if(displayField[0].value.includes("10^")){
            displayField[0].value = displayField[0].value.replace("10^", "10**");
        }

        //TODO: need improvements
        else if(displayField[0].value.includes("sin")){
            displayField[0].value = "Math.sin(" + displayField[0].value.replace("sin", "") + ")";
        }

        //TODO: need improvements
        else if(displayField[0].value.includes("cos")){
            displayField[0].value = "Math.cos(" + displayField[0].value.replace("cos", "") + ")";
        }

        //TODO: need improvements
        else if(displayField[0].value.includes("tan")){
            displayField[0].value = "Math.tan(" + displayField[0].value.replace("tan", "") + ")";
        }

        //TODO: need improvements
        else if(displayField[0].value.includes("cot")){
            displayField[0].value = "1/(Math.tan(" + displayField[0].value.replace("cot", "") + "))";
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
