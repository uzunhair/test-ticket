type TCarrierCode = "BA" | "S7" | "SU" | "TK";

const carrierData: Record<TCarrierCode, string> = {
  BA: "British Airways",
  S7: "S7 Airlines",
  SU: "Aeroflot",
  TK: "Turkish Airlines",
};

export const carrierName = (carrier: string): string => {
  return carrierData[carrier as TCarrierCode] || "не указано";
};
