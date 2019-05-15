
var screenText = "";
var firstValue;
var tipoOperacion = "";
function drawScreen(number){
    
    if(firstValue)
    {
        /* si tiene un valor */
        var beforeNumber = document.getElementById("screen").value;
        document.getElementById("screen").value = beforeNumber + number;
    }
    else{
        /* si no tiene un valor */
        firstValue = number;
        document.getElementById("screen").value = number;
    }
}

function operation(typeOperation){
    tipoOperacion = typeOperation;
    console.log("operation ",tipoOperacion);
}

function doOperation(){
    console.log("doOperation ",tipoOperacion);
    switch(tipoOperacion) {
        case 'suma':
          // code block
          document.getElementById("screen").value = tipoOperacion;
          break;
        case 'resta':
          // code block
          document.getElementById("screen").value = tipoOperacion;
          break;
        case 'multiplicacion':
          document.getElementById("screen").value = tipoOperacion;
          // code block
          break;
        case 'division':
          // code block
          document.getElementById("screen").value = tipoOperacion;
          break;
        default:
        document.getElementById("screen").value = "Sin operación";
        break;
          // code block
      }
}