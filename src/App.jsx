/* eslint-disable */

import { ErrorMessage, Field, Form, Formik } from "formik";
import { stepperValidation } from "./validations/stepper-validation";
import { useTheme } from "./context/ThemeContext";

const steps = [
  {
    step: 1,
    title: "Private",
  },
  {
    step: 2,
    title: "Age and Work",
  },
  {
    step: 3,
    title: "About",
  },
  {
    step: 4,
    title: "WWW",
  },
];

function App() {
  const { darkTheme, toggleDarkTheme } = useTheme();

  return (
    <div className="w-full min-h-screen">
      <button
        onClick={toggleDarkTheme}
        className="p-2 bg-red-600 text-white ml-2 cursor-pointer rounded-md"
      >
        {darkTheme ? "Light Mode" : "Dark Mode"}
      </button>
      <div>
        <Formik
          validationSchema={stepperValidation}
          initialValues={{
            step: 1,
            lastStep: 4,
            // step1
            name: "",
            surname: "",
            // step2
            age: "",
            job: "",
            // step3
            about: "",
            // step4
            blog: "",
          }}
          onSubmit={(values, options) => {
            console.log(values);
            options.resetForm();
          }}
        >
          {({ values, setFieldValue, isValid, dirty }) => {
            const onPrevHandler = () => {
              setFieldValue("step", values.step - 1);
            };

            const onNextHandler = () => {
              setFieldValue("step", values.step + 1);
            };

            const onStepHandler = (step) => {
              setFieldValue("step", step);
            };

            return (
              <Form className="w-[500px] py-4 mx-auto">
                <header className="grid grid-cols-4 gap-x-2.5 border border-zinc-400 rounded-md mb-4">
                  {steps.map((step) => (
                    <button
                      type="button"
                      // disabled={step.step > values.step}
                      onClick={() => onStepHandler(step.step)}
                      className="flex flex-col gap-3 items-center py-2.5"
                      key={step.step}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                          step.step === values.step
                            ? "bg-blue-400"
                            : "bg-zinc-200"
                        }`}
                      >
                        {step.step}
                      </div>
                      <div
                        className={`text-sm font-bold ${
                          step.step === values.step
                            ? "text-blue-400"
                            : "text-zinc-500"
                        }`}
                      >
                        {step.title}
                      </div>
                    </button>
                  ))}
                </header>

                {values.step === 1 && (
                  <div className="grid gap-2.5">
                    <div>
                      <Field
                        name="name"
                        className="input"
                        placeholder="Name.."
                      />
                      <ErrorMessage
                        name="name"
                        component="small"
                        className="errorMessage"
                      />
                    </div>
                    <div>
                      <Field
                        name="surname"
                        className="input"
                        placeholder="Surname.."
                      />
                      <ErrorMessage
                        name="surname"
                        component="small"
                        className="errorMessage"
                      />
                    </div>
                  </div>
                )}

                {values.step === 2 && (
                  <div className="grid gap-2.5">
                    <div>
                      <Field name="age" className="input" placeholder="Age.." />
                      <ErrorMessage
                        name="age"
                        component="small"
                        className="errorMessage"
                      />
                    </div>
                    <div>
                      <Field name="job" className="input" placeholder="Job.." />
                      <ErrorMessage
                        name="job"
                        component="small"
                        className="errorMessage"
                      />
                    </div>
                  </div>
                )}

                {values.step === 3 && (
                  <div className="grid gap-2.5">
                    <div>
                      <Field
                        name="about"
                        component="textarea"
                        className="textarea"
                        placeholder="About.."
                      />
                      <ErrorMessage
                        name="about"
                        component="small"
                        className="errorMessage"
                      />
                    </div>
                  </div>
                )}

                {values.step === 4 && (
                  <div className="grid gap-2.5">
                    <div>
                      <Field
                        name="blog"
                        className="input"
                        placeholder="Blog URL.."
                      />
                      <ErrorMessage
                        name="blog"
                        component="small"
                        className="errorMessage"
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-x-4 mt-4">
                  {values.step > 1 ? (
                    <button
                      onClick={onPrevHandler}
                      className="button"
                      type="button"
                    >
                      Previous
                    </button>
                  ) : (
                    <button type="button" className="button invisible"></button>
                  )}
                  {values.step < values.lastStep && (
                    <button
                      onClick={onNextHandler}
                      className="button"
                      type="button"
                      disabled={!isValid || !dirty}
                    >
                      Next
                    </button>
                  )}

                  {values.step === values.lastStep && (
                    <button className="button bg-green-500" type="submit">
                      Submit
                    </button>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default App;
