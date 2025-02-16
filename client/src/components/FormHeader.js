import React from "react";
import { FormTitle } from "../styles/formStyles";

const FormHeader = ({ isEdit }) => {
  return <FormTitle variant="h5">{isEdit ? "Редактировать объявление" : "Разместить объявление"}</FormTitle>;
};

export default FormHeader;
