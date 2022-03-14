import React from 'react'
import Navbar from './Navbar/Navbar';
import SideBar from './SideBar/SideBar';
import {BrowserRouter , Route, Switch } from "react-router-dom"
import Demandes from '../Demandes/Demandes';
import ListeComptes from '../Comptes/ListeComptes';





const InterfaceChargeClientele = () => {
    return (<div >
        <SideBar/>
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Navbar/>
            <Switch>
      
                <Route path="/cdc/demandes" component={Demandes}/>
                <Route path="/cdc/comptes" component={ListeComptes}/>
            </Switch>
  </main>
       
    </div>  );
}
 
export default InterfaceChargeClientele;






