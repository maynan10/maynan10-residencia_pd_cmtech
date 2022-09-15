function notas(nota) 

{
    if (nota >= 0.0 &&  nota <=4.9) {
        var notaF = "Nota: D";
    } 
    else if (nota >= 5.0 &&  nota <=6.9){
        var notaF = "Nota: C";
    }
    else if (nota >= 7.0 &&  nota <=8.9) {
        var notaF = "Nota: B";
    }
    else{
       var notaF = "Nota: A";
    }
    return notaF
}
    alert(notas(2.3))