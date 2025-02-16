import React from "react";
import { Typography } from "@mui/material";

const FormTitle = ({ isEdit }) => {
  return (
    <Typography variant="h5">
      {isEdit ? "Редактировать объявление" : "Разместить объявление"}
    </Typography>
  );
};

export default FormTitle;
