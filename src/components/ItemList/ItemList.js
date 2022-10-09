
import Item from "../Item/Item";
import './ItemList.css'

const ItemLlist= ({products, setPage}) =>{

  return(
       <div className ="cardConteiner" >
       {products.map(prod => <Item key={prod.id} id={prod.id} {...prod} setPage={setPage}/>)}
       </div>
      ) 

} 
export default ItemLlist


