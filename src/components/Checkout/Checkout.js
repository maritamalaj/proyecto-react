
import { useState, useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import swal from "sweetalert"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import '../Checkout/Checkout.css'
import { useNavigate } from "react-router-dom"
import BuyerForm from "../Form/Form"
import Loader from '../Loader/Loader';
import '../Checkout/Checkout';


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const  [buyerData, setBuyerData] = useState (false)
    const [dataBuy, setDataBuy] = useState ({})

    const completeDates = (name, lastName, address, phone, email) =>{
        setDataBuy ({name, lastName, address, phone, email})
        setBuyerData (true)
    }
    const navigate = useNavigate()
    const { cart, totalQuantity, clearCart } = useContext(CartContext)
    
    
    


    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: dataBuy,
                items: cart,
                total: totalQuantity,
            }
            
            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 1500)


                
                const alert = () =>{
                    swal({
                      title:"Orden Creada exitosamente, Gracias por elegirnos!.", 
                      text:`El id de su orden es: ${orderAdded.id}`,
                      icon: "success"
                     }) }
                alert()
               

            } else {
               
               const alert = () =>{
                swal({
                  title:"Producto Sin Stock" ,
                  
                  icon: "danger"
                 }) }
        
              alert ()
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return     <Loader />
    }    

    return (    
        <div>
            <h1>Completa los datos para generar la orden.</h1>
            <BuyerForm completeDates={completeDates}/>
            { buyerData?<button className="btn-orden" onClick={createOrder}>Generar Pedido</button> 
            : ""}
        </div>
    )


 

}    
export default Checkout

 