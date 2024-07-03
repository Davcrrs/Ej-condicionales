/*. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/


let Helado = prompt("Que tipo de hedado quieres: Sin topping, oreo , kitkat, brownie");
 const precio = 50;
 const oreo = 10;
 const kitkat = 15;
 const brownie = 20;


if(Helado == "Sin topping"){
    alert("su precio a pagar es : $" + precio + "MXN");

}else if(Helado == "oreo"){
    alert("su precio a pagar es : $"+ (precio+oreo) + "MXN");
}else if(Helado == "kitkat"){
    alert("su precio a pagar es : $" +(precio+kitkat) +"MXN");
}else if(Helado == "brownie"){
    alert("su precio a pagar es : $" +(precio+brownie)+ "MXN");
}else{
    alert("No lo manejamos ");
}

//////////////////////////////////////////////////////////////////////

/*

Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

*/



let vehículo = prompt("Que tipo de vehículo tienes: coche, moto, autobús");
let kilometraje = prompt("Cuantos kilomentros recorriste?");

const litrosConsumidosMenor100 = 5;
const litrosCosumidosMayor100 = 10;



if(vehículo == "coche"){
    let costoKilometro = .20
    if(kilometraje<=100){
        
        let totalPago = ((costoKilometro * kilometraje)+litrosConsumidosMenor100);
        alert("Tu total a pagar es : $"+totalPago);

    }else{
        
        let totalPago = ((costoKilometro * kilometraje)+litrosCosumidosMayor100);
        alert("Tu total a pagar es : $"+totalPago);
    }

}else if(vehículo == "moto"){
    let costoKilometro = .10
    if(kilometraje<=100){
        
        let totalPago = ((costoKilometro * kilometraje)+litrosConsumidosMenor100);
        alert("Tu total a pagar es : $"+totalPago);

    }else{
        
        let totalPago = ((costoKilometro * kilometraje)+litrosCosumidosMayor100);
        alert("Tu total a pagar es : $"+totalPago);
    }

}else{
    let costoKilometro = .5
    if(kilometraje<=100){
        
        let totalPago = ((costoKilometro * kilometraje)+litrosConsumidosMenor100);
        alert("Tu total a pagar es : $"+totalPago);

    }else{
        
        let totalPago = ((costoKilometro * kilometraje)+litrosCosumidosMayor100);
        alert("Tu total a pagar es : $"+totalPago);
    }


}