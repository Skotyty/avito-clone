import { styled } from "@mui/material/styles";
import { Card, Button, Typography } from "@mui/material";

// Контейнер карточек
export const ItemContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start", 
});

// Карточка объявления
export const ItemCard = styled(Card)({
  display: "flex", 
  flexDirection: "row",
  alignItems: "center",
  padding: "15px",
  width: "800px", 
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});

// Фото объявления (левая часть)
export const ItemImageContainer = styled("div")({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingRight: "20px",
});

export const ItemImage = styled("img")({
  width: "250px",
  height: "250px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "10px",
});

// Правая часть с информацией
export const ItemContent = styled("div")({
  flex: "2",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "left",
});

export const ItemTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const ItemDetailsRow = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "10px",
});

// Кнопка редактирования
export const EditButton = styled(Button)({
  margin: "10px 10px 0px 10px", 
  maxWidth: "170px",
  alignSelf: "flex-end",
  fontSize: "14px"
});

export const ItemWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  gap: "20px",
});