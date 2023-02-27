//Creacion del puntero estilizado

document.body.style.cursor = "url('puntero.png'), none"

// Mouse Position Y Debugger
const debugTextMousePositionY = document.createElement("div");
document.body.appendChild(debugTextMousePositionY);
debugTextMousePositionY.className   = "debugTextMousePositionY";
debugTextMousePositionY.style.position = "relative";
debugTextMousePositionY.style.left = "0px";
debugTextMousePositionY.style.top = "0px";

function setMousePosition(x, y) {
    localStorage.setItem("mouseX", x);
    localStorage.setItem("mouseY", y);
}
//Obtener posicion X del mouse
function getMousePositionX(e) {
   // const rect = mouse.getBoundingClientRect();
    return e.clientX //- rect.left
}
//Obtener posicion Y del mouse
function getMousePositionY(e) {
 //   const rect = mouse.getBoundingClientRect();
    return e.clientY //- rect.top
    
}
//Captura de eventos y debug de posicion del mouse
// mouse.addEventListener('mousemove', (e) => {
//     e.preventDefault();
//     //Captura de posicion del mouse
//     const x = e.clientX
//     const y = e.clientY
//     //Estilo
   
//     //Debug
//     debugMouseMove(e, true);
//     //Set local storage pocision del cursor
//     setMousePosition(getMousePositionX(e), getMousePositionY(e));
// })
//Debug de mouse en pantalla
function debugMouseMove(e, onDebug) {
    if (onDebug){
        debugTextMousePositionX.textContent="Mouse X:"+(getMousePositionX(e)-8)
        debugTextMousePositionY.textContent="Mouse Y:"+(getMousePositionY(e)-8)
    }
}

