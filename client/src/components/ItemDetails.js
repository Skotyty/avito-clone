import React from "react";
import { Typography } from "@mui/material";

const ItemDetails = ({ item }) => {
  if (!item) return null;

  return (
    <>
      {item.type === "Недвижимость" && (
        <>
          <Typography>Тип: {item.propertyType}</Typography>
          <Typography>Площадь: {item.area} м²</Typography>
          <Typography>Комнат: {item.rooms}</Typography>
          <Typography>Цена: {item.price} ₽</Typography>
        </>
      )}

      {item.type === "Авто" && (
        <>
          <Typography>Марка: {item.brand}</Typography>
          <Typography>Модель: {item.model}</Typography>
          <Typography>Год выпуска: {item.year}</Typography>
          <Typography>Пробег: {item.mileage} км</Typography>
        </>
      )}

      {item.type === "Услуги" && (
        <>
          <Typography>Тип услуги: {item.serviceType}</Typography>
          <Typography>Опыт: {item.experience} лет</Typography>
          <Typography>Стоимость: {item.cost} ₽</Typography>
          <Typography>График работы: {item.workSchedule}</Typography>
        </>
      )}
    </>
  );
};

export default ItemDetails;
