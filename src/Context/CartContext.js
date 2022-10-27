import { useState, useEffect, createContext} from "react";




export const CartContext = createContext({

    cart: [],
    totalQuantity: 0
})
export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)
  
    
    useEffect (() =>{
       const totalQty = getQuantity()
        setTotalQuantity (totalQty)

    }, [cart])

    useEffect(() => {
        const total = getTotal()
        setTotal(total)
    }, [cart])

   
    const addItem = (productToAdd, quantity) => {
        if (!isInCart (productToAdd.id)) {
            productToAdd.quantity= quantity
           setCart([...cart , productToAdd])
        }else{
         const cartUpdated= cart.map (prod =>{
            if(prod.id === productToAdd.id) {
                const productUpdated = {
                    ...prod,
                    quantity: quantity
                }

                return productUpdated
            } else {
                return prod
            }
        })

        setCart(cartUpdated)

         
      }
        
    }


    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id)=>{
        const cartWithoutProduct = cart.filter(prod=> prod.id !==id)
        setCart (cartWithoutProduct)

    }

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity} )
        return accu
    }

    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })    
        return accu
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity =(id) =>{
        const product = cart.find (prod => prod.id ===id )
       
        return product?.quantity
        
      
    }
 

 return (
        <CartContext.Provider value={{ cart, total, addItem, removeItem, totalQuantity, getProductQuantity, clearCart, isInCart, getQuantity}}>
        {children}
         </CartContext.Provider>
    )

    
}




/*import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({

    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const Swal = require()

    useEffect(() => {
        const totalQty = getQuantity()
        const totalPriceFinal = getTotalPrice()
        setTotalQuantity(totalQty)
        setTotalPrice(totalPriceFinal)
      }, [cart])
      
      const addItem = (productToAdd) => {
  
          if (!isInCart(productToAdd.id)) {
              setCart([...cart, productToAdd])
              Swal.fire({
                  background: '#ffffff',
                  color: '#001fff',
                  position: 'center',
                  icon: 'success',
                  iconColor: '#11cf00',
                  title: 'Agregado!',
                  html: <h4>Se agregaron "{productToAdd.qty}" {productToAdd.name} al carrito</h4>,
                  showConfirmButton: false,
                  timer: 2500
                })
          } else {
              Swal.fire({
                  background: '#ffffff',
                  color: '#001fff',
                  position: 'center',
                  icon: 'error',
                  iconColor: '#ff0000',
                  title: 'Repetido!',
                  html: <h4>El producto {productToAdd.name} ya se encuetra en el carrito</h4>,
                  showConfirmButton: false,
                  timer: 2500
                })
          }
      }
  
      const removeItem = (id) => {
          const cartWithoutProduct = cart.filter(prod => prod.id !== id)
          setCart(cartWithoutProduct)
      }
  
      const clearCart = () => setCart([])
  
  
  
      const isInCart = (id) => {
          return cart.some(prod => prod.id === id)
      }
  
      const getQuantity = () => {
          let acum = 0
  
          cart.forEach(prod => {acum += prod.qty} )
          return acum
      }
  
      const getTotalPrice = () => {
          let total = 0
  
          cart.forEach(prod => {total += (prod.qty * prod.price)})
          return total
      }
      
      return (
          <CartContext.Provider value={{cart , addItem, removeItem, clearCart, totalQuantity, totalPrice}}>
              {children}
          </CartContext.Provider>
      )
  }*/