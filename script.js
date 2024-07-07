var displayField = document.getElementsByClassName("calc-display");
// var count = 0;
function buttonPressed(that){
    
    var buttonValue = that.textContent;
    
    if(buttonValue == "C"){
        displayField[0].value = "";
        count = 0;
    }
    else if(buttonValue == "CE"){
        displayField[0].value = displayField[0].value.slice(0, -1);
        // count -= 1;
    }
    // else if(buttonValue == "0" && count == 0){
    //     displayField[0].value = "";
    // }
    
    else if(buttonValue == "+"){
        displayField[0].value += buttonValue;
        operation();
    }

    else if(buttonValue == "="){
        equals();
    }

    else{
        displayField[0].value += buttonValue;
        // count += 1
    }
    
}

function operation(){
    if(displayField[0].value.includes('+')){
        return '+'; 
    }
    else if(displayField[0].value.includes('-')){
        return '-';
    }
    else if(displayField[0].value.includes('*')){
        return '*';
    }
    else if(displayField[0].value.includes('/')){
        return '/';
    }
}


function equals(){
    let str = String(displayField[0].value);
    console.log(str.split(operation()));
    let first = str.split(operation())[0];
    let second = str.split(operation())[1];
    let result = eval(first + operation() + second);   
    displayField[0].value = result;
}