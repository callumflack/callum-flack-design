import tinydate from "tinydate";

// how do moment("MMMM Do, YYYY")?
// https://github.com/lukeed/tinydate#patterns
// this doesn't fucking work despite being straight form the docsæ
// const format = tinydate("Today is: {MMMM} {DD}, {YYYY}", {
//   MMMM: d => d.toLocaleString("default", { month: "long" }),
//   DD: d => d.getDate(),
// });

const format = tinydate("{YYYY}.{MM}.{DD}");

export default date => {
  return date instanceof Date ? format(date) : format(new Date(date));
};
