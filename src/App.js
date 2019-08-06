import React from "react";
import ScormProvider from "react-scorm-provider";
import ScoLearner from "./Learner";

const App = () => {
  return (
    <ScormProvider>
      <h1>We've got a connection just by including ScormProvider!</h1>
      <p>
        I'm a child with no access to the ScormProvider's props. But the
        ScoLearner component is enhanced with withScorm()!
      </p>
      <ScoLearner />
    </ScormProvider>
  );
};

export default App;
