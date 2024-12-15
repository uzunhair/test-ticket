import { useTicketsContext } from "src/pages/TicketsPage";
import stylesSidebar from "src/widgets/Sidebar/Sidebar.module.scss";
import styles from "./Transfer.module.scss";

export const Transfer = () => {
  const items = [
    { id: 10, name: "Все" },
    { id: 0, name: "Без пересадок" },
    { id: 1, name: "1 пересадка" },
    { id: 2, name: "2 пересадки" },
    { id: 3, name: "3 пересадки" },
  ];
  const { selectedItems, setSelectedItems } = useTicketsContext();

  const handleCheckboxChange = (id: number) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((itemId) => itemId !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };

  const handleClickOnly = (id: number) => {
    setSelectedItems([id]);
  };

  return (
    <div>
      <h3 className={stylesSidebar.title}>Количество пересадок</h3>
      <div className={styles.form}>
        {items.map((item) => (
          <div key={item.id} className={styles.formCheck}>
            <input
              className={styles.formCheckInput}
              type="checkbox"
              id={item.id.toString()}
              checked={selectedItems.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <label className={styles.formCheckLabel} htmlFor={item.id.toString()}>
              {item.name}
            </label>

            <div
              className={styles.only}
              role="button"
              tabIndex={0}
              onClick={() => handleClickOnly(item.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleClickOnly(item.id);
                }
              }}
            >
              только
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
