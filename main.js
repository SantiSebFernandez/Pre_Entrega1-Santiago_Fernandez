//function,ciclo for y condicional if else para ingreso con contraseña

let ingresarNumero = prompt("Ingrese la clave para ingresar a su cuenta. Tiene 3 intentos.");

function pedirContrasenia() {

    for (let i = 0; i < 2; i = i + 1) {
        if (ingresarNumero == 1234) {
            alert("¡Bienvenido!");
            break
        } else {
            alert("La contraseña es incorrecta. Ingresela nuevamente.");
            ingresarNumero = prompt("Ingrese la clave para ingresar a su cuenta.");
        }
    }

}

let ingreso = pedirContrasenia();


//condicional if, function y switch para elegir opciones

if (ingresarNumero == 1234) {
    let newsletter = (prompt("¿Desea recibir novedades de los ultimos ingresos? Ingrese SI, de lo contrario ingrese NO.").toLowerCase());

    if (newsletter === "si") {

        preguntaNewsletter = prompt(`
        Ustes ingresó ${newsletter}.
        ¿De qué tipo de género musical desea recibir novedades?
        Ingrese un número:
        1: Rock
        2: Rap
        3: Punk
        4: Cumbia`);

        let generoNewsletter = `En breve le informaremos todas las novedades acerca del género `;

        function generos(preguntaNewsletter) {
            switch (preguntaNewsletter) {
                case "1":
                    return generoNewsletter + "Rock.";
                    break;

                case "2":
                    return generoNewsletter + "Rap.";
                    break;

                case "3":
                    return generoNewsletter + "Punk.";
                    break;

                case "4":
                    return generoNewsletter + "Cuambia.";
                    break;
            }
        }
    } else {
        alert("muchas gracias por su tiempo.");
    }
}

alert(generos(preguntaNewsletter));



//ciclo while para encuesta final
let encuesta = prompt("¿tenés un minuto para una encuesta? Ingrese SI, de lo contrario ingrese NO.");
let info="";

while(encuesta != "NO" && encuesta != "no" && encuesta != "No"){
     info += encuesta;
     encuestaDos = prompt("¿Estás conforme con la atención recibida?");
     encuestaTres = prompt ("¿Tuviste algún inconveniente a la hora de hacer un pedido?");
     encuestaCuatro = prompt ("¿Qué tanto recomendarías la tienda a un amigo?");
     break
 }

alert("¡Muchas gracias!")