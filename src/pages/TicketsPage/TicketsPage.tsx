import { useState } from "react";
import classNames from "classnames";
import TicketsContext from "src/pages/TicketsPage/TicketsContext.tsx";
import { TCurrency } from "src/shared/ui/Currency/Currency.tsx";
import { Sidebar } from "src/widgets/Sidebar";
import { TicketList } from "src/widgets/TicketList";
import styles from "./TicketsPage.module.scss";
import reactLogo from "../../assets/vite.svg";

export const TicketsPage = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<TCurrency>("rub");

  return (
    <TicketsContext.Provider
      value={{ selectedItems, setSelectedItems, selectedCurrency, setSelectedCurrency }}
    >
      <div className={styles.layout}>
        <div className={styles.container}>
          <div className={classNames(styles.dflex, styles.justifyCenter)}>
            <img src={reactLogo} className={styles.logo} alt="Vite logo" />
          </div>
          <div className={styles.row}>
            <Sidebar />
            <TicketList />
          </div>
        </div>
      </div>
    </TicketsContext.Provider>
  );
};
