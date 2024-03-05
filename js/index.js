let arneses = [
    {Producto: "Arnes de Flores", Imagen: "arnes_flores.jpg", Precio: "$10500", Stock: 25},
    {Producto: "Arnes de Patitas", Imagen: "arnes_patitas.jpg", Precio: "$10500", Stock: 21},
    {Producto: "Arnes de Hojas", Imagen: "arnes_hojas.jpg", Precio: "$10500", Stock: 9},
    {Producto: "Arnes Liso", Imagen: "arnes_Liso.jpg", Precio: "$9000", Stock: 2},
    {Producto: "Arnes de en H Liso", Imagen: "arnes_H.jpg", Precio: "$7000", Stock: 5},
    {Producto: "Arnes de Lunares", Imagen: "arnes_lunares.jpg", Precio: "$8000", Stock: 10}
];

let collares = [
    {Producto: "Collar de Flores", imagen: "collar_flores.jpg", Precio: "$5500", Stock: 25},
    {Producto: "Collar de Patitas", imagen: "collar_patitas.jpg", Precio: "$4500", Stock: 2},
    {Producto: "Collar de Hojas", imagen: "collar_hojas.jpg", Precio: "$2000", Stock: 5},
    {Producto: "Collar Liso", imagen: "collar_liso.jpg", Precio: "$5000", Stock: 13},
    {Producto: "Collar de en H Liso", imagen: "collar_H.jpg", Precio: "$3000", Stock: 4},
    {Producto: "Collar de Lunares", imagen: "collar_lunares.jpg", Precio: "$2000", Stock: 8}
];

class Producto {
    constructor (producto,precio,stock){
        this.producto = producto;
        this.imagen = imagen;
        this.precio = precio;
        this.stock = stock
    }
};

function nuevoProducto(array, producto, imagen, precio, stock) {
    const nuevoProducto = new Producto(producto, precio, stock);
    array.push(nuevoProducto);
};

function crearCardProducto() {
    const contenedor = document.getElementById('contenedor-productos');

    arneses.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-producto');

        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.producto;
        imagen.classList.add('imagen-producto');
        tarjeta.appendChild(imagen);

        const nombre = document.createElement('h3');
        nombre.textContent = producto.producto;
        nombre.classList.add('nombre-producto');
        tarjeta.appendChild(nombre);

        const precio = document.createElement('p');
        precio.textContent = producto.precio;
        precio.classList.add('precio-producto');
        tarjeta.appendChild(precio);

        const botonCompra = document.createElement('button');
        botonCompra.textContent = 'Agregar al carrito';
        botonCompra.classList.add('boton-compra');
        botonCompra.addEventListener('click', () => {
            
        });

        tarjeta.appendChild(botonCompra);

        contenedor.appendChild(tarjeta);
    });

    
};

crearCardProducto();

let carrito = JSON.parse(localStorage.getItem('carrito') )|| [];

function mostrarItemsCarrito(){
    const contenedorItemsCarrito = document.getElementById('items-carrito');
    contenedorItemsCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const item = document.createElement('div');
        item.textContent = producto.nombre;
    });
    contenedorItemsCarrito.appendChild(item);
}

function actualizarIconoCarrito(){
    const iconoCarrito = document.getElementById('cantidad-items');
    if(iconoCarrito){
        iconoCarrito.textContent = cantidadItemsCarrito;
    }
}
