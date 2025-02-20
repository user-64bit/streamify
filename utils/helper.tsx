export const formatNumber = (number: number) => {
  // convert 50000000 to 500M
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
};
