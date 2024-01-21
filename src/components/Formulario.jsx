import React from "react";
import { useState } from "react";

const Formulario = ({setAlert}) => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmarPass, setConfirmarPass] = useState("")

  //Estados de Error 
  //const [error, setError] = useState(false);
    
  //Estados de Error confirmación de email
  const [errorPass, setErrorPass] = useState(false);

  //estado Formulario enviado
  //const [enviado, setEnviado] = useState(false);

  //Esta función evita la recarga del sitio después de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();

    //VALIDACIÓN CAMPOS VACÍOS
    if(nombre === '' || email ==='' || pass ==='' || confirmarPass === '' || pass !== confirmarPass){
      //setError(true);
      setAlert({
        error: true,
        msg: "Completa todos los campos !",
        color: "danger",
      });
      confirmarPassword();
      //setEnviado(false);
      return;
    }

    //LIMPIA CAMPOS DESPUÉS DEL ENVÍO
    setNombre("");
    setEmail("");
    setPass("");
    setConfirmarPass("");
    //setError(false);
    setErrorPass(false);
    //setEnviado(true);
    setAlert({ error: false, msg: "Cuenta creada exitosamente !", color: "success" });
  }

    //VALIDACIÓN DE PASSWORD
    const confirmarPassword = () => {

      if(pass !== confirmarPass){
        setErrorPass(true);
        //setError(false);
        //setEnviado(false);
        return;
      }

      setErrorPass(false);
    }

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {/* {error ? <p style={{color:'red'}}>Porfavor complete todos los campos</p> : null}
        {enviado ? <p style={{ color: 'green' }}>¡Formulario enviado exitosamente!</p> : null} */}
        <div className="form-group mb-3">
          <input style={{fontWeight:'500'}}
            type="text" 
            name="nombre"
            placeholder="Nombre" 
            className="form-control" 
            onChange={(e) => setNombre(e.target.value)} //setNombre guarda el estado "nombre" con el valor actual del campo
            value={nombre} //Asigna el valor del campo de entrada al estado "nombre"
            /> 
        </div>
        <div className="form-group mb-3">
          <input style={{fontWeight:'500'}}
            type="email" 
            name="email"
            placeholder="Email" 
            className="form-control" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}/>
        </div>
        <div className="form-group mb-3">
          <input style={{fontWeight:'500'}}
            type="password" 
            name="password"
            placeholder="Contraseña" 
            className="form-control" 
            onChange={(e) => setPass(e.target.value)} 
            value={pass}/>
        </div>
        <div className="form-group mb-3">
          <input style={{fontWeight:'500'}}
            type="password" 
            name="confirmar-password"
            placeholder="Confirmar contraseña" 
            className="form-control" 
            onChange={(e) => setConfirmarPass(e.target.value)} 
            value={confirmarPass}
          /> 
          {errorPass ? <p style={{color:'red'}}>La contraseña no coincide</p> : null}
        </div>
        <button type="submit" className="w-100 btn btn-success">Registrarse</button>
      </form>
    </>
  );
};

export default Formulario;
