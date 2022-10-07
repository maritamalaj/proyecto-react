const products = [
    {
        id: 1,
    name: 'Espejo Mariam',
    price:2900,
    category: 'espejos',
    img: '/images/espejoredoyute.jpeg',
    stock: 5,
    description: 'Descripcion de espejo de Yute',
    },

    {
        id: 2,
    name: 'Espejo Amalia',
    price:2900,
    category: 'espejos',
    img: '/images/espejomacrame.jpeg',
    stock: 5,
    description: 'Descripcion de espejo de macrame',
    },

    {
        id: 3,
    name: 'Pie de cama',
    price:5000,
    category: 'Habitacion',
    img: '/images/piecama.jpeg',
    stock: 5,
    description: 'descripcion de pie de cama',
    },

    {
        id: 4,
    name: 'Almohadas Boho',
    price:3000,
    category: 'Habitacion',
    img: '/images/almohadas.jpeg',
    stock: 5,
    description: 'descripcion de almohada deco'
    },
    
    {
        id: 5,
    name: 'Frasco Marie',
    price:1900,
    category: 'deco bazar',
    img: '/images/frascomacrame.jpeg',
    stock: 5,
    description: 'descripcion de frasco macrame',
    },


    {
        id: 6,
    name: 'Colgante Alice',
    price:3000,
    category: 'deco',
    img: 'images/colgantemacrame.jpeg',
    stock: 5,
    description: 'descripcion de colgante macrame',
    },
    {
        id: 7,
    name: 'Cesto Belice',
    price:2000,
    category: 'deco',
    img: '/images/cestomacrame.jpeg',
    stock: 5,
    description: 'descripcion de cesto deco',
    },

    {
        id: 8,
    name: 'Individuales Emilie',
    price:3000,
    category: 'deco',
    img: '/images/individualesmacrame.jpeg',
    stock: 5,
    description: 'descripcion de individuales deco'
    },

]
export const getProducts = ()=> {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve (products)

        }, 2000)
        
    })
 }

export const getProductoById = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(products.find(prod => {
                return prod.id === id
            }))
        },2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}