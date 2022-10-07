import './ItemDetail.css'
import '../ItemCount/ItemCount'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    
    const handleOnAdd = (qty) => {
        const productToAdd = {
            id, name, price, qty
        }
        console.log(productToAdd)
    }
    
    
    
    
    return (
      <div className='detalleItem'>
          <div className='tituloProducto'>
              <h2>{name} NAME</h2>
          </div>
          <div className='contenedorDetalle'>
              <div className='imagenProducto'>
                  IMAG
                  <img src={img} alt={name} />
              </div>
              <div>
                 <p className='detalle'>
                   DESCIRPTION:{description}
                 </p>
                 <p className='Info'>
                    CATEGORIA: {category}
                 </p>
                 <p className='Info'>
                    Precio: {price}
                 </p>
             </div>
          </div>
          <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
          </footer>
      </div>
    )
  }
  



  
  export default ItemDetail