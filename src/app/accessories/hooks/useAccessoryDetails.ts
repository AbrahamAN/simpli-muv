import { getAccessoriesById } from "@/app/services/getAccessoriesById";
import { createLead } from "@/app/services/postCreateLead";
import { useStoreGlobal } from "@/app/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useAccessoryDetails = (uuid: string) => {
  const { accessories, setAccessories, quantity, setQuantity } =
    useStoreGlobal();
  const router = useRouter();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchAccessory() {
      try {
        const data = await getAccessoriesById(uuid);
        setAccessories(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unknown error occurred."));
        }
      }
    }

    fetchAccessory();
  }, [uuid, setAccessories]);

  const handleFormSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (Array.isArray(uuid)) {
      console.error("UUID no puede ser un array");
      return;
    }

    const data = {
      uuid: uuid,
      accesories: [],
    };

    try {
      await createLead(data);
      router.push("/detailsBought");
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return {
    error,
    quantity,
    accessories,
    setQuantity,
    handleFormSubmit,
  };
};
