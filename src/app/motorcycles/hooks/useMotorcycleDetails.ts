import { useState, useEffect } from "react";
import { getMotorcycleById } from "@/app/services/getMotorcyleById";
import { createLead } from "@/app/services/postCreateLead";
import { useRouter } from "next/navigation";
import { useStoreGlobal } from "@/app/store/store";

export const useMotorcycleDetails = (uuid: string | string[]) => {
  const router = useRouter();
  const {
    motorcycles,
    setMotorcycles,
    name,
    lastname,
    email,
    phone,
    setName,
    setLastname,
    setEmail,
    setPhone,
  } = useStoreGlobal();

  const [showDetails, setShowDetails] = useState(true);

  useEffect(() => {
    async function fetchMotorcycle() {
      const data = await getMotorcycleById(uuid as string);
      setMotorcycles(data);
    }

    fetchMotorcycle();
  }, [uuid, setMotorcycles]);

  const handleButtonClick = () => {
    setShowDetails(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Array.isArray(uuid)) {
      console.error("UUID no puede ser un array");
      return;
    }

    const data = {
      uuid: uuid,
      accesories: [],
      contact: {
        firstname: name,
        lastname: lastname,
        email: email,
        phone: phone,
        finace: true,
        trade: false,
      },
    };
    setName(name);
    setLastname(lastname);
    setEmail(email);
    setPhone(phone);

    try {
      await createLead(data);
      router.push("/thankYou");
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return {
    showDetails,
    setShowDetails,
    motorcycles,
    setMotorcycles,
    handleButtonClick,
    handleFormSubmit,
    name,
    lastname,
    email,
    phone,
    setName,
    setLastname,
    setEmail,
    setPhone,
  };
};
