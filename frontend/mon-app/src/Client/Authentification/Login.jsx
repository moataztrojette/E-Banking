import React from 'react'
const Login = () => {
    return (<div className="container_login">
    <div className="forms-containe_login">
      <div className="signin-signup_login">
        <form action="#" className="form_login">
          <font className="title_login">Votre banque en ligne</font>
          <br />
          <font face agency="Abadi Extra Light" className="title3_login">Vous suit partout 24h/24 et 7j/7</font>
          <br />
          <div className="input-field_login">
            <i className="fas fa-user" />
            <input type="text" placeholder="Identifiant" />
          </div>
          <div className="input-field_login">
            <i className="fas fa-lock" />
            <input type="password" placeholder="Mot de passe" />
          </div>
          <input type="submit" value="Connexion" className="btn_login" />
        </form>
      </div>
    </div>
    <div className="panels-container_login">
      <div className="panel_login left-panel">
        <img src="img/register.svg" className="image_login" alt="" />
      </div>
    </div>
  </div>  );
}
 
export default Login;