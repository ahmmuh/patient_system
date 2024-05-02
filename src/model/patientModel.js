
   export const  patientModel = [
{
        firstName: "",
        lastName: "",
        age: "",
        phone: "",
        diagnos: { diagnosTyp: "", diagnosDatum: new Date() },
        behandlingar: [
          {
            behandlingsTyp: "",
            behandlingsDatum: new Date(),
            kirurgi: {
              operationskod: "Kirurgi is here",
            },
          },
        ],
    
        allmanTillstand: {
          ecog: 0,
          datum: new Date(),
        },
      }

]


