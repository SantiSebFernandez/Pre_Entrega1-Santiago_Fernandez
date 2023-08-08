// función constructora con método
class Productos {
    constructor(info) {
        this.id = info.id;
        this.artista = info.artista;
        this.album = info.album;
        this.anio = info.anio;
        this.edicion = info.edicion;
        this.precio = info.precio;
        this.unidades = info.unidades;
        this.vendido = false;
    }
    vender() {
        this.vendido = true;
        this.unidades -= 1;

        if (this.unidades == 0) {
            console.log("Sin Stock");
        }
    }
}

// Productos generados mediante función constructora
const producto1 = new Productos({
    id: 01,
    artista: "GZA",
    album: "Liquid Swords",
    anio: 1995,
    edicion: "vinilo",
    precio: 10000,
    unidades: 10,
})

const producto2 = new Productos({
    id: 02,
    artista: "Deep Purple",
    album: "Machine Head",
    anio: 1971,
    edicion: "vinilo",
    precio: 11000,
    unidades: 5,
})

const producto3 = new Productos({
    id: 03,
    artista: "V8",
    album: "Luchando por el Metal",
    anio: 1983,
    edicion: "vinilo",
    precio: 9500,
    unidades: 3,
})

const producto4 = new Productos({
    id: 04,
    artista: "Pescado Rabioso",
    album: "Pescado 2",
    anio: 1973,
    edicion: "cd",
    precio: 10500,
    unidades: 4,
})


//Array de Productos
const catalogo = [producto1, producto2, producto3, producto4]

//for of para presentar los productos del catálogo
let mensaje = "Bienvenidos, te presentamos los productos disponibles del catálogo. Inserte el número de producto que desea comprar: \n\n"

for (const productos of catalogo) {
    let catalogoArtistaAlbum = [productos.id, productos.artista, productos.album];
    mensaje += catalogoArtistaAlbum.join(" - ") + "\n";
}

const comprarProducto = prompt(mensaje)


const carrito = []


// Función vender productos
function venderProductos() {
    switch (comprarProducto) {
        case "1":
            producto1.vender();
            return carrito.push(producto1);
            break;

        case "2":
            producto2.vender();
            return carrito.push(producto2);
            break;

        case "3":
            producto3.vender();
            return carrito.push(producto3);
            break;

        case "4":
            producto4.vender();
            return carrito.push(producto4);
            break;

        default:
            break;
    }
    alert("El producto fue añadido exitosamente al carrito. ¡Muchas gracias por su compra!")

}

venderProductos()

console.log(catalogo);
console.log(carrito);

//map del total de precio de carrito + iva
const totalCarrito = carrito.map((item) => {
    return item.precio + item.precio * 0.21;

})

console.log(totalCarrito);

carrito.forEach((item)=> {
    alert ( "El detalle de su compra es" + "\n" + item.id + "- " + item.artista + ": " + item.album + "\n" + "Precio Final + IVA: " + totalCarrito) ; 
})