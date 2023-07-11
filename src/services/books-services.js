import { cleanedData } from "../helpers/helpers";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://www.googleapis.com/books/v1/volumes";

export const searchBooks = async (searchTerm, page = 1, maxResults = 10) => {
  const keyword = searchTerm.split(" ").join("+");
  const startIndex = (page - 1) * +maxResults;
  const fetchUrl = `${API_URL}?q=${keyword}&key=${API_KEY}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=relevance`;

  const response = await fetch(fetchUrl);
  if (!response.ok)
    throw new Error(
      `An unexpected error occurred to fetch data. Please try later. 🚨`
    );

  const data = await response.json();
  if (!data.totalItems || !data.items) {
    throw new Error(`Books with ${searchTerm} not found`);
  }

  return { data: data.items.map(cleanedData), totalItems: data.totalItems };
};

export const delay = (data, waitTime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, waitTime);
  });
};

export const findLastPage = (totalItems, maxResults) => {
  return Math.floor(totalItems / maxResults);
};
