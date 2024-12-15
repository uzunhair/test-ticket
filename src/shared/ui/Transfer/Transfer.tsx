import { useState } from "react";
import stylesSidebar from "src/widgets/Sidebar/Sidebar.module.scss";
import styles from "./Transfer.module.scss";

interface TransferProps {
  onSelectionChange: (selectedItems: number[]) => void;
}

export const Transfer = ({ onSelectionChange }: TransferProps) => {
  const items = [
    { id: 1, name: "Все" },
    { id: 2, name: "Без пересадок" },
    { id: 3, name: "1 пересадка" },
    { id: 4, name: "2 пересадки" },
    { id: 5, name: "3 пересадки только" },
  ];

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((itemId) => itemId !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
    onSelectionChange(selectedItems);
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
          </div>
        ))}
      </div>
    </div>
  );
};
