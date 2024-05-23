import axios from "axios";

export async function getMotorcycles() {
  const response = await axios.get("/api/products/motorcycles", {
    headers: {
      Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm1234",
    },
  });

  return response.data;
}
