export const useFormatDate = (isoString: string | undefined) => {
  if (!isoString) {
    return { day: "TBD", month: "", year: "" };
  }

  const date = new Date(isoString);

  if (isNaN(date.getTime())) {
    return { day: "TBD", month: "", year: "" };
  }

  const day = date.getDate();
  const weekDay = date.toLocaleDateString("default", { weekday: "long" });
  const shortWeekDay = weekDay.slice(0, 3);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return { day, shortWeekDay, month, year };
};
