import React from 'react'
import Navbar from './Navbar/Navbar';
import SideBar from './SideBar/SideBar';
import {BrowserRouter , Route, Switch } from "react-router-dom"
import Demandes from '../Demandes/Demandes';
import TableauDeBordClient from '../Comptes/ProfilClient/Tableau_de_bord/TableauDeBordClient';
import Virements from '../Comptes/ProfilClient/Tableau_de_bord/Historique/Virements/Virements';
import ListeComptes from '../Comptes/ListeComptes/ListeComptes';





const InterfaceChargeClientele = () => {
    return (<div >
        <SideBar/>
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Navbar/>
            <Switch>
            <Route path="/cdc/profil/historique/:id" component={Virements}/>
            <Route path="/cdc/profil/:id" component={TableauDeBordClient}/>
            <Route path="/cdc/comptes" component={ListeComptes}/>
            <Route path="/cdc/demandes" component={Demandes}/>

            </Switch>
  </main>
       
    </div>  );
}
 
export default InterfaceChargeClientele;






