export const isValidTitle = (text) => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    return words.length <= 10;
};
  
  export const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
};