import React from "react";
import { StyledTextField, StyledSelect, StyledMenuItem } from "../styles/formStyles";
import { PROPERTY_TYPES, CAR_BRANDS, SERVICE_TYPES } from "../constants";

export const FormFields = ({ formData, handleChange }) => {
  return (
    <>
      <StyledTextField label="Название" name="name" value={formData.name} onChange={handleChange} required />
      <StyledTextField label="Описание" name="description" value={formData.description} onChange={handleChange} multiline rows={3} required />
      <StyledTextField label="Локация" name="location" value={formData.location} onChange={handleChange} required />

      {/* Категория объявления */}
      <StyledSelect name="type" value={formData.type || ""} onChange={handleChange} displayEmpty required>
        <StyledMenuItem value="" disabled>
          Категория
        </StyledMenuItem>
        <StyledMenuItem value="Недвижимость">Недвижимость</StyledMenuItem>
        <StyledMenuItem value="Авто">Авто</StyledMenuItem>
        <StyledMenuItem value="Услуги">Услуги</StyledMenuItem>
      </StyledSelect>

      {/* Поля для недвижимости */}
      {formData.type === "Недвижимость" && (
        <>
          <StyledSelect name="propertyType" value={formData.propertyType || ""} onChange={handleChange} displayEmpty required>
            <StyledMenuItem value="" disabled>
              Тип недвижимости
            </StyledMenuItem>
            {PROPERTY_TYPES.map((type) => (
              <StyledMenuItem key={type} value={type}>
                {type}
              </StyledMenuItem>
            ))}
          </StyledSelect>
          <StyledTextField label="Площадь (м²)" name="area" type="number" value={formData.area || ""} onChange={handleChange} required />
          <StyledTextField label="Количество комнат" name="rooms" type="number" value={formData.rooms || ""} onChange={handleChange} required />
          <StyledTextField label="Цена (₽)" name="price" type="number" value={formData.price || ""} onChange={handleChange} required />
        </>
      )}

      {/* Поля для авто */}
      {formData.type === "Авто" && (
        <>
          <StyledSelect name="brand" value={formData.brand || ""} onChange={handleChange} displayEmpty required>
            <StyledMenuItem value="" disabled>
              Марка авто
            </StyledMenuItem>
            {CAR_BRANDS.map((brand) => (
              <StyledMenuItem key={brand} value={brand}>
                {brand}
              </StyledMenuItem>
            ))}
          </StyledSelect>
          <StyledTextField label="Модель" name="model" value={formData.model || ""} onChange={handleChange} required />
          <StyledTextField label="Год выпуска" name="year" type="number" value={formData.year || ""} onChange={handleChange} required />
          <StyledTextField label="Пробег (км)" name="mileage" type="number" value={formData.mileage || ""} onChange={handleChange} />
        </>
      )}

      {/* Поля для услуг */}
      {formData.type === "Услуги" && (
        <>
          <StyledSelect name="serviceType" value={formData.serviceType || ""} onChange={handleChange} displayEmpty required>
            <StyledMenuItem value="" disabled>
              Тип услуги
            </StyledMenuItem>
            {SERVICE_TYPES.map((service) => (
              <StyledMenuItem key={service} value={service}>
                {service}
              </StyledMenuItem>
            ))}
          </StyledSelect>
          <StyledTextField label="Опыт (лет)" name="experience" type="number" value={formData.experience || ""} onChange={handleChange} required />
          <StyledTextField label="Стоимость (₽)" name="cost" type="number" value={formData.cost || ""} onChange={handleChange} required />
          <StyledTextField label="График работы" name="workSchedule" value={formData.workSchedule || ""} onChange={handleChange} />
        </>
      )}
    </>
  );
};
