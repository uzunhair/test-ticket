import { TCurrency } from "src/shared/ui/Currency/Currency.tsx";

export const currencyConversion = (price: number, currency: TCurrency) => {
  if (currency === "usd") {
    const value = price / 103;
    return `${value.toFixed(2)} $`;
  }

  if (currency === "eur") {
    const value = price / 109;
    return `${value.toFixed(2)} €`;
  }

  return `${price} ₽`;
};
