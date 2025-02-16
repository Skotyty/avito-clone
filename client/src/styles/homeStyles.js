import { styled } from "@mui/material/styles";

import { Card, Button, Typography } from "@mui/material";

export const HomeContainer = styled("div")({
  maxWidth: "100%",
  padding: "100px 300px",
  margin: "0 auto",
});

// Заголовок
export const HomeTitle = styled(Typography)({
  textAlign: "center",
  marginBottom: "20px",
});

// Кнопка "Разместить объявление"
export const PostButton = styled(Button)({
  display: "block",
  fontSize: "15px",
  marginBottom: "20px",
});

export const AdListContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)", 
  width: "100%",
  margin: "50px auto",
});

// Контейнер карточки 
export const AdCard = styled(Card)({
  display: "flex",
  flexDirection: "column", 
  alignItems: "center",
  marginTop: "20px",
  padding: "50px",
  width: "300px",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  flexGrow: 1,
});

//  Фото объявления 
export const AdImage = styled("img")({
  width: "100%", 
  height: "200px", 
  objectFit: "cover", 
  borderRadius: "8px",
  marginBottom: "15px",
});


//  Контент карточки
export const AdContent = styled("div")({
  textAlign: "center",
});
