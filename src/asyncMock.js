const products = [
    {
        id: '1',
    name: 'Espejo Mariam',
    price:2900,
    category: 'Espejos',
    img: '/images/espejoredoyute.jpeg',
    stock: 5,
    description: 'Descripción: Espejo tejido en Yute 40cm',
    },

    {
        id: '2',
    name: 'Espejo Amalia',
    price:2900,
    category: 'Espejos',
    img: '/images/espejomacrame.jpeg',
    stock: 5,
    description: 'Descripción: Espejo tejido en macramé natural 40cm',
    },

    {
        id: '3',
    name: 'Pie de cama',
    price:5000,
    category: 'Habitación',
    img: '/images/piecama.jpeg',
    stock: 5,
    description: 'Descripción: Pie de cama en tusro estampado y borlas en hilo de algodón 100x50 cm',
    },

    {
        id: '4',
    name: 'Almohadas Boho',
    price:3000,
    category: 'Habitación',
    img: '/images/almohadas.jpeg',
    stock: 5,
    description: 'Descripción Almohadon deco tela de tusro y detalles en lentejuelas 40x20 cm'
    },
    
    {
        id: '5',
    name: 'Frasco Marie',
    price:1900,
    category: 'Deco',
    img: '/images/frascomacrame.jpeg',
    stock: 5,
    description: 'Descripción frasco de vidriio, tejido en macrame 30x10 cm',
    },


    {
        id: '6',
    name: 'Colgante Alice',
    price:3000,
    category: 'Deco',
    img: '/images/colgantemacrame.jpeg',
    stock: 5,
    description: 'Descripción: colgante  de macramé 15x30 cm',
    },
    {
        id: '7',
    name: 'Cesto Belice',
    price:2000,
    category: 'Deco',
    img: '/images/cestomacrame.jpeg',
    stock: 5,
    description: 'Descripción: Cesto en macrame bicolor 20x20 cm',
    },

    {
        id: '8',
    name: 'Individuales Emilie',
    price:3000,
    category: 'Deco',
    img: '/images/individualesmacrame.jpeg',
    stock: 5,
    description: 'Descripción Individuales tejido en macramé natural 20cm'
    },

]
export const getProducts = ()=> {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve (products)

        }, 1000)
        
    })
 }

export const getProductById = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === id))
               
            
        },1000);
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}