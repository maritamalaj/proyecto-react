
import { useState, useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import swal from "sweetalert"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'

import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)

 
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState ("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [ coments, setComents] = useState('')



    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: {name},
                    lastname: {lastName},
                    address: {address},
                    phone: {phone},
                    mail: {email},
                    coments:{coments},
                },
                items: cart,
                total: total
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
                }, 3000)


                //setNotification('success', `El id de su orden es: ${orderAdded.id}`)
                const alert = () =>{
                    swal({
                      title:"Orden Creada.", 
                      text:`El id de su orden es: ${orderAdded.id}`,
                      icon: "success"
                     }) }
                alert()
                clearCart()

            } else {
               //setNotification('error','hay productos que estan fuera de stock')
               const alert = () =>{
                swal({
                  title:"Sin Stock" ,
                  
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
        return <h1>Se esta generando su orden...</h1>
    }

    return (
        <div>
             <h1>Completa con tus datos para generar la orden.</h1>
        <form className="myForm">
        <div className='myForm1' >
            <label  className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={name} onChange={(e) => setName(e.target.value)}   placeholder="Nombre" />
            
            <label  className="form-label">Apellido</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={lastName} onChange={(e) => setLastName(e.target.value)}   placeholder="Apellido" />
           
            <label  className="form-label">Telefono</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" value={phone} onChange={(e) => setPhone(e.target.value)}   placeholder="Teléfono" />

            <label  className="form-label">Direccion</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={address} onChange={(e) => setAddress(e.target.value)}   placeholder="Dirección" />
            
            <label  className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}   id="exampleFormControlInput1" placeholder="Email" />
            
            <label  className="form-label">Comentarios de su pedido:</label>
            <textarea className="form-control" value={coments} onChange={(e) => setComents(e.target.value)} id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
            
          
            <button className='myFormbutton' onClick={createOrder}> Confirmar Orden de Compra</button>
        </form>

            
         
        </div>
    )
}

export default Checkout

/*  <div className="myForm1">
                <h3>Pedido:</h3>
                <ul className='myFormul'>
                    {cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <li>{prod.titulo}</li>
                                <li> {prod.quantity}</li>


                            </div>

                        )
                    })}


                    <li className='myFormsepar'>-------------------------------------------</li>
                    <li className='myFormli'>Cantidad de productos: {totalQuantity}</li>

                    <li className='myFormli'>Valor total: $ {total(cart)} </li>

                </ul>
            
            </div>*/
            


