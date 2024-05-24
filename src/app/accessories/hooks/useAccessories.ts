// hooks/useAccessories.ts
import { getAccessories } from "@/app/services/getAccessories";
import { useStoreGlobal } from "@/app/store/store";
import { useEffect } from "react";

export const useAccessories = () => {
  const { accessories, setAccessories } = useStoreGlobal();

  useEffect(() => {
    const fetchAccessories = async () => {
      const data = await getAccessories();
      setAccessories(data);
    };

    fetchAccessories();
  }, [setAccessories]);

  return accessories;
};
