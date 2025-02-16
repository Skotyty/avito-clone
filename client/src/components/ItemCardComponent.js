import React from "react";
import { ItemCard, ItemTitle, ItemImageContainer, ItemImage, ItemContent, ItemDetailsRow } from "../styles/itemStyles";
import { Typography } from "@mui/material";
import ItemDetails from "./ItemDetails";
import { EditItemButton } from "./EditButton";

const ItemCardComponent = ({ item, handleEdit }) => {
  return (
    <ItemCard>
      <ItemImageContainer>
        <ItemImage src={item.image ? item.image : "/placeholder.jpg"} alt={item.name} />
        <ItemTitle>{item.name}</ItemTitle>
      </ItemImageContainer>

      <ItemContent>
        <Typography>{item.description}</Typography>
        <Typography color="text.secondary">Категория: {item.type}</Typography>
        <Typography>Локация: {item.location}</Typography>

        <ItemDetailsRow>
          <ItemDetails item={item} />
        </ItemDetailsRow>

        <EditItemButton handleEdit={handleEdit} />
      </ItemContent>
    </ItemCard>
  );
};

export default ItemCardComponent;
