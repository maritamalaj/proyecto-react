
import Item from "../Item/Item";
import './ItemList.css'

const ItemLlist= ({products}) =>{

  return(
       <div className ="cardConteiner" >
       {/*products.map(prod => <Item key={prod.id} id={prod.id} {...prod} setPage={setPage}/>)}*/}
              {products.map(prod => <Item key={prod.id} {...prod}/>)}
       </div>
      ) 

} 
export default ItemLlist


