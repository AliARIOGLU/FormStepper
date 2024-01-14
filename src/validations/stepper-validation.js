import * as Yup from "yup";

export const stepperValidation = Yup.object().shape({
  //step1
  name: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  surname: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),

  //step2
  age: Yup.number()
    .min(18, "You should be at least 18")
    .when("step", {
      is: 2,
      then: (schema) => schema.required(),
    }),
  job: Yup.string().when("step", {
    is: 2,
    then: (schema) => schema.required(),
  }),

  //step3
  about: Yup.string().when("step", {
    is: 3,
    then: (schema) => schema.required(),
  }),

  //step4
  blog: Yup.string().when("step", {
    is: 4,
    then: (schema) => schema.required(),
  }),
});
