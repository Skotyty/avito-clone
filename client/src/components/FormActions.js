import React from "react";
import SaveButton from "./SaveButton";

const FormActions = ({ isDirty }) => {
  return (
    <div>
      <SaveButton isDirty={isDirty} /> 
    </div>
  );
};

export default FormActions;
