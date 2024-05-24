import axios from "axios";

export async function getAccessoriesById(uuid: string) {
  const response = await axios.get(`/api/products/accessories?uuid=${uuid}`, {
    headers: {
      Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm1234",
    },
  });

  return response.data;
}
