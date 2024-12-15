import stylesSidebar from "src/widgets/Sidebar/Sidebar.module.scss";
import styles from "./Transfer.module.scss";

export const Transfer = () => {
  const items = [
    { id: 1, name: "Все" },
    { id: 2, name: "Без пересадок" },
    { id: 3, name: "1 пересадка" },
    { id: 4, name: "2 пересадки" },
    { id: 5, name: "3 пересадки только" },
  ];

  return (
    <div>
      <h3 className={stylesSidebar.title}>Количество пересадок</h3>
      <div className={styles.form}>
        {items.map((item) => (
          <div key={item.id} className={styles.formCheck}>
            <input className={styles.formCheckInput} type="checkbox" id={item.id.toString()} />
            <label className={styles.formCheckLabel} htmlFor={item.id.toString()}>
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
