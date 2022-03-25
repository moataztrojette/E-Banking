const Validation = (valuesInput) => {
    let errors = {};

  
    
    if(!valuesInput.newPassword){
        errors.password = "Entrez un mot  de passe  ! "
    }else if(valuesInput.newPassword.length <5 ){
        errors.password = "Mot de passe doit comporter au moins 6 caractères"
    }

    if(!valuesInput.confipassword){
        errors.confipassword = "Confirmer votre mot de passe ! "
    }else if(valuesInput.confipassword !== valuesInput.newPassword){
        errors.confipassword = "Mot de passe incorrect ! "
    }

  
    return ( Object.keys(errors).length > 0 ? errors : null  );
}
 
export default Validation;




