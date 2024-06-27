export const useStatusClassName = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-[#00B47D]";
    case "Scheduled":
      return "bg-[#006A4B]";
    case "Unscheduled":
      return "bg-[#011638]";
    default:
      return "bg-[#011638]";
  }
};
