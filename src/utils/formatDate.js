import tinydate from "tinydate";

// {YYYY}.{MM}.{DD} | moment("MMMM Do, YYYY")
const format = tinydate("{MMMM} {Do} {YYYY}");

export default date => {
  return date instanceof Date ? format(date) : format(new Date(date));
};
