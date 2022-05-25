import React from "react";
import dateformat from 'dateformat'

const Posts = ({ posts, loading }) => {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
     <div className='filter_historique'>
    
 </div>
 
    <ul className='list-group mb-4' style={{fontSize:"10px"}}>
      {posts.map(post => (
        <li key={post.id_user.id} className="bloc4 border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
         <div className="d-flex flex-column">
       <span className="mb-2 text-xs">
         Date Opération :{" "}
         <span className="text-dark font-weight-bold ms-sm-2">
         { dateformat(post.date , "dd mmmm yyyy") }   

         </span>
       </span>
       <span className="mb-2 text-xs">
         Nom bénéficiaire:{" "}
         <span className="text-dark font-weight-bold ms-sm-2">
         {post.id_user.id_client.prenom} {post.id_user.id_client.nom}
         </span>
       </span>
       <span className="mb-2 text-xs">
         RIB bénéficiaire :{" "}
         <span className="text-dark ms-sm-2 font-weight-bold">
           {post.id_user.rib}
         </span>
       </span>
       <span className="mb-2 text-xs">
                Agence :{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                {post.id_user.id_client.id_agence.nom}
                </span>
              </span>
              
       <span className="text-xs">
         Montant:{" "}
         <span className="text-success ms-sm-2 font-weight-bold">
           + {post.montant} DT
         </span>
       </span>
     </div>
        </li>
      ))}
    </ul>
    </>
  );
};

export default Posts;