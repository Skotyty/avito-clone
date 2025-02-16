import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledBackButton } from "../styles/buttonStyles"; 

const BackToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <StyledBackButton variant="contained" color="secondary" onClick={() => navigate("/list")}>
      К объявлениям
    </StyledBackButton>
  );
};

export default BackToHomeButton;
