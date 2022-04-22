import React, { useEffect, useState } from "react";
import axios from "axios";
import NavPage from "../../../../Client/Interface/NavPage/NavPage";
import { Link } from "react-router-dom";

const Comptes = () => {
  const [posts, setListeAgences] = useState([]);

  useEffect(() => {


    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/api/agence/findall');
        setListeAgences(res.data);
      };
  
      fetchPosts();
  }, []);
  
  const rechercheAgence = async (event) => {
    if (event.target.value === "") {
      axios.get("http://localhost:4000/api/agence/findall").then((Ag) => {
        setListeAgences(Ag.data);
      });
    } else {
      let res = await axios.get(
        "http://localhost:4000/api/agence/recherche/" + event.target.value
      );
      setListeAgences(res.data);
    }
  };


  const backImage = [
    "/img/Agence-bancaire_1.jpg",
    "/img/Agence-bancaire_2.jpg",
    "/img/Agence-bancaire_4.jpg",
  ];

  return (
    <>
            <NavPage name="Agences"/>

    <div class="filter_comptes">
      
        <div class="form-outline" style={{marginLeft:"10em"}}>
          <input
            name="serche"
            onChange={rechercheAgence}
            id="form1"
            class="form-control"
            placeholder="Rechercher Agence "
          />

        </div>
      
      </div>
    <div className="liste_agences">
                    {posts.map((c)=>(

      <div className="agences">
        <div className="img_random"   style={{
                    backgroundImage: `url(${
                      backImage[Math.floor(Math.random() * backImage.length)]
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}>
          
        </div>
        <div className="containts">
          <p>Agnece: <b>{c.nom}</b></p>
          <p>Email : <b>{c.email}</b></p>
          <p>Téléphone : <b>{c.tel}</b></p>
          <Link to ={'/admin/cdc/liste/'+c._id}><p>          <input type="submit" value="Voir" className="btn-voir-clients" /></p></Link>
        </div>
      </div>
               ))}

  
      

    


    </div>
    </>
  );
};

export default Comptes;
