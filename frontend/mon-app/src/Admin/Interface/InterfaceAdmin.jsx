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
import Clients_par_agence from '../Gestion_admin/Agences/Clients_par_agence/Clients_par_agence';
import Clients_par_type from '../Gestion_admin/Clients/TypeClient/Clients_par_type/Clients_par_type';
import ListeComptesCdc from '../Gestion_admin/ChargeClientele/Comptes/ListeCompteCdc/ListeComptesCdc';
import Comptes from '../Gestion_admin/ChargeClientele/Comptes/Comptes';
import TableauDeBordCdc from '../Gestion_admin/ChargeClientele/Comptes/ProfilCdc/TableauDeBordCdc';
import Consulter_les_comptes_bancaires_créés from '../Gestion_admin/ChargeClientele/Comptes/ProfilCdc/Choix/Consulter_les_comptes_bancaires_créés/Consulter_les_comptes_bancaires_créés';
import Consulter_les_carnets_chéques_validées from '../Gestion_admin/ChargeClientele/Comptes/ProfilCdc/Choix/Consulter_les_carnets_cheques_validees/Consulter_les_carnets_chéques_validées';
import Consulter_les_cartes_bancaires_validées from '../Gestion_admin/ChargeClientele/Comptes/ProfilCdc/Choix/Consulter_les_cartes_bancaires_validées/Consulter_les_cartes_bancaires_validées';


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
        <SideBar  logout ={logout}/>
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Navbar logout ={logout} />
            <Switch>
            <Route path="/admin/cdc/liste/profil/carnet_valider/:id" component={Consulter_les_carnets_chéques_validées}/>
            <Route path="/admin/cdc/liste/profil/carte_valider/:id" component={Consulter_les_cartes_bancaires_validées}/>
            <Route path="/admin/cdc/liste/profil/compte_créés/:id" component={Consulter_les_comptes_bancaires_créés}/>
            <Route path="/admin/clients/agence/comptes/:id" component={ListeComptes}/>
            <Route path="/admin/agences/client/liste/:id" component={Clients_par_agence}/>

            <Route path="/admin/clients/type/liste/:id" component={Clients_par_type}/>
            <Route path="/admin/profil/historique/:id" component={Virements}/>
            <Route path="/admin/cdc/liste/profil/:id" component={TableauDeBordCdc}/>
            <Route path="/admin/clients/comptes" component={ListeComptes}/>

            <Route path="/admin/cdc/liste/:id" component={ListeComptesCdc}/>
            <Route path="/admin/clients/type" component={TypeClient}/>
            <Route path="/admin/profil/:id" component={TableauDeBordClient}/>


            <Route path="/admin/clients" component={Clients}/>
            <Route path="/admin/agences" component={ListeAgences}/>
            <Route path="/admin/cdc" component={Comptes}/>



            
            <Route path="/admin/main" component={TableauDeBord}/>





            </Switch>
  </main>
       
    </div>  );
}
 
export default InterfaceAdmin;






