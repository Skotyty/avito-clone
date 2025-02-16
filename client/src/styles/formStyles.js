import { styled } from "@mui/material/styles";
import { Card, Button, Typography, TextField, MenuItem, Select } from "@mui/material";

export const FormContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const FormCard = styled(Card)({
  padding: "20px",
  maxWidth: "500px",
  width: "100%",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});

export const FormTitle = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
});

// Превью изображения 
export const ImagePreview = styled("img")({
  width: "250px",
  height: "250px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "15px",
});

// Кнопка загрузки фото
export const UploadButton = styled(Button)({
  display: "block",
  maxWidth: "200px",  
  fontSize: "16px",
  placeSelf: "center"
});

// Стили для кнопок
export const StyledButton = styled(Button)({
  marginTop: "10px",
  maxWidth: "240px",  
  fontSize: "16px",
  borderRadius: "8px"
});

// Поля ввода
export const StyledTextField = styled(TextField)({
  width: "100%",
  marginBottom: "10px",
});

// Select 
export const StyledSelect = styled(Select)({
  width: "100%",
  marginBottom: "10px",
});

//  Опции для Select
export const StyledMenuItem = styled(MenuItem)({});

export const FormWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh", 
  gap: "20px", 
});
