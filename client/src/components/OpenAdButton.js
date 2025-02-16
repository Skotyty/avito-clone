import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const OpenAdButton = ({ id }) => {
  return (
    <Button variant="contained" component={Link} to={`/item/${id}`}>
      Открыть
    </Button>
  );
};

export default OpenAdButton;
