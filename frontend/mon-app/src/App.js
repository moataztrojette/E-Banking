import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InterfaceChargeClientele from "./ChargeClientele/Interface/InterfaceChargeClientele";
import Login from "./Client/Authentification/Login";
import InterfaceClient from "./Client/Interface/InterfaceClient";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/client" component={InterfaceClient} />
        <Route path="/cdc" component={InterfaceChargeClientele} />


        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
