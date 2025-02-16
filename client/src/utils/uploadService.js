export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
  
    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      return data.imageUrl;
    } catch (error) {
      console.error("Ошибка загрузки изображения:", error);
      return "";
    }
  };
  