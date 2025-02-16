import React from "react";
import { StyledButton } from "../styles/formStyles";

const SaveButton = ({ isDirty }) => {
  return (
    <StyledButton type="submit" variant="contained" color="primary" disabled={!isDirty}>
      Сохранить данные
    </StyledButton>
  );
};

export default SaveButton;
