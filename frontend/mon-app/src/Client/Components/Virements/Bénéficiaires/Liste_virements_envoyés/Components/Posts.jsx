import React, { useEffect, useState,useRef  } from "react";
import dateformat from 'dateformat'
import ReactToPrint from 'react-to-print';

const Posts = ({ posts, loading,setPosts }) => {

  const componentRef = useRef();




  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
  <>
    
      <ReactToPrint
        trigger={() => <button  class="btn btn-success"
        >Imprimer vos informations !</button>}
        content={() => componentRef.current}
     
      />
 
    <ul className='list-group mb-4' style={{fontSize:"10px"}} ref={componentRef}>
      {posts.map(post => (
        <li key={post.id} className="bloc4 border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
          <div className="d-flex flex-column">
              <span className="mb-2 text-xs">
                Date Opération :{" "}
                <span className="text-dark font-weight-bold ms-sm-2">
                { dateformat((toString(post.date.année)-toString(post.date.mois)-toString(post.date.jour)) , "dd mmmm yyyy") }   
                  </span>
              </span>
              <span className="mb-2 text-xs">
                Nom bénéficiaire:{" "}
                <span className="text-dark font-weight-bold ms-sm-2">
                  {post.id_compte_beneficiaire.id_client.nom+" "+post.id_compte_beneficiaire.id_client.prenom}
                </span>
              </span>
              
              <span className="mb-2 text-xs">
                RIB bénéficiaire :{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                  {post.id_compte_beneficiaire.rib}
                </span>
              </span>
                    
              <span className="mb-2 text-xs">
                Agence :{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                {post.id_compte_beneficiaire.id_client.id_agence.nom}
                </span>
              </span>
              <span className="mb-2 text-xs">
                 Heure de virement :{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                {post.heure}
                </span>
              </span>
              
              <span className="text-xs">
                Montant:{" "}
                <span className="text-danger ms-sm-2 font-weight-bold">
                  +{post.montant} DT
                </span>
              </span>
            </div>
        </li>
      ))}
    </ul></>
  );
  
};

export default Posts;