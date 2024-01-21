import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alert";
import { useState } from "react";

const Registro = () => {
  const [alert, setAlert] = useState({ error: "", msg: "", color: "" });
  return (
    <>  
        <h1 style={{fontWeight:'700'}}>Crea una cuenta</h1>
        <div className="containerIcons my-3">
          <SocialButton icon="fa-brands fa-facebook"/>
          <SocialButton icon="fa-brands fa-github"/>
          <SocialButton icon="fa-brands fa-linkedin-in"/>
        </div>
        <p style={{fontWeight:'700'}}>O usa tu email para registrarte</p>
        <Formulario setAlert={setAlert}/>
        {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
    </>
  )
}

export default Registro;
