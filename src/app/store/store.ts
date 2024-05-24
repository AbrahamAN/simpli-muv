import create from "zustand";
import { MotorcycleTypes } from "../motorcycles/types";
import { accessories } from "../accessories/types/accessories";

type StoreGlobal = {
  motorcycle: MotorcycleTypes[] | null;
  accessories: accessories[] | null;
  setAccessories: (accessories: accessories[] | null) => void;
  setMotorcycle: (motorcycle: MotorcycleTypes[] | null) => void;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  setName: (name: string) => void;
  setLastname: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  quantity: number;
  setQuantity: (fn: (quantity: number) => number) => void;
};

export const useStoreGlobal = create<StoreGlobal>((set) => ({
  motorcycle: null,
  accessories: null,
  setAccessories: (accessories) => set({ accessories }),
  setMotorcycle: (motorcycle) => set({ motorcycle }),
  name: "",
  lastname: "",
  email: "",
  phone: "",
  setName: (name) => set({ name: name }),
  setLastname: (lastName) => set({ lastname: lastName }),
  setEmail: (email) => set({ email: email }),
  setPhone: (phone) => set({ phone: phone }),
  quantity: 1,
  setQuantity: (fn) => set((state) => ({ quantity: fn(state.quantity) })),
}));
