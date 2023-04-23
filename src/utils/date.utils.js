export const convertUTCToMonthDateYearFormat = ({ utcDateString }) => {
  const date = new Date(utcDateString);
  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return dateString;
};
