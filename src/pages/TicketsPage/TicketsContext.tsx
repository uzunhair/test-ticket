import { createContext, Dispatch, SetStateAction } from "react";

type TProps = {
  selectedItems: number[];
  setSelectedItems: Dispatch<SetStateAction<number[]>>;
};

const TicketsContext = createContext<TProps | null>(null);

export default TicketsContext;
