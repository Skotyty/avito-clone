import React from "react";
import { FormButton } from "../styles/formStyles";

const FormSubmitButton = ({ isEdit }) => {
  return <FormButton type="submit" variant="contained">{isEdit ? "Сохранить изменения" : "Добавить"}</FormButton>;
};

export default FormSubmitButton;
