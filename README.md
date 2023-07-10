# Boogle

Boogle is a simple book search web application that utilises the Google Books API to provide users with book search results and detailed information.

👉 [Boogle](https://aanmeba.github.io/boogle)

## Features

- **Responsive design** to ensure a seamless experience across different devices.
- **Modal component** for displaying detailed information about a selected book.
- **Integrated error handling with routing**, when users enter invalid routes, they are automatically redirected to the Not Found page. The error messages are handled using a centralized component for consistency.
- **Pagination** and **maximum results per page** for convenient browsing.
- **Containers-Components pattern** to maintain a clear separation of concerns and improve code organisation.

## Tech Stack

- **Google Books API**: Used for fetching book data and search results.
- **SASS/SCSS**: Employed with the BEM convention to provide consistent and maintainable styling.
- **Material UI**: Utilised for additional features such as icons, modals, and alert components.
- **React Router DOM**: Enables client-side routing to create a seamless single-page application experience.

## Things to improve

- Add test cases, especially for pagination and max results
