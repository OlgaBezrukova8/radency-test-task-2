const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-US", options);
};

export const formatCurrentDate = (): string => {
  return new Date().toLocaleDateString("en-US", options);
};
