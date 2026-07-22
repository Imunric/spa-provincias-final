export const getImageUrl = (path) => {
  if (!path) return "";

  const base = import.meta.env.VITE_IMAGES_BASE_URL;

  return `${base}${path}`;
};