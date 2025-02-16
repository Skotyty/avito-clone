import React from "react";
import { TextField, MenuItem, Select } from "@mui/material";

const FilterControls = ({ filter, setFilter, searchQuery, setSearchQuery }) => {
  return (
    <div>
      <TextField
        fullWidth
        label="Поиск по названию"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <Select fullWidth value={filter} onChange={(e) => setFilter(e.target.value)} displayEmpty>
        <MenuItem value="">Все категории</MenuItem>
        <MenuItem value="Недвижимость">Недвижимость</MenuItem>
        <MenuItem value="Авто">Авто</MenuItem>
        <MenuItem value="Услуги">Услуги</MenuItem>
      </Select>
    </div>
  );
};

export default FilterControls;
