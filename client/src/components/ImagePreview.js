import React from "react";
import { Box } from "@mui/material";

const ImagePreview = ({ image }) => {
  if (!image) return null;

  return (
    <Box sx={{ mt: 2, textAlign: "center" }}>
      <img src={image} alt="Превью" style={{ maxWidth: "100%", maxHeight: "200px", borderRadius: "8px" }} />
    </Box>
  );
};

export default ImagePreview;
