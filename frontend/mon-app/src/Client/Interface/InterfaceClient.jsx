import React from 'react'
import axios from "axios";

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
import Beneficiaires from '../Components/Virements/Bénéficiaires/Beneficiaires';
import Rib from '../Components/Comptes/RIB/Rib';


const InterfaceClient = (props) => {

    const logout = async ()=>{
        try{
         await axios.post('http://localhost:4000/api/compte/deconnexion')
         props.history.replace('/login')
        }
        catch(error){
        }
     }

    return (<div >
        <SideBar/>
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Navbar logout ={logout} />
            <Switch>
               <Route path ="/client/virements/virementbancaires" component={VirementBancaire}/>
                <Route path ="/client/cheques/typecheques" component={TypeCheques}/>
                <Route path ="/client/cartes/demande" component={DemandesCartes}/>
                <Route path ="/client/virements/historique" component={Historique}/>
                <Route path ="/client/virements/beneficiaires" component={Beneficiaires}/>
                <Route path ="/client/comptes/rib" component={Rib}/>
                <Route path ="/client/virements" component={Virements}/>
                <Route path ="/client/demandes" component={Demandes}/>
                <Route path ="/client/comptes" component={Comptes}/>
                
                <Route path ="/client/cheques" component={Cheques}/>
                <Route path ="/client/cartes" component={Cartes}/>
                <Route path="/client/main" component={TableauDeBord}/>






              
               





            </Switch>
  </main>
       
    </div>  );
}
 
export default InterfaceClient;






