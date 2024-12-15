function padZero(num: string): string {
  const hour = Number(num);
  return hour < 10 ? `0${hour}` : `${hour}`;
}

export function calculateDuration(
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string
): string {
  const [startDay, startMonth, startYear] = startDate.split(".");
  const [startHourString, startMinute] = startTime.split(":");
  const startHour = padZero(startHourString);

  const [endDay, endMonth, endYear] = endDate.split(".");
  const [endHourString, endMinute] = endTime.split(":");
  const endHour = padZero(endHourString);

  const start = new Date(`20${startYear}-${startMonth}-${startDay}T${startHour}:${startMinute}:00`);
  const end = new Date(`20${endYear}-${endMonth}-${endDay}T${endHour}:${endMinute}:00`);

  const diff = end.getTime() - start.getTime();

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (minutes) {
    return `${hours} ч ${minutes} мин`;
  }
  return `${hours} ч`;
}
