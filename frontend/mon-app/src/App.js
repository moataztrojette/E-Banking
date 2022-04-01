import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Authentification_admin from "./Admin/Gestion_admin/Authentification/Authentification_admin";
import InterfaceAdmin from "./Admin/Interface/InterfaceAdmin";
import Connexion from "./ChargeClientele/Authentification/Connexion";
import Inscription from "./ChargeClientele/Authentification/Inscription";
import InterfaceChargeClientele from "./ChargeClientele/Interface/InterfaceChargeClientele";
import Login from "./Client/Authentification/Login";
import InterfaceClient from "./Client/Interface/InterfaceClient";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/cdc/inscription" component={Inscription}/>
        <Route path="/admin/connexion" component={Authentification_admin}/>
        <Route path="/cdc/connexion" component={Connexion}/>

        <Route path="/client" component={InterfaceClient} />
        <Route path="/admin" component={InterfaceAdmin} />
        <Route path="/cdc" component={InterfaceChargeClientele} />
        <Route path="/" component={Login} />



        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
