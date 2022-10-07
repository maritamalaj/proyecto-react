
import Item from "../Item/Item";
import './ItemList.css'

const IitemLlist= ({products, setPage}) =>{
  return(
       <div className ="cardConteiner" onClick={() => console.log('hice click en itemlist')}>
       {products.map(prod => <Item key={prod.id} {...prod} setPage={setPage}/>)}
       </div>
      ) 

} 
export default IitemLlist