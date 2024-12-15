export const formatDate = (date: string): any => {
  const [dayString, monthString, yearString] = date.split(".");
  const initDate = new Date(`20${yearString}-${monthString}-${dayString}T00:00:00`);

  // 9 окт, 2018г, Пт

  const day = initDate.getDate();
  const month = initDate.toLocaleString("default", { month: "short" });
  const year = initDate.getFullYear();
  const weekDay = initDate.toLocaleString("default", { weekday: "short" });

  return `${day} ${month}, ${year}, ${weekDay}`;
};
