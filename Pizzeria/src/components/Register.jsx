import { useState } from "react";

function validPasword(password){
  let valid = false
  if (password.length >= 6) {
    valid = true
  }
  return valid
}

function validarInputs(email, password, passwordConfirm) {
  let valid = false
  if (email && password && passwordConfirm) { // Si no estan vacios
    if (validPasword(password)) {  //Contraseña valida (>6)
      if (password == passwordConfirm) {  //y si las contraseñas son iguales
        valid = true
      }
    }  
  }
  return valid
}

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
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
          <div class="mb-3">
            <p>Confirma tu contraseña</p>
            <input
              type="password"
              id="password_confirm"
              placeholder="Confira tu contraseña"
              class="form-control"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <p
              className={
                password !== passwordConfirm ? "text-danger" : "d-none"
              }
            >
              *Las contraseñas no coinciden
            </p>
          </div>
          <button
            type="button"
            class="btn btn-primary w-100"
            onClick={()=>
              validarInputs(email, password, passwordConfirm) ?
                alert("Exito al registrar usuario")
                : alert("Error al validar datos o hay datos faltantes") 
            }
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
