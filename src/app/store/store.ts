import create from "zustand";
import { MotorcycleTypes } from "../motos/types";

type MotorcycleStore = {
  motorcycle: MotorcycleTypes[] | null;
  setMotorcycle: (motorcycle: MotorcycleTypes[] | null) => void;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  setName: (name: string) => void;
  setLastname: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
};

export const useMotorcycleStore = create<MotorcycleStore>((set) => ({
  motorcycle: null,
  setMotorcycle: (motorcycle) => set({ motorcycle }),
  name: "",
  lastname: "",
  email: "",
  phone: "",
  setName: (name) => set({ name: name }),
  setLastname: (lastName) => set({ lastname: lastName }),
  setEmail: (email) => set({ email: email }),
  setPhone: (phone) => set({ phone: phone }),
}));
