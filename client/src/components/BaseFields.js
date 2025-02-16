import React from "react";
import { StyledTextField } from "../styles/itemStyles";
import { MenuItem, Select } from "@mui/material";

export const BaseFields = ({ formData, handleChange }) => (
  <>
    <StyledTextField label="Название" name="name" value={formData.name} onChange={handleChange} required />
    <StyledTextField label="Описание" name="description" value={formData.description} onChange={handleChange} multiline rows={3} required />
    <StyledTextField label="Локация" name="location" value={formData.location} onChange={handleChange} required />

    <Select fullWidth name="type" value={formData.type} onChange={handleChange} required>
      <MenuItem value="Недвижимость">Недвижимость</MenuItem>
      <MenuItem value="Авто">Авто</MenuItem>
      <MenuItem value="Услуги">Услуги</MenuItem>
    </Select>
  </>
);
