import React from "react";
import { withScorm } from "react-scorm-provider";

const Learner = props => {
  console.log(props.sco);
  return (
    <div>
      <p>Welcome, {props.sco.learnerName}!</p>
      <p>Your course status is currently: {props.sco.completionStatus}</p>
      <p>Click the button below to complete the course!</p>
      <button onClick={() => props.sco.setStatus("completed")}>
        Mark me complete!
      </button>
    </div>
  );
};

export default withScorm()(Learner);
