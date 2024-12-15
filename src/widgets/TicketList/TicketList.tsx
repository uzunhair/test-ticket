import { useEffect, useState } from "react";
import { TTicket, Ticket } from "src/shared/ui/Ticket";
import { TicketSkeleton } from "src/shared/ui/Ticket/TicketSkeleton.tsx";
import styles from "./TicketList.module.scss";

export const TicketList = () => {
  const [tickets, setTickets] = useState<TTicket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("src/data/tickets.json"); // Укажите правильный путь к вашему JSON файлу
        if (!response.ok) {
          throw new Error("Не удалось получить ответ");
        }
        const data = await response.json();
        setTickets(data.tickets);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError("Ошибка загрузки билетов");
        setLoading(false);
        console.log(error);
      }
    };

    fetchTickets();
  }, []);

  if (loading) {
    return (
      <div className={styles.tickets}>
        <TicketSkeleton />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.tickets}>
      {tickets.map((ticket, index) => (
        <Ticket key={index} {...ticket} />
      ))}
    </div>
  );
};
