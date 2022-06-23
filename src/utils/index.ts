const formatCurrency = (() => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (value: number) => formatter.format(value);
})();

const minutesToTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const extraMinutes = Math.floor(minutes % 60);

  const time: string[] = [];

  if (hours > 0) time.push(`${hours}h`);
  if (extraMinutes > 0) time.push(`${extraMinutes}m`);

  return time.join(" ");
};

export { formatCurrency, minutesToTime };
