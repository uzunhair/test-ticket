import { createContext, Dispatch, SetStateAction } from "react";
import { TCurrency } from "src/shared/ui/Currency/Currency.tsx";

type TProps = {
  selectedItems: number[];
  setSelectedItems: Dispatch<SetStateAction<number[]>>;
  selectedCurrency: TCurrency;
  setSelectedCurrency: Dispatch<SetStateAction<TCurrency>>;
};

const TicketsContext = createContext<TProps | null>(null);

export default TicketsContext;
