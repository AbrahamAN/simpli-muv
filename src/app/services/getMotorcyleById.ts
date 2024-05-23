import axios from "axios";

export async function getMotorcycleById(uuid: string) {
  const response = await axios.get(`/api/products/motorcycles?uuid=${uuid}`, {
    headers: {
      Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm1234",
    },
  });

  return response.data;
}
