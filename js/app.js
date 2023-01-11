// Función que convierte las divisas a traves del DOM. 
function convert()
{
    const val=parseFloat(document.getElementById("quantity").value);
    document.getElementById("val").innerHTML="<b>"+val+"</b>";
    let from=document.getElementById("from").value;
    let to=document.getElementById("to").value;
    
    let exchange = {
         dolar:178.58,
         euro:189.40,
         pound:215.32,
    }
    result=0;
    switch (from) {
        //peso a dolar
        case 'peso':
            if(to ==="dolar"){
                result=val/exchange.dolar; 
                console.log(`The exchange of peso to dolar is ${result}`);
                break;
                  //peso a euro
            }  else  if(to ==="euro"){
                result=val/exchange.euro; 
                console.log(`The exchange of peso to euro is ${result}`);
                break;
            }else{
                //peso a peso
                result = val;
                console.log(`The exchange of peso to peso is ${result}`);
                break;
            }
            
         //euro a dolar
        case 'euro':
            if(to ==="dolar"){
                result=val*(exchange.euro/exchange.dolar);
                console.log(`The exchange of euro to dolar is ${result}`);
                break;
                  //euro a peso
            }  else  if(to ==="peso"){
                result=val*exchange.euro;
                console.log(`The exchange of euro to peso is ${result}`);
                break;
            }else{
                result = val;
                console.log(`The exchange of euro to euro is ${result}`);
                break;
            }
            case 'dolar':
                //dolar a euro
                if(to ==="euro"){
                    result=val*(exchange.dolar/exchange.euro);
                    console.log(`The exchange of dolar to euro is ${result}`);
                    break;
                      //dolar a peso
                }  else  if(to ==="peso"){
                    result=val*exchange.dolar;
                    console.log(`The exchange of dolar to peso is ${result}`);
                    break;
                }else{
                    result = val;
                    console.log(`The exchange of dolar to dolar is ${result}`);
                    break;
                }
                
          break;
        default:
          console.log(`Currency not found ${expr}.`);
      }


      document.getElementById("result").innerHTML="Result: $"+result.toFixed(2);
}

// Local Storage y JSON

// Funcion para almacenar datos en el storage.
function saveOnStorage(){
    localStorage.setItem('result', JSON.stringify(result.toFixed(2)));
}

// Obtener datos del storage mediante un console.log.
function getOfStorage(){
    let getStorage = localStorage.getItem('result');
    console.log(getStorage);

}