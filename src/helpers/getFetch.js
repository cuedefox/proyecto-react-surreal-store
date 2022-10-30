const productos = [

];

export const getFetch = new Promise((resolve, reject) => {
    const url = 'www.simulacion.com';
    if(url === 'www.simulacion.com') {
        setTimeout(() => {resolve(productos)}, 2000);
    }else {
        reject('404 not found');
    }
});