function Register() {
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
            />
          </div>
          <div class="mb-3">
            <p>Ingresa tu contraseña</p>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <p>Confirma tu contraseña</p>
            <input
              type="password"
              id="password_confirm"
              placeholder="Confira tu contraseña"
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
