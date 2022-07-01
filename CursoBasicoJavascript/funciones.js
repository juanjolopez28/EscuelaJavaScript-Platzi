// Las funciones son procedimientos, un conjunto de sentencias o pasos que realizarán una tarea o cálculo con ciertos valores.

// Tenemos dos tipo de funciones en js, function Declaration y function Expression 

// el nombre reservado de function y parametros que recibira esa function 

function miFuncion() { // function declaration Declarativas expresión 
    return 3; 
}

miFuncion(); // mandamos llamar la funcion

var miFuncion = function(a,b) {  // function Expression (también conocidas como funciones anónimas)
    return a + b;
}

miFuncion(); // mandamos llamar la variable como funcion
