import { useEffect, useState } from "react";
import { useTicketsContext } from "src/pages/TicketsPage";
import { TTicket, Ticket } from "src/shared/ui/Ticket";
import { TicketSkeleton } from "src/shared/ui/Ticket/TicketSkeleton.tsx";
import styles from "./TicketList.module.scss";

export const TicketList = () => {
  const [tickets, setTickets] = useState<TTicket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { selectedItems, selectedCurrency } = useTicketsContext();

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

  const filteredTickets = tickets.filter((ticket) => {
    if (selectedItems.length === 0 || selectedItems.includes(10)) {
      return true;
    }
    return selectedItems.includes(ticket.stops);
  });

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
      {filteredTickets.map((ticket, index) => (
        <Ticket key={index} {...ticket} currency={selectedCurrency} />
      ))}
    </div>
  );
};
