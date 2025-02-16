import React from "react";
import { StyledButton } from "../styles/itemStyles";

export const ActionButtons = ({ handleSave, handleCancel }) => (
  <>
    <StyledButton variant="contained" color="primary" onClick={handleSave}>
      Сохранить
    </StyledButton>
    <StyledButton variant="outlined" color="secondary" onClick={handleCancel}>
      Отмена
    </StyledButton>
  </>
);
