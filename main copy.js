
function pedirContrasenia (){
    for ( let i = 0 ; i < 3 ; i = i + 1 ) {
        let ingresarNumero = prompt("Ingrese la clave para ingresar a su cuenta.")   
        if (ingresarNumero == 1234){
            alert("¡Bienvenido!")
            break
        } else {
            alert ("La contraseña es incorrecta. Ingresela nuevamente.")
        }
    }
}

pedirContrasenia()

let edad = 17;

if (edad >= 18) {

    let primerNumero = Number(prompt("ingrese el primer numero"));
    let segundoNumero = Number(prompt("ingrese el primer numero"));
    let operacion = prompt("Ingrese la operacion")

    function calculadora(primerNumero, segundoNumero, operacion) {
        switch (operacion) {
            case "+":
                return primerNumero + segundoNumero;
                break;

            case "-":
                return primerNumero - segundoNumero;
                break;

            case "*":
                return primerNumero * segundoNumero;
                break;

            case "/":
                return primerNumero / segundoNumero;
                break;
        }
    }
    let resultado = calculadora(primerNumero, segundoNumero, operacion)
    alert(`El resultado es ${resultado}.`)
}


