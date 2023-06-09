const formatDate = (dataString: string): string => {
  return new Date(dataString).toLocaleString("vi", {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default formatDate;
