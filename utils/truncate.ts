export const truncate = (text: string): string => {
  return text.slice(0, 175).concat("...");
};
