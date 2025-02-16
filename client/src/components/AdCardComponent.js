import React from "react";
import { Link } from "react-router-dom";
import { AdCard, AdImage, AdContent } from "../styles/homeStyles";
import { Typography, Button } from "@mui/material";
import { StyledButton } from "../styles/formStyles";

const AdCardComponent = ({ item }) => {
  return (
    <AdCard>
      <AdImage src={item.image ? item.image : "/placeholder.jpg"} alt="Фото объявления" />

      <AdContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography color="text.secondary">
          {item.location} · {item.type}
        </Typography>

        <StyledButton variant="contained" component={Link} to={`/item/${item.id}`}>
          Открыть
        </StyledButton>

      </AdContent>
    </AdCard>
  );
};

export default AdCardComponent;
