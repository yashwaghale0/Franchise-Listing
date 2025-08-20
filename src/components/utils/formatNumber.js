export const formatUSNumber = (value) => {
  if (value === null || value === undefined || value === "") return "";
  const number = Number(value.toString().replace(/,/g, ""));
  if (isNaN(number)) return "";
  return number.toLocaleString("en-US");
};
