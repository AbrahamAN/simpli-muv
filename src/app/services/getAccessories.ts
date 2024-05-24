import axios from "axios";

export async function getAccessories() {
  const response = await axios.get("/api/products/accessories", {
    headers: {
      Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm1234",
    },
  });

  return response.data;
}
