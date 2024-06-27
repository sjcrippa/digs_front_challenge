export const formatDate = (isoString) => {
  if (!isoString) {
    console.log("isoString is undefined or null");
    return "No Date Provided";
  }

  const date = new Date(isoString);

  if (isNaN(date.getTime())) {
    console.log(`Invalid date: ${isoString}`);
    return "Invalid Date";
  }

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};
