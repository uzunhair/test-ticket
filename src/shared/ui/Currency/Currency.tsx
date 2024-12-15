import classNames from "classnames";
import { useTicketsContext } from "src/pages/TicketsPage";
import stylesSidebar from "src/widgets/Sidebar/Sidebar.module.scss";
import styles from "./Currency.module.scss";

export type TCurrency = "rub" | "usd" | "eur";

export const Currency = () => {
  const { selectedCurrency, setSelectedCurrency } = useTicketsContext();

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
