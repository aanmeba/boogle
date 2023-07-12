import imgUrl from "../assets/bookcover.png";

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
    const [year, month] = str.split("-");
    return [months[+month - 1], year].join(" ");
  }
  return str;
};

export const handleEscapedChars = (str) => {
  // currently only handle &quot;
  return str.replace(/&quot;/g, '"');
};

export const printAuthors = (array) => {
  let string = "";

  array.forEach((author, i, arr) => {
    if (i === 0) string += author;
    else if (i === arr.length - 1) string += ` and ${author}`;
    else {
      string.trim();
      string += `, ${author}`;
    }
  });

  return string;
};

export const handleReviews = (num) => {
  let str = "";
  num / 1000 > 1 ? (str += (num / 1000).toFixed(2) + "k") : (str += num);
  return num > 1 ? (str += ` reviews`) : (str += ` review`);
};

export const findLastPage = (totalItems, maxResults) => {
  return Math.floor(totalItems / maxResults);
};

export const cleanedData = (book) => {
  const {
    id,
    saleInfo: { isEbook },
    volumeInfo: {
      authors,
      averageRating,
      categories,
      description,
      imageLinks: { thumbnail = "" } = {},
      infoLink,
      publisher,
      publishedDate,
      title,
      subtitle,
      pageCount,
      ratingsCount = 0,
    },
  } = book;

  let authorsInModal,
    authorsInList = authors && authors[0],
    publishingInfo = "";

  if (authors?.length > 1) {
    authorsInModal = printAuthors(authors);
    authorsInList += " and more";
  }

  if (publishedDate) {
    publishingInfo += formatePublishedDate(publishedDate);
  }

  if (publisher) {
    publishingInfo += ` · ${publisher}`;
  }

  const desc = description ? description : "Description is not available";
  const bookCover = thumbnail ? thumbnail : imgUrl;

  return {
    id,
    isEbook,
    authors: { authorsInList, authorsInModal },
    averageRating,
    description: desc,
    categories,
    thumbnail: bookCover,
    publishingInfo,
    infoLink,
    title,
    subtitle,
    pageCount,
    ratingsCount,
  };
};
