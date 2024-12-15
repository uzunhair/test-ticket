import { Currency } from "src/shared/ui/Currency/Currency.tsx";
import { Transfer } from "src/shared/ui/Transfer";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Currency />
      <Transfer />
    </div>
  );
};
