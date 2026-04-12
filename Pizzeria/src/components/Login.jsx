import { useState } from "react";

function validPasword(password){
  let valid = false
  if (password.length >= 6) {
    valid = true
  }
  return valid
}

function validarInputs(email, password) {
  let valid = false
  if (email && password ) { // Si no estan vacios
    if (validPasword(password)) {  //Contraseña valida (>6)
        valid = true
    }  
  }
  return valid
}

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div class="container m-4">
      <div class="card shadow p-4">
        <h2 class="text-center mb-4">Crear cuenta</h2>
        <form action="#" method="post">
          <div class="mb-3">
            <p>Ingresa tu correo</p>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              class="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <p>Ingresa tu contraseña</p>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              class="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p
              className={
                validPasword(password) || !password ? "d-none" : "text-danger"
              }
            >
              *La contraseña debe contener un mínimo de 6 caracteres
            </p>
          </div>

          <button
            type="button"
            class="btn btn-primary w-100"
            onClick={()=>
              validarInputs(email, password) ?
                alert("Exito al iniciar sesión")
                : alert("Correo o contraseña invalidos") 
            }
          >
            Ingresar 
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
