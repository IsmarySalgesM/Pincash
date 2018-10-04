// Timeout de la cortina
window.onload = () => {
    setTimeout(function() {
        const courtainContainer = document.getElementById('courtainContainer');
        courtainContainer.style.visibility = 'hidden';
        courtainContainer.style.opacity = '0';
    }, 1000);
};

// Diseño de la cortina
courtainContainer.innerHTML =
    `
<div class="row">
  <div class="col-12 text-center">
    <img class="whiteLogo topRow animated bounceInDown text-center" src="./src/img/logoblanco.png" alt="Logo">
  </div>
</div>
<div class="row">
  <div class="col-12 mt-3">
    <h1 class="titleWelcome animated bounceInUp text-center">PINCASH</h1>
  </div>
</div>
`;

// Página del login
login.innerHTML =
    `
<div class="row">
  <div class="col-12 text-center">
    <img class="logocolor topRow" src="./src/img/logocolor.png" alt="Logo">
  </div>
</div>
<div class="row">
  <div class="col-12 mt-3">
    <h1 class="titleLogin text-center">PINCASH</h1>
  </div>
</div>
<div class="row">
  <div class="col-12 text-center">
    <p class="noAcc">¿No tienes cuenta?</p>
    <button type="button" class="btn regist mb-1" data-toggle="modal" data-target="#signUp">Regístrate</button>
    <div class="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="signUpLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="signUpLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
<div class="row">
  <div class="col-12">
    <button type="button" class="btn mailLogin" data-toggle="modal" data-target="#signIn">COMIENZA</button>
<div class="modal fade" id="signIn" tabindex="-1" role="dialog" aria-labelledby="signInLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="signInLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</row>
<div class="row text-center">
  <div class="col-12 text-center">
    <p class="option text-center">o ingresa con</p>
  </div>
</row>
<div class="row">
  <div class="col">
  <button type="button" class="btn fbBtn" onclick="loginFacebook()">Facebook</button>
  <button type="button" class="btn googleBtn" onclick="loginGoogle()">Google</button>
  </div>
</row>
`;