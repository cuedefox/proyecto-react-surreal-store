const productos = [
    {'id': 1, 'name': '1987', 'description': 'Mejor año del mundo', 'category': 'tiempo' ,'stock': 7, 'price': 1987, 'pictureUrl': '1987.jpg'},
    {'id': 2, 'name': 'Amor', 'description': 'El amor (no) se puede comprar', 'category': 'sentimientos' ,'stock': 1, 'price': 782, 'pictureUrl': 'amor.jpg'},
    {'id': 3, 'name': 'Andromeda', 'description': 'Ideal para cuando tu hij@ t̴͇͎͎̓͘͠i̸̼͎̿̀̐ë̵͙͎͓́̒͊n̴̺͎̼͆͑̽ë̵͕̼͚́͘͝ h̴͎̺͎́̚̚á̴͉̘̺̕͠m̸͕͚̓͛͝b̵̢͉͍̽̈́͠r̴̪͎̾̀̈́e̵͖̘͇͋̾͑', 'category': 'cosas' ,'stock': 10, 'price':1, 'pictureUrl': 'andromeda.jpg'},
    {'id': 4, 'name': 'Basura', 'description': 'Puede ser', 'category': 'cosas' ,'stock': 99, 'price': 5, 'pictureUrl': 'basura.jpg'},
    {'id': 5, 'name': 'Cono', 'description': 'Si, cono', 'category': 'cosas' ,'stock': 12, 'price': 73, 'pictureUrl': 'cono.webp'},
    {'id': 6, 'name': 'Depresion', 'description': 'No', 'category': 'sentimientos' ,'stock': 20, 'price': 68, 'pictureUrl': 'depresion.jpg'},
    {'id': 7, 'name': 'Dificultad', 'description': 'Cuando es muy facil', 'category': 'sentimientos' ,'stock': 32, 'price': 8623, 'pictureUrl': 'dificultad.webp'},
    {'id': 8, 'name': 'Dragon Ball Z', 'description': 'Star Wars', 'category': 'cosas' ,'stock': 13, 'price': 578, 'pictureUrl': 'dragon-ball-z.jpg'},
    {'id': 9, 'name': 'Gratis', 'description': 'Roberto dijo que nada es gratis en la vida', 'category': 'tiempo' ,'stock': 99, 'price': 9999, 'pictureUrl': 'gratis.jpg'},
    {'id': 10, 'name': 'Katog', 'description': 'Tu mascota favorita', 'category': 'cosas' ,'stock': 10, 'price': 861, 'pictureUrl': 'katog.webp'},
    {'id': 11, 'name': 'Lasagna', 'description': 'Todo el mundo ama la Lasagna', 'category': 'cosas' ,'stock': 3, 'price': 1300, 'pictureUrl': 'lasagna.webp'},
    {'id': 12, 'name': 'Melancolia', 'description': 'Otoño', 'category': 'sentimientos' ,'stock': 47, 'price': 4321, 'pictureUrl': 'melancolia.webp'},
    {'id': 13, 'name': 'Multicolor', 'description': 'Mucho color', 'category': 'colores' ,'stock': 46, 'price': 255, 'pictureUrl': 'multicolor.jpg'},
    {'id': 14, 'name': 'Not a Cube', 'description': 'This is not a Cube', 'category': 'cosas' ,'stock': 78, 'price': 1001, 'pictureUrl': 'not-a-cube.jpg'},
    {'id': 15, 'name': 'Oculus', 'description': 'Miro', 'category': 'cosas' ,'stock': 30, 'price': 2001, 'pictureUrl': 'oculus.webp'},
    {'id': 16, 'name': 'Pagar impuestos', 'description': 'No los evadas', 'category': 'cosas' ,'stock': 5, 'price': 987, 'pictureUrl': 'pagar-impuestos.webp'},
    {'id': 17, 'name': 'Pasto', 'description': 'Usado, pero en buenas condiciones', 'category': 'cosas' ,'stock': 99, 'price': 573, 'pictureUrl': 'pasto.webp'},
    {'id': 18, 'name': 'Roboto', 'description': 'Tecnologico', 'category': 'cosas' ,'stock': 1, 'price': 1000, 'pictureUrl': 'roboto.webp'},
    {'id': 19, 'name': 'Violeta', 'description': 'Combinalo con negro, porfavor', 'category': 'colores' ,'stock': 4, 'price': 177, 'pictureUrl': 'violeta.png'},
    {'id': 20, 'name': 'Vortice', 'description': 'Voragine', 'category': 'cosas' ,'stock': 68, 'price': 609, 'pictureUrl': 'vortice.jpg'},
    {'id': 21, 'name': '3 Horas', 'description': 'Te alcanza para ver una peli', 'category': 'tiempo' ,'stock': 3, 'price': 333, 'pictureUrl': '3horas.jpg'},
    {'id': 22, 'name': 'Verde', 'description': 'Un color relajante, le hara pensar en Kromer', 'category': 'colores' ,'stock': 7, 'price': 214, 'pictureUrl': 'verde.png'},
    {'id': 23, 'name': 'Rojo', 'description': 'Comprar si marceline tiene hambre', 'category': 'colores' ,'stock': 15, 'price': 156, 'pictureUrl': 'rojo.png'}
];

export const getFetch = new Promise((resolve, reject) => {
    const url = 'www.simulacion.com';
    if(url === 'www.simulacion.com') {
        setTimeout(() => {resolve(productos)}, 2000);
    }else {
        reject('404 not found');
    }
});