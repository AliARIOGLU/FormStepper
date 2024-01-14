/* eslint-disable */

import Stepper from "./Stepper";

function StepApp() {
  const list = [<Example1 />, <Example2 />, <Example3 />, <Example4 />];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Stepper list={list} />
    </div>
  );
}

export default StepApp;

const Example1 = () => {
  return <h2>Hello 1</h2>;
};

const Example2 = () => {
  return <h2>Hello 2</h2>;
};

const Example3 = () => {
  return <h2>Hello 3</h2>;
};

const Example4 = () => {
  return <h2>Hello 4</h2>;
};
