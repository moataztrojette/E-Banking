import React from 'react'
import axios from "axios";

import Navbar from './Navbar/Navbar';
import SideBar from './SideBar/SideBar';
import {Route, Switch } from "react-router-dom"
import Virements from '../Gestion_admin/Clients/Comptes/ProfilClient/Historique/Virements/Virements';
import TableauDeBord from '../Gestion_admin/Tableau_de_bord/TableauDeBord';
import ListeAgences from '../Gestion_admin/Agences/ListeAgences/ListeAgences';
import Clients from '../Gestion_admin/Clients/Clients';
import ListeComptes from '../Gestion_admin/Clients/Comptes/ListeComptes/ListeComptes';
import TableauDeBordClient from '../Gestion_admin/Clients/Comptes/ProfilClient/TableauDeBordClient'
import TypeClient from '../Gestion_admin/Clients/TypeClient/TypeClient';



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
            <Route path="/admin/clients/comptes" component={ListeComptes}/>
            <Route path="/admin/clients/type" component={TypeClient}/>
            <Route path="/admin/profil/:id" component={TableauDeBordClient}/>
            <Route path="/admin/clients" component={Clients}/>
            <Route path="/admin/agences" component={ListeAgences}/>
            <Route path="/admin/main" component={TableauDeBord}/>





            </Switch>
  </main>
       
    </div>  );
}
 
export default InterfaceAdmin;






