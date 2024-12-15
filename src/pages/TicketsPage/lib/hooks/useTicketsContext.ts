import { useContext } from "react";
import TicketsContext from "../../TicketsContext";

export function useTicketsContext() {
  const context = useContext(TicketsContext);
  if (!context) {
    throw new Error("Error! Error in the context of useTicketsContext");
  }
  return context;
}
