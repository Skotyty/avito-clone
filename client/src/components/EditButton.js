import React from "react";
import { EditButton as StyledEditButton } from "../styles/itemStyles";

export const EditItemButton = ({ handleEdit }) => (
  <StyledEditButton variant="contained" onClick={handleEdit}>
    Редактировать
  </StyledEditButton>
);
