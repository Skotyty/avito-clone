import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormContainer, FormCard, FormTitle, FormWrapper, ImagePreview, UploadButton } from "../styles/formStyles"; 
import { uploadImage } from "../utils/uploadService";
import { FormFields } from "../components/FormFields";
import FormActions from "../components/FormActions";
import BackToHomeButton from "../components/BackToHomeButton";
import { EMPTY_FORM_DATA } from "../constants"; 

const FormPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const existingData = location.state?.item || null;

  const [formData, setFormData] = useState(EMPTY_FORM_DATA);
  const [isDirty, setIsDirty] = useState(false); 

  useEffect(() => {
    if (existingData) {
      setFormData(existingData);
    }
  }, [existingData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsDirty(true); 
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = await uploadImage(file);
    setFormData({ ...formData, image: imageUrl });
    setIsDirty(true); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(existingData ? `/items/${existingData.id}` : "/items", {
      method: existingData ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => navigate("/list"));
  };

  return (
    <FormWrapper> 
      <FormContainer>
        <FormCard>
          <FormTitle>{existingData ? "Редактировать объявление" : "Разместить объявление"}</FormTitle>

          <form onSubmit={handleSubmit}>
            <FormFields formData={formData} handleChange={handleChange} />

            {formData.image && <ImagePreview src={formData.image} alt="Превью" />}

            <UploadButton variant="contained" component="label">
              {formData.image ? "Изменить фото" : "Добавить фото"}
              <input type="file" hidden onChange={handleImageUpload} />
            </UploadButton>

            <FormActions isDirty={isDirty} />
          </form>
        </FormCard>
      </FormContainer>

      <BackToHomeButton />
    </FormWrapper>
  );
};

export default FormPage;
