import {React,useState,useEffect} from "react";
import axios from "axios";

import Navbar from './Navbar/Navbar';
import SideBar from './SideBar/SideBar';
import {Route, Switch } from "react-router-dom"
import Demandes from '../Demandes/Demandes';
import TableauDeBordClient from '../Comptes/ProfilClient/Tableau_de_bord/TableauDeBordClient';
import Virements from '../Comptes/ProfilClient/Tableau_de_bord/Historique/Virements/Virements';
import ListeComptes from '../Comptes/ListeComptes/ListeComptes';
import Liste_demande_rdv from '../Demandes/Demande_rendez-vous/Liste_demande_rdv';
import TableauDeBord from '../Tableau_de_bord/TableauDeBord';
import ListeDemandeFermetureComptes from '../Demandes/Demande_fermeture_comptes/ListeDemandeFermetureComptes';
import Liste_demande_carnet_cheques from '../Demandes/Demande_carnet_cheques/Liste_demande_carnet_cheques';
import Carte_bancaire from '../Demandes/Demande_carte_bancaire/Carte_bancaire';
import Liste_type_carte_bancaire from '../Demandes/Demande_carte_bancaire/Ajouter_type_carte_bancaire/Liste_type_carte_bancaire';
import Liste_demande_carte_bancaire from '../Demandes/Demande_carte_bancaire/Liste_demande_carte_bancaire/Liste_demande_carte_bancaire';




const InterfaceChargeClientele = (props) => {


    
    const [user, setUser] = useState(null);

useEffect(()=>{
    axios.get("http://localhost:4000/api/compte/verife").then((res)=>{
        setUser(res.data)
    }).catch((error)=>{
        if(error.response.status === 403){
            props.history && props.history.replace('/cdc/connexion');
            setUser(null)
        }
    } )
},[])


    const logout = async ()=>{
        try{
         await axios.post('http://localhost:4000/api/cdc/deconnexion')
         props.history.replace('/cdc/connexion')
        }
        catch(error){
        }
     }

    return (<div >
        <SideBar logout ={logout}/>
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Navbar logout ={logout} />
            <Switch>
            <Route path="/cdc/demandes/cartes/choix/type_carte" component={Liste_type_carte_bancaire}/>
            <Route path="/cdc/demandes/cartes/choix/liste" component={Liste_demande_carte_bancaire}/>
            <Route path="/cdc/profil/historique/:id" component={Virements}/>
            <Route path="/cdc/demandes/cartes/choix" component={Carte_bancaire}/>
            <Route path="/cdc/demandes/fermeture" component={ListeDemandeFermetureComptes}/>
            <Route path="/cdc/demandes/carnet" component={Liste_demande_carnet_cheques}/>
         
            <Route path="/cdc/demandes/rdv" component={Liste_demande_rdv}/>
            <Route path="/cdc/profil/:id" component={TableauDeBordClient}/>
            <Route path="/cdc/demandes" component={Demandes}/>

            <Route path="/cdc/comptes" component={ListeComptes}/>
            <Route path="/cdc/main" component={TableauDeBord}/>




            </Switch>
  </main>
       
    </div>  );
}
 
export default InterfaceChargeClientele;






