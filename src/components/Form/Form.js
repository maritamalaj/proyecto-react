import Swal from "sweetalert2";
import { useState, createContext } from "react";
import '../Form/Form';
import './Form.css'

export const DataForm= createContext ({
    name:"",
    lastName:"",
    address:"",
    phone:"",
    email:"",
})

const BuyerForm = ({completeDates})=>{
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState ("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [validateEmail, setValidateEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [ coments, setComents] = useState('');



 const submit = (e) => {
    e.preventDefault ();
    if (!name || !email || !phone || !address)
        {
            Swal.fire({
                title: "complete con sus datos correctamente",
                icon: "warning",
                dangerMode: true,
        
            })
        }
        else if (email != validateEmail && email && validateEmail) { //eslint-disable-line
            Swal.fire({
            title: "Los mails deben ser iguales ",
            html: "Por favor, intente nuevamente",
            dangerMode: true,
        })
    }

    else {
        Swal.fire({
            title: "Sus  datos fueron Guardados exitosamente",
            icon: "success",
            buttons: true,
        })

    completeDates(
        name, lastName,address,phone,email
    )
    }
    }


    return (
    <div className="form-container">
         
    <form className="myForm">
    <div className='chekform' >
        <label  className="form-label">Nombre</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" value={name} pattern="[a-zA-Z ]{1,35}" onChange={(e) => setName(e.target.value)}   placeholder="Nombre" required />
        
        <label  className="form-label">Apellido</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" value={lastName} pattern="[a-zA-Z ]{1,35}" onChange={(e) => setLastName(e.target.value)}   placeholder="Apellido" required />
       
        <label  className="form-label">Telefono</label>
        <input type="number" className="form-control" id="exampleFormControlInput1" value={phone} pattern="[0-9]" onChange={(e) => setPhone(e.target.value)}   placeholder="Teléfono"required />

        <label  className="form-label">Direccion</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" value={address} pattern="[a-zA-Z ]{1,35}" onChange={(e) => setAddress(e.target.value)}   placeholder="Dirección"required />
        
        <label  className="form-label">Email</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}   id="exampleFormControlInput1" placeholder="Email" required/>

        <label  className="form-label">Email</label>
        <input type="Validate Email" className="form-control" value={validateEmail} onChange={(e) => setValidateEmail(e.target.value)}   id="exampleFormControlInput1" placeholder="Email" required/>
        
        <label  className="form-label">Comentarios de su pedido:</label>
        <textarea className="form-control" value={coments} onChange={(e) => setComents(e.target.value)} id="exampleFormControlTextarea1" rows="2" placeholder="Deje su comentario"></textarea>
     </div>
        
      
        <button className="btn-orden" onClick={submit}> Confirmar  Compra</button>
     </form>

        
     
     </div>
    )
}
export default BuyerForm