const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://www.googleapis.com/books/v1/volumes";

export const searchBooks = async (query) => {
  const searchTerm = query.split(" ").join("+");

  const response = await fetch(`${API_URL}?q=${searchTerm}&key=${API_KEY}`);
  if (!response.ok) throw new Error(`Books with ${query} not found`);
  const data = await response.json();

  console.log(searchTerm, data, "--- data");
  return data.items;
};
