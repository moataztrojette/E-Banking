import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InterfaceClient from "./Client/Interface/InterfaceClient";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
        <Route path="/client" component={InterfaceClient} />

        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
