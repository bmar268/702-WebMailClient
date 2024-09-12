export const getDateTimeFormat = (dateTime: string) => {
  const currDateTime = new Date(dateTime);
  const date =
    currDateTime.getDate() < 10
      ? `0${currDateTime.getDate()}`
      : currDateTime.getDate();
  const month =
    currDateTime.getMonth() + 1 < 10
      ? `0${currDateTime.getMonth() + 1}`
      : currDateTime.getMonth() + 1;
  const year = currDateTime.getFullYear();

  let hours = currDateTime.getHours();
  const ampm = hours < 12 ? "am" : "pm";
  hours = hours > 12 ? hours % 12 : hours;
  hours = hours < 10 ? parseInt(`0${hours}`) : hours;
  const minutes =
    currDateTime.getMinutes() < 10
      ? `0${currDateTime.getMinutes()}`
      : currDateTime.getMinutes();

  return `${date}/${month}/${year} ${hours}:${minutes}${ampm}`;
};
