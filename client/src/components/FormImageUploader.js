import React from "react";
import { Typography } from "@mui/material";

const FormImageUploader = ({ handleFileChange, preview }) => {
  return (
    <div>
      <Typography>Фото объявления</Typography>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <img
          src={preview}
          alt="Предпросмотр"
          style={{ width: "100%", maxHeight: "200px", objectFit: "cover", marginTop: "10px", borderRadius: "5px" }}
        />
      )}
    </div>
  );
};

export default FormImageUploader;
