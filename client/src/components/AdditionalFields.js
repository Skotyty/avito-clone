import React from "react";
import { StyledTextField } from "../styles/itemStyles";

export const RealEstateFields = ({ formData, handleChange }) => (
  <>
    <StyledTextField label="Тип недвижимости" name="propertyType" value={formData.propertyType} onChange={handleChange} />
    <StyledTextField label="Площадь (м²)" name="area" type="number" value={formData.area} onChange={handleChange} />
    <StyledTextField label="Количество комнат" name="rooms" type="number" value={formData.rooms} onChange={handleChange} />
    <StyledTextField label="Цена (₽)" name="price" type="number" value={formData.price} onChange={handleChange} />
  </>
);

export const AutoFields = ({ formData, handleChange }) => (
  <>
    <StyledTextField label="Марка" name="brand" value={formData.brand} onChange={handleChange} />
    <StyledTextField label="Модель" name="model" value={formData.model} onChange={handleChange} />
    <StyledTextField label="Год выпуска" name="year" type="number" value={formData.year} onChange={handleChange} />
    <StyledTextField label="Пробег (км)" name="mileage" type="number" value={formData.mileage} onChange={handleChange} />
  </>
);

export const ServiceFields = ({ formData, handleChange }) => (
  <>
    <StyledTextField label="Тип услуги" name="serviceType" value={formData.serviceType} onChange={handleChange} />
    <StyledTextField label="Опыт (лет)" name="experience" type="number" value={formData.experience} onChange={handleChange} />
    <StyledTextField label="Стоимость (₽)" name="cost" type="number" value={formData.cost} onChange={handleChange} />
    <StyledTextField label="График работы" name="workSchedule" value={formData.workSchedule} onChange={handleChange} />
  </>
);
