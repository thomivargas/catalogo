import pantalon_1 from './assets/Productos/Compra_1/4.webp'
import pantalon_2 from './assets/Productos/Compra_1/5.webp'
import pantalon_3 from './assets/Productos/Compra_1/6.webp'
import pantalon_4 from './assets/Productos/Compra_1/7.webp'
import remera_1 from './assets/Productos/Compra_1/1.webp'
import remera_2 from './assets/Productos/Compra_1/2.webp'
import remera_3 from './assets/Productos/Compra_1/3.webp'
import camisetas from './assets/Productos/Compra_1/10.webp';
import buzos from './assets/Productos/Compra_1/9.webp'
import buzo from './assets/Productos/Compra_1/8.webp'

export const data_Remeras = [
    {
        nombre: 'Remera Tee Princeless',
        precio: '$11.000',
        precioHot: '$8.250', // 25% discount
        img: remera_2
    },
    {
        nombre: 'Remera Cowboy',
        precio: '$11.000',
        precioHot: '$8.250', // 25% discount
        img: remera_1
    },
];

// Add precioHot to all products with a 25% discount
export const data = [
    {
        nombre: 'Wide Leg Celeste',
        precio: '$55.000',
        precioHot: '$41.250', // 25% discount
        img: pantalon_1
    },
    {
        nombre: 'Wide Leg Gris Tiro Medio',
        precio: '$60.000',
        precioHot: '$45.000', // 25% discount
        img: pantalon_4
    },
    {
        nombre: 'Wide Leg Negro',
        precio: '$45.000',
        precioHot: '$33.750', // 25% discount
        img: pantalon_2
    },
    {
        nombre: 'Wide Leg Gris Tiro Bajo',
        precio: '$60.000',
        precioHot: '$45.000', // 25% discount
        img: pantalon_3
    },
];

export const data_Camisetas = [
    {
        nombre: 'CAMISETA MEDIA POLERA',
        precio: '$7.500',
        precioHot: '$5.625', // 25% discount
        img: camisetas
    }
];

export const data_Buzos = [
    {
        nombre: 'BUZO CON CIERRE',
        precio: '$40.000',
        precioHot: '$30.000', // 25% discount
        img: buzos
    },
    {
        nombre: 'BUZO CON CIERRE',
        precio: '$40.000',
        precioHot: '$30.000', // 25% discount
        img: buzo
    }
];