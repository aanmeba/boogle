const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://www.googleapis.com/books/v1/volumes";

export const searchBooks = async (query) => {
  const searchTerm = query.split(" ").join("+");

  const response = await fetch(`${API_URL}?q=${searchTerm}&key=${API_KEY}`);
  if (!response.ok)
    throw new Error(
      `An unexpected error occurred to fetch data. Please try later. 🚨`
    );
  const data = await response.json();

  if (!data.totalItems || !data.items) {
    throw new Error(`Books with ${query} not found`);
  }
  console.log(searchTerm, data, "--- data");
  return data.items;
  // return [data.items, data.totalItems];
};
