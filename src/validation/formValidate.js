
const operationRegex = /^[A-Z]{2}\d{4}$/;

export const validateOperationskod = (operationskod)=>{
    if(!operationRegex.test(operationskod)){
        alert("Operation kod måste innehålla 2 bokstäver med och 4 siffror")
        return false;
    }
    return true
}



