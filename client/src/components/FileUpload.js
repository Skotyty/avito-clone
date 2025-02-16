import React, { useState } from "react";
import { Button } from "@mui/material";

const FileUpload = ({ onFileSelect }) => {
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input
        type="file"
        id="upload"
        style={{ display: "none" }}
        onChange={handleChange}
        accept="image/*"
      />
      <label htmlFor="upload">
        <Button variant="contained" color="primary" component="span">
          Выберите файл
        </Button>
      </label>
      {selectedFileName && (
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
          {selectedFileName}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
