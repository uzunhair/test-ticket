import { useState } from "react";
import classNames from "classnames";
import stylesSidebar from "src/widgets/Sidebar/Sidebar.module.scss";
import styles from "./Currency.module.scss";

type TCurrency = "rub" | "usd" | "eur";

export const Currency = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<TCurrency>("rub");

  const handleCurrencyChange = (currency: TCurrency) => {
    setSelectedCurrency(currency);
  };

  const items: TCurrency[] = ["rub", "usd", "eur"];

  return (
    <div>
      <h3 className={stylesSidebar.title}>Валюта</h3>
      <div className={styles.btnGroup} role="group" aria-label="Выбор валюты">
        {items.map((currency) => (
          <button
            type="button"
            key={currency}
            onClick={() => handleCurrencyChange(currency)}
            className={classNames(styles.btn, {
              [styles.btnActive]: selectedCurrency === currency,
            })}
          >
            {currency.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};
