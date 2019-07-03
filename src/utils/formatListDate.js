import tinydate from "tinydate";

const format = tinydate("{YYYY}");

export default date => {
  return date instanceof Date ? format(date) : format(new Date(date));
};
