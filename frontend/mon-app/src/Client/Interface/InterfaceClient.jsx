import {React,useState,useEffect} from "react";
import axios from "axios";

import Navbar from './Navbar/Navbar';
import SideBar from './SideBar/SideBar';
import { Route, Switch } from "react-router-dom"
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
import Parametre from '../Components/Parametre/Parametre';
import ChangePasword from '../Components/Parametre/Components/ChangePassword/ChangePassword';
import ListeDemandes from '../Components/Demandes/ListeDemandes/ListeDemandes';
import Liste_demande_rdv from '../Components/Demandes/ListeDemandes/Liste_demande_rdv/Liste_demande_rdv';
import Liste_demande_carnet_cheque from '../Components/Demandes/ListeDemandes/liste_demande_carnet_cheque/Liste_demande_carnet_cheque';
import Demande_carte_bancaire from '../Components/Demandes/Demande_carte_bancaire/Demande_carte_bancaire';
import Type_carte_bancaire from '../Components/Demandes/Demande_carte_bancaire/Type_carte_bancaire/Type_carte_bancaire';
import Liste_demande_carte_bancaire from '../Components/Demandes/ListeDemandes/liste_demande_carte_bancaire/Liste_demande_carte_bancaire';
import Simulateur_credit from '../Components/Simulateur_credit/Simulateur_credit';
import Liste_virements_envoyés from "../Components/Virements/Bénéficiaires/Liste_virements_envoyés/Liste_virements_envoyés";
import Liste_virements_reçus from "../Components/Virements/Bénéficiaires/Liste_virements_reçus/Liste_virements_reçus";



const InterfaceClient = (props) => {

    const [user, setUser] = useState(null);

useEffect(()=>{
    axios.get("http://localhost:4000/api/compte/verife").then((res)=>{
        setUser(res.data)
    }).catch((error)=>{
        if(error.response.status === 403){
            props.history && props.history.replace('/');
            setUser(null)
        }
    } )
},[])



    const logout = async ()=>{
        try{
         await axios.post('http://localhost:4000/api/compte/deconnexion')
         props.history.replace('/login')
        }
        catch(error){
        }
     }

  



    return (<div >
        <SideBar logout ={logout}/>
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Navbar logout ={logout} />
            <Switch>
                <Route path ="/client/virements/beneficiaires/reçus/:id" component={Liste_virements_reçus}/>
                <Route path ="/client/demandes/carte/bancaire/type/:id" component={Type_carte_bancaire}/>
                <Route path ="/client/virements/virementbancaires" component={VirementBancaire}/>
                <Route path ="/client/virements/beneficiaires/:id" component={Liste_virements_envoyés}/>
                <Route path ="/client/parametre/changepassword" component={ChangePasword}/>
                <Route path ="/client/demandes/carte/bancaire" component={Demande_carte_bancaire}/>
                <Route path ="/client/virements/beneficiaires" component={Beneficiaires}/>
                <Route path ="/client/demandes/liste/carnets" component={Liste_demande_carnet_cheque}/>
                <Route path ="/client/cheques/typecheques" component={TypeCheques}/>
                <Route path ="/client/virements/historique" component={Historique}/>
                <Route path ="/client/demandes/liste/cartes" component={Liste_demande_carte_bancaire}/>

                <Route path ="/client/demandes/liste/rdv" component={Liste_demande_rdv}/>
                <Route path ="/client/simulateur-credit" component={Simulateur_credit}/>

                <Route path ="/client/cartes/demande" component={DemandesCartes}/>                
                <Route path ="/client/demandes/liste" component={ListeDemandes}/>
                <Route path ="/client/comptes/rib" component={Rib}/>

           
                <Route path ="/client/virements" component={Virements}/>
                <Route path ="/client/parametre" component={Parametre}/>
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






