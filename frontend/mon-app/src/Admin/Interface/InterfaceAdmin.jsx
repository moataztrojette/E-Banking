import React from 'react'
import axios from "axios";

import Navbar from './Navbar/Navbar';
import SideBar from './SideBar/SideBar';
import {Route, Switch } from "react-router-dom"
import Virements from '../Gestion_client/Comptes/ProfilClient/Tableau_de_bord/Historique/Virements/Virements';
import ListeComptes from '../Gestion_client/Comptes/ListeComptes/ListeComptes';
import TableauDeBordClient from '../Gestion_client/Comptes/ProfilClient/Tableau_de_bord/TableauDeBordClient';
import TableauDeBord from '../Gestion_admin/Tableau_de_bord/TableauDeBord';





const InterfaceAdmin = (props) => {
    const logout = async ()=>{
        try{
         await axios.post('http://localhost:4000/api/admin/deconnexion')
         props.history.replace('/admin/connexion')
        }
        catch(error){
        }
     }

    return (<div >
        <SideBar/>
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Navbar logout ={logout} />
            <Switch>
            <Route path="/admin/profil/historique/:id" component={Virements}/>
            <Route path="/admin/profil/:id" component={TableauDeBordClient}/>
            <Route path="/admin/comptes" component={ListeComptes}/>
            <Route path="/admin/main" component={TableauDeBord}/>




            </Switch>
  </main>
       
    </div>  );
}
 
export default InterfaceAdmin;






