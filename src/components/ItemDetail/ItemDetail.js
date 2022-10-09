import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    
    const handleOnAdd = (qty) => {
        const productToAdd = {
            id, name, price, qty
        }
        console.log(productToAdd)
        alert (`Agregaste ${qty} productos`);
    }
    
    
    
    
    
  return (
    <article className='detalleItem'>
        <div className='contenedorDetalle'>
            <div className='imagenDetailProducto'>
                <picture>
                    <img src={img} alt={name} />
                </picture>
            </div>
            <div className='detalle'>
                <div className='tituloProducto'>
                    <h2>{name}</h2>
                </div>
                <h3><span className='detalleDescripcion'>{description}</span></h3>
                <h3><span className='detalleAtributo'>Precio:</span> ${price}</h3>
                <h4><span className='detalleAtributo'>Stock:</span> {stock}</h4>
                <h4><span className='detalleAtributo'>Categoría:</span> {category}</h4>
            </div>
            <ItemCount  onAdd={handleOnAdd} initial={1} stock={5} />
        </div>
    </article>
  )
}


  
  export default ItemDetail