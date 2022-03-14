import React from 'react'
import Navbar from './Navbar/Navbar';
import SideBar from './SideBar/SideBar';
import {BrowserRouter , Route, Switch } from "react-router-dom"
import TableauDeBord from '../Components/Tableau_de_bord/TableauDeBord';
import Comptes from '../Components/Comptes/Comptes';
import Cheques from '../Components/Cheques/Cheques';
import Virements from '../Components/Virements/Virements';
import Demandes from '../Components/Demandes/Demandes';
import Cartes from '../Components/Cartes/Cartes';
import DemandesCartes from '../Components/Cartes/DemandesCartes/DemandesCartes';
import TypeCheques from '../Components/Cheques/TypeCheques/TypeCheques';
import VirementBancaire from '../Components/Virements/VirementBancaire/VirementBancaire';
import Historique from '../Components/Virements/Historique/Historique';


const InterfaceClient = () => {
    return (<div >
        <SideBar/>
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Navbar/>
            <Switch>
               <Route path ="/client/virements/virementbancaires" component={VirementBancaire}/>
                <Route path ="/client/cheques/typecheques" component={TypeCheques}/>
                <Route path ="/client/cartes/demande" component={DemandesCartes}/>
                <Route path ="/client/virements/historique" component={Historique}/>
                <Route path="/client/main" component={TableauDeBord}/>
                <Route path ="/client/virements" component={Virements}/>
                <Route path ="/client/demandes" component={Demandes}/>
                <Route path ="/client/comptes" component={Comptes}/>
                <Route path ="/client/cheques" component={Cheques}/>
                <Route path ="/client/cartes" component={Cartes}/>





              
               





            </Switch>
  </main>
       
    </div>  );
}
 
export default InterfaceClient;






