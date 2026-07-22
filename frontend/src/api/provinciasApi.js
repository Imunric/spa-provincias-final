import axios from "axios";

const provinciasApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/provincias`,
  timeout:5000,
});

export const getProvincias = async () => {
  const response = await provinciasApi.get("/");
  return response.data;
};

/*export const getProvinciaById = async (id) => {
  const response = await provinciasApi.get(`/${id}`);
  return response.data;
};
*/
export const getProvinciaBySlug = async (slug) => {
  const response = await provinciasApi.get(`/${slug}`);
  return response.data;
};