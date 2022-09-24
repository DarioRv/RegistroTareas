
function imprimirTarea(tareas){
    confirm("¡Genial! Aqui estan tus tareas registradas");
    document.write("<div class='container'>")
    document.write("<div class='titulo'><h1>¡Hola!</h1></div>");
    document.write("<div class='tareas'>");
    document.write(tareas);
    document.write("</div>")
    document.write("<button onclick='location.reload()'>REINICIAR</button>");
    document.write("</div>")
}
function agregarTarea(){
    let respuesta, contadorTareas, tarea, estructuraTarea, listaDeTareas="";
    contadorTareas = 0;
    confirm("¡Hola! Aqui puedes agregar todas las tereas o cosas pendientes que tienes para llevar un control sobre ello.")
    do{
        if (contadorTareas === 0){
            confirm("¡Agreguemos tu primera tarea en la lista!")
            respuesta = "si";
        }
        else
            respuesta = prompt("¿Quieres agregar otra tarea?");
        if (respuesta.toLowerCase() === "si"){
            contadorTareas += 1;
            tarea = prompt("Ingresa la tarea a agendar");
            estructuraTarea = "<div class='item'>" + tarea.toUpperCase() + "<input type='checkbox' onclick='alert(`Felicidades, finalizaste una tarea`)'></div>";
            listaDeTareas = listaDeTareas + estructuraTarea; 
        }
    }while (respuesta.toLowerCase() === "si");
    imprimirTarea(listaDeTareas);
}

agregarTarea();