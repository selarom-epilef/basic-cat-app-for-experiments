import axios from "axios";

import { API_KEY } from "../constants/api";

const kittiesApi = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key": API_KEY,
  },
});
export const addKitty = async (data) => {
  const sendData = new FormData();
  sendData.append("file", data.image);
  return (await kittiesApi.post("/images/upload"),
  sendData,
  {
    headers: { "Content-Type": "multipart/form-data" },
  }).data;
};
export const getKitties = async () =>
  (await kittiesApi.get("/images/search")).data;
export const getFavKitties = async () =>
  (await kittiesApi.get("/favourites")).data;
export const favKitty = async (imageId) =>
  (await kittiesApi.post("/favourites", { image_id: imageId })).data;
export const unfavKitty = async (favId) =>
  (await kittiesApi.delete(`/favourites/${favId}`)).data;
