export const addEllipsis = (str, limit) => {
  if (str.length > limit) {
    return str.slice(0, limit) + "...";
  }
  return str;
};

export const getPublishedYear = (str) => {
  if (str.includes("-")) {
    return str.split("-")[0];
  }
  return str;
};

export const formatePublishedDate = (str) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (str.includes("-")) {
    const [year, month, date] = str.split("-");
    return [date, months[+month - 1], year].join(" ");
  }
  return str;
};

export const handleEscapedChars = (str) => {
  // currently only handle &quot;
  return str.replace(/&quot;/g, '"');
};

export const printAuthors = (array) => {
  return array
    .map((author, i, arr) =>
      i === 0 ? author : i === arr.length - 1 ? `and ${author}` : `, ${author}`
    )
    .join(" ");
};
