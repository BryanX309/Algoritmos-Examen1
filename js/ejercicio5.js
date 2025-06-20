let promedio = 0

function calcularPromedio(nota1, nota2, nota3){
    console.log('Calcular Promedio');
    promedio = (nota1+nota2+nota3)/3;
    console.log(promedio);
}

const determinarEstado = () => {
    calcularPromedio(85,78,98)

    if(promedio >= 90){
        console.log('Excelente');
    }else if(promedio >= 80){
        console.log('Muy Bueno');
    }else if(promedio >= 70){
        console.log('Bueno');
    }else if(promedio >= 60){
        console.log('Regular');
    }else {
        console.log('Reprobado');
    }
}

determinarEstado();

const saludar = (nombre) => console.log(`Hola ${nombre}, Mucho gusto en conocerte`);

saludar('Bryan')
