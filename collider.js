import Dragable from "./Dragable.js";
//Creacion de estilo de collider rectangular

const collider =  document.createElement("div");
collider.className="collider";
document.body.appendChild(collider);
collider.style.width="300px";
collider.style.height="50px";
collider.style.border="1px solid";
collider.style.position="absolute";
collider.style.left="200px";
collider.style.top="200px";
collider.style.background="transparent";
collider.style.zIndex="0";
//Segundo collider de ejemplo
collider.style.zIndex =2;

//Creacion de estilo de collider rectangular
const collider2 =  document.createElement("div");
collider2.className="collider2";
document.body.appendChild(collider2);
collider2.style.width="100px";
collider2.style.height="50px";
collider2.style.border="1px solid";
collider2.style.position="absolute";
collider2.style.left="300px";
collider2.style.top="0px";
collider2.style.background="white";
collider2.style.zIndex="0";
collider2.style.zIndex =2;

//Collider Position X Debugger
const debugTextColliderX = document.createElement("div");
document.body.appendChild(debugTextColliderX);
debugTextColliderX.className   = "debugTextColliderX";
debugTextColliderX.style.position = "relative";
debugTextColliderX.style.left = "600px";
debugTextColliderX.style.top = "0px";

// Collider Position Y Debugger
const debugTextColliderY = document.createElement("div");
document.body.appendChild(debugTextColliderY);
debugTextColliderY.className   = "debugTextColliderY";
debugTextColliderY.style.position = "relative";
debugTextColliderY.style.left = "600px";
debugTextColliderY.style.top = "30px";

//onColisionText Debugger
const onColisionText = document.createElement("div");
document.body.appendChild(onColisionText);
onColisionText.className   = "debugTextColliderX";
onColisionText.style.position = "relative";
onColisionText.style.left = "600px";
onColisionText.style.top = "60px";
onColisionText.style.color='white'


//Setear posicion en local storage
function setColliderPosition(x, y) {
    localStorage.setItem("mouseX", x);
    localStorage.setItem("mouseY", y);
}
const colliderRect = document.querySelector('.collider');

function mouseHoverCollider(collider){
    var mouseDown= false;
    var onMove = false;
    const obj = document.querySelector('.collider');

 function checkClick(e) {
    const mouseX = localStorage.getItem("mouseX")
    const mouseY = localStorage.getItem("mouseY")  
        if(onMouseCollision(collider,mouseX, mouseY)){
            debugOnCollision(collider,true); 
            return true;
        }
        else{
            debugOnCollision(collider,false);
            return false
        }
         
        }
    }

// collider.onmouseup= function(){
//     console.log( "CHECK")
//     document.removeEventListener('mousemove', onMouseMove(event));
//     collider.onmouseup = null;
   
//   };

function mouseClickCollider(collideractivated){
    
        const mouseX = localStorage.getItem("mouseX")
        const mouseY = localStorage.getItem("mouseY")  
        if(onMouseCollision(collider,mouseX, mouseY)){
            debugOnCollision(collider,true);
           
        }
        else{
            debugOnCollision(collider,false);
        }
    
}
function getArea(collider){
   var x1= collider.offsetLeft-8;
   var x2= collider.offsetLeft+collider.clientWidth-8;
   var y1= collider.offsetTop-8;
   var y2= collider.offsetTop+collider.clientHeight-8;
   return {x1,x2,y1,y2}
}

function debugColliderArea(onDebug,collider,nameObject="box") {
    if (onDebug){
        debugTextColliderX.textContent+=nameObject+" = x1: "+getArea(collider).x1 +", x2: "+ getArea(collider).x2 +" || "
        debugTextColliderY.textContent+=nameObject+" = y1: "+getArea(collider).y1+" , y2: " + getArea(collider).y2 +" || "
       

    }
}
function debugColisionText(onDebug) {
    if (inColision(collider,collider2) && onDebug){           
        onColisionText.textContent =  "Objetos en colision"
    }
    else {
        onColisionText.textContent = "Los objetos no estan en colision"
    }
}function debugOnCollision(collider,onDebug){
    if (onDebug){
        collider.style.background="black";
        }
    else{
        collider.style.background="white";
    }
}
function onMouseCollision(collider, mouseX, mouseY) {
    const {x1,x2,y1,y2} = getArea(collider);
    if (mouseX>=x1+8 && mouseX<=x2+8 && mouseY>=y1+8 && mouseY<=y2+8){
      return true;
    } 
}
debugColisionText(true)
//TODO PARA CORREGIR
function inColision(collider,collider2){
   // console.log ( "Si la Posicion Inicial de X del primer objeto: " +( collider.offsetLeft - 8 )+" es menor que la posicion inicial de el segundo mas su tamaño en X: "+ (collider2.offsetLeft + collider2.clientWidth - 8))
     const firstCheck =  collider.offsetLeft - 8 < collider2.offsetLeft + collider2.clientWidth - 8
   //  console.log ( "Si la Posicion Inicial de X del primer objeto mas su tamaño en X: " +( collider.offsetLeft - 8 )+" es mayor que la posicion inicial en X del segundo objeto "+ (collider2.offsetLeft - 8))
     const secondCheck =  collider.offsetLeft - 8  + collider.clientWidth > collider2.offsetLeft - 8
   //  console.log ( "Si la Posicion Inicial de Y del primer objeto: " +( collider.offsetTop - 8 )+" es menor que la posicion inicial de el segundo mas su tamaño en Y: "+ (collider2.offsetTop + collider2.clientHeight - 8))
     const thirtyCheck =  collider.offsetTop  - 8 < collider2.offsetTop   + collider2.clientHeight - 8
   //  console.log ( "Si la Posicion Inicial de Y del primer objeto mas su tamaño en Y: " +( collider.offsetLeft - 8 )+" es mayor que la posicion inicial en Y del segundo objeto "+ (collider2.offsetTop - 8  ))
     const fourthCheck = collider.offsetTop   - 8 + collider.clientHeight  > collider2.offsetTop - 8
   //  console.log ( firstCheck,secondCheck,thirtyCheck,fourthCheck)
       var calculateColision = ( firstCheck && secondCheck && thirtyCheck && fourthCheck  )
    return calculateColision;
}

debugColliderArea(true,collider, "Box 1")
debugColliderArea(true,collider2, "Box 2")
mouseClickCollider(collider2,true)
mouseHoverCollider(collider2)

   

const box1= new Dragable('.collider')
const box2= new Dragable('.collider2')

document.addEventListener('mousemove',(e)=>{debugColisionText(box1.getElement(),box2.getElement())})
