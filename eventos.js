console.log("Archivo eventos cargado");


// Evento click

const btnPrincial = document.getElementById("btnPrincipal");

const btnSecundario = document.getElementById("btnSecundario");


btnPrincipal.addEventListener("click", ()=>{
    console.log("Click en el botón principal");
    alert("Click en el botón principal");
});

btnPrincipal.addEventListener("mouseover", ()=>{
    console.log("Mouseover en el botón principal");
});

btnSecundario.addEventListener("click", ()=>{
    console.log("Click en el botón secundario");
    alert("Click en el botón secundario");
});