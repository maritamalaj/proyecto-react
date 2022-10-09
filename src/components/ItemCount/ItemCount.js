import {useState} from 'react'
import  './ItemCount.css'



const ItemCount = ({stock , initial , onAdd}) => {

    const [qty, setQty] = useState (initial)

    const increment = () => {
        if (qty < stock) {
        setQty (qty +1)
        }
    }

    const decrement = () => {
        if (qty > 0) {
            setQty (qty -1)
         }

    }
    return (
        <div>
          

            <div className="contador">
                <button className="elements" onClick={decrement}> - </button> 
                <h2 className="elements">{qty}</h2>
                <button  className="elements" onClick={increment}> + </button>
            </div>
            <div>
                <button className="elements" onClick={() => onAdd(qty)}>Agregar al carrito</button>
            </div>
        </div>
    )
} 




export default ItemCount