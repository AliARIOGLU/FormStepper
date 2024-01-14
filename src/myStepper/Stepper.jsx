/* eslint-disable */

import Step from "./Step";

const Stepper = ({ list }) => {
  return (
    <div className="stepper-wrapper">
      {list.map((step, idx) => (
        <div key={idx}>
          <Step step={step} />
        </div>
      ))}
    </div>
  );
};

export default Stepper;
