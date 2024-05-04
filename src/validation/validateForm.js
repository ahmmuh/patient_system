import * as Yup from "yup"
export const formValidationSchema = Yup.object({

  firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    age: Yup.number().required(),
    phone: Yup.number().required(),
    diagnos: Yup.object(
      { diagnosTyp: Yup.string().required(),
        diagnosDatum: Yup.date().required() },
    ),
    
    behandlingar: Yup.object({
      behandlingsTyp: Yup.string().required(),
      behandlingsDatum: Yup.date().required(),
      kirurgi: Yup.object( {
        operationskod: Yup.string().required(),
    }),
    }),

    allmanTillstand: Yup.object( {
      ecog: Yup.number().required(),
      datum: Yup.date().required(),
    }),
})

// const operationRegex = /^[A-Z]{2}\d{4}$/;
