
export const validateForm = (patient)=>{
    const errors = {}
    const operationRegex = /^[A-Z]{2}\d{4}$/;
    const {firstName,lastName, age,phone, 
        diagnos,behandlingar,allmantillstand} = patient;

    const {behandlingsTyp, behandlingsDatum,kirurgi} = patient.behandlingar




    if(firstName === ""){
       errors.firstName = "Förnamn saknas"
       alert("Förnamn saknas")
       return false;
    }

    if(lastName ===""){
       alert("Efternamn saknas")
        errors.lastName = "Efternamn saknas"
       return false;

     }


     if(age === ""){
       alert("age saknas")
        errors.age = "age saknas"
       return false;

     }

     if(phone === ""){
       alert("phone saknas")
        errors.phone = "phone saknas"
       return false;

     }


     if(diagnos.diagnosTyp === ""){
       alert("diagnostyp saknas")
        errors.diagnosTyp = "Diagnostyp måste finnas"
       return false;

     }

     if(diagnos.diagnosDatum === "" ){
       alert("diagnos datum saknas")
        errors.diagnosDatum = "Diagnos datum måste finnas"
       return false;

     }

   
     if(behandlingsTyp === ""){
       alert("behandlingstyp saknas")
        errors.behandlingsTyp = "Behandlingstyp saknas"
       return false;

     }

     if(behandlingsDatum === ""){
       alert("behandlingsdatum saknas")
        errors.behandlingsDatum = "behandlingsDatum saknas"
       return false;

     }
     let foundedBehandlingsTyp = behandlingsTyp;
     if(foundedBehandlingsTyp?.includes("kirurgi")){
        if(!operationRegex.test(kirurgi?.operationskod)){
            alert("operationskod måste bestå av 2 bokstäver och 3 siffror")
             return false;
    
         }
     }
     
  



     if(allmantillstand?.ecog === ""){
        errors.ecog = "ecog saknas"
     }

     if(allmantillstand?.datum === ""){
        errors.datum = "datum saknas"
     }

     return true
    return errors;
}





