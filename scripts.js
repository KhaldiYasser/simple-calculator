


let display=document.getElementById('display');

let mathematicalOperations="";

function appendTodisplay(input){

    mathematicalOperations+=input;
    display.value=mathematicalOperations;
    return mathematicalOperations;

}


function clearDisplay(){
    mathematicalOperations="";
     display.value=mathematicalOperations;
    return mathematicalOperations;
}

function calculate(){
    try{let result=eval(mathematicalOperations);
    mathematicalOperations=result;
    display.value=result;
    return mathematicalOperations;}
    catch{
        display.value="error";
    }
}