import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InterfaceChargeClientele from "./ChargeClientele/Interface/InterfaceChargeClientele";
import InterfaceClient from "./Client/Interface/InterfaceClient";
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
        <Route path="/client" component={InterfaceClient} />
        <Route path="/cdc" component={InterfaceChargeClientele} />


        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
