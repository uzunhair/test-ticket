export const getStopsDeclension = (count: number): string => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${count} пересадок`;
  }

  switch (lastDigit) {
    case 1:
      return `${count} пересадка`;
    case 2:
    case 3:
    case 4:
      return `${count} пересадки`;
    case 0:
      return "прямой рейс";
    default:
      return `${count} пересадок`;
  }
};
