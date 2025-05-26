//nnn
/*
k,k
*/

function sumar(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var suma = n1+n2+n3;
    document.getElementById("total").value = suma;
}

function obtener_texto1(){
    var a = document.getElementById("sumar").value;
    alert(a)
}
function obtener_texto2(){
    var a = document.getElementById("h2").textContent;
    alert(a)
}
function agregar (){
    var a 
}
//nuevo
function agrefar(){
    document.getElementById("div1").innerHTML = "hola <input type='text'>";
}
function agregar2(){
    document.getElementById("div1").append("asd");
}
function eliminar(){
    document.getElementById("div1").remove();
}
function aumentar_html(){
    document.getElementById("div1").innerHTML += "hola <input type='text'>";
}
function eliminar2(){
    document.getElementById("div1").innerHTML = "";
}
document.getElementById("cambiar_fondo").addEventListener("click", function(){
     document.getElementById("midiv").style.backgroundColor = "green";
});

document.getElementById("cambiar_color").addEventListener("click", function(){
    document.getElementById("midiv").style.color = "white";
});

document.getElementById("borde").addEventListener("click", function(){
    document.getElementById("midiv").style.border = "3px solid black";
});

document.getElementById("negrita").addEventListener("click", function(){
    document.getElementById("midiv").style.fontWeight = "bold";
});

document.getElementById("clase").addEventListener("click", function(){
    document.getElementById("midiv").classList.add("miestilo");
});

document.getElementById("quitar_clase").addEventListener("click", function(){
    document.getElementById("midiv").classList.remove("miestilo");
});

document.getElementById("quitar_todo").addEventListener("click", function(){
    document.getElementById("midiv").removeAttribute("style");
    document.getElementById("midiv").classList.remove("miestilo");
});


