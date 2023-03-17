SaludarYNombre();
MostrarProductos();

function SaludarYNombre() {
    alert("Bienvenido al puesto de comida rápida.");
    let nombre = prompt ("Ingresar nombre");
    while(nombre === "") {
        nombre = prompt ("Ingresar nombre");
    }
    alert("Hola "+nombre);
}

function MostrarProductos(){
    class Producto {
        constructor (nombre, precio) {
            this.nombre = nombre;
            this.precio = precio;
        }
    }
    const prod1 = new Producto("Sandwich",6);
    const prod2 = new Producto("Hamburguesa",8);
    const prod3 = new Producto("Pizza",10);
    
    const arrayProductos = [prod1, prod2, prod3];
    console.log(arrayProductos);

    arrayProductos.forEach((producto)=>{
        console.log(producto.precio);
    });

    let prodComida = parseInt(prompt("Qué deseas comer?\n1) Sandwich\n2) Hamburguesa\n3) Pizza"));
    while(prodComida < 1 || prodComida > 3){
        prodComida = parseInt(prompt("Qué deseas comer?\n1) Sandwich\n2) Hamburguesa\n3) Pizza"));
    }
    if(prodComida === 1) {
        alert("Has seleccionado: "+prod1.nombre);
        alert("Debes pagar: "+prod1.precio+" dólares.");
    } else if(prodComida === 2) {
        alert("Has seleccionado: "+prod2.nombre);
        alert("Debes pagar: "+prod2.precio+" dólares.");
    } else if(prodComida === 3) {
        alert("Has seleccionado: "+prod3.nombre);
        alert("Debes pagar: "+prod3.precio+" dólares.");
    }
}