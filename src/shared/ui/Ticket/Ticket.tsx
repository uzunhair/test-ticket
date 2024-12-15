import viteLogo from "src/assets/vite.svg";
import { carrierName } from "src/shared/ui/Ticket/lib/helpers/carrierName.ts";
import styles from "./Ticket.module.scss";

export type TTicket = {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
};

export const Ticket = ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  stops,
  price,
  carrier,
}: TTicket) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.action}>
        <div className={styles.company}>
          <img src={viteLogo} className={styles.logo} alt="Turkish AirLines" />
          <div className={styles.companyFit}>
            <span>{carrierName(carrier)}</span>
          </div>
        </div>
        <button type="button" className={styles.btn}>
          Купить <br /> за {price} ₽
        </button>
      </div>
      <div className={styles.divider} />
      <div className={styles.body}>
        <div className={styles.departure}>
          <div className={styles.time}>{departure_time}</div>
          <div className={styles.name}>
            {origin} {origin_name}
          </div>
          <div className={styles.date}>{departure_date}</div>
        </div>
        <div className={styles.stops}>
          <div className={styles.planeTime}>
            <div className={styles.plane}>
              <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m16.954 9.793-2.719 1.268c-2-.64-4.862-1.236-7.398-2.056l-1.201.55c1.32 1.029 3.135 2.33 4.52 3.408L7.439 14.23c-1.173-.248-2.418-.338-3.349-.532-.506-.106-.816.339-.338.71 2.256 1.759 3.159 2.469 3.159 2.469.392.305.875.497 1.343.283l12.445-5.803c.906-.46.871-1.106.64-1.629-.547-1.173-2.049-1.003-4.384.064Z"
                />
              </svg>
              <div>в пути 3 часа</div>
              <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m16.109 14.02-2.719-1.268c-.795-1.945-2.178-4.52-3.18-6.99l-1.193-.567c.06 1.674.23 3.9.295 5.655l-2.72-1.268c-.564-1.058-1.295-2.069-1.744-2.907-.245-.456-.785-.408-.762.198.103 2.858.14 4.006.14 4.006.018.497.182.99.646 1.21l12.445 5.804c.935.398 1.407-.043 1.659-.557.547-1.173-.549-2.214-2.867-3.317Z"
                />
              </svg>
            </div>
          </div>
          {stops} пересадка
        </div>
        <div className={styles.arrival}>
          <div className={styles.time}>{arrival_time}</div>
          <div className={styles.name}>
            {destination} {destination_name}
          </div>
          <div className={styles.date}>{arrival_date}</div>
        </div>
      </div>
    </div>
  );
};
