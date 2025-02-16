import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCardComponent from "../components/ItemCardComponent";
import { Typography } from "@mui/material";
import { ItemContainer, ItemWrapper } from "../styles/itemStyles";
import BackToHomeButton from "../components/BackToHomeButton";

const ItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error("Ошибка загрузки объявления:", err));
  }, [id]);

  const handleEdit = () => {
    navigate("/form", { state: { item } });
  };

  if (!item) return <Typography align="center">Загрузка...</Typography>;

  return (
    <ItemWrapper> 
      <ItemContainer>
        <ItemCardComponent item={item} handleEdit={handleEdit} />
      </ItemContainer>

      <BackToHomeButton />
    </ItemWrapper>
  );
};

export default ItemPage;
