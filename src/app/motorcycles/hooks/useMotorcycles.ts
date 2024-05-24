// useMotorcycles.js
import { useEffect } from "react";
import { useStoreGlobal } from "@/app/store/store";
import { getMotorcycles } from "@/app/services/getMotorcycles";

export const useMotorcycles = () => {
  const { motorcycles, setMotorcycles } = useStoreGlobal();

  useEffect(() => {
    const fetchMotorcycles = async () => {
      const data = await getMotorcycles();
      setMotorcycles(data);
    };

    fetchMotorcycles();
  }, [setMotorcycles]);

  return motorcycles;
};
