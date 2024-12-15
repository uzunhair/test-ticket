import classNames from "classnames";
import { Sidebar } from "src/widgets/Sidebar";
import { TicketList } from "src/widgets/TicketList";
import styles from "./TicketsPage.module.scss";
import reactLogo from "../../assets/vite.svg";

export const TicketsPage = () => {
  return (
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
  );
};
