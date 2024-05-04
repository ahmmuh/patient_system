import * as Yup from "yup"
const operationRegex = /^[a-z]{2}\d{4}$/;
export const formValidationSchema = Yup.object({


  firstName: Yup.string().required("Förnamn saknas"),
    lastName: Yup.string().required("Efternamn saknas"),
    age: Yup.number().required("Ålder saknas"),
    phone: Yup.number().required("Telefon saknas"),
    diagnos: Yup.object(
      { diagnosTyp: Yup.string().required("Diagnostyp saknas"),
        diagnosDatum: Yup.date().required("Diagnosdatum saknas") },
    ),
    
    behandlingar: Yup.object({
      behandlingsTyp: Yup.string().required("Behandlingstyp saknas"),
      behandlingsDatum: Yup.date().required("Behandlingsdatum saknas"),
      kirurgi: Yup.object( {
        operationskod: Yup.string().required("Operationkod saknas").matches(operationRegex),
    }),
    }),

    allmanTillstand: Yup.object( {
      ecog: Yup.number().required("ECOG saknas"),
      datum: Yup.date().required("ECOG Datum saknas"),
    }),
})

