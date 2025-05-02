import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import Filters from "./Filters/Filter";

import stylesheet from "./app.css?url";
import Header from "./Header/Header";
import BooksList from "./BooksList/BooksList";
import { useContext, useState } from "react";


import { createContext } from "react";
export const BooksContext = createContext([]);


export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [filterTitle, setFilterTitle] = useState("dsfg");
  const [books, setBooks] = useState([
    {
      id: 0,
      title: "Duma i uprzedzenie",
      author: "Jane Austen",
      pages: 350,
      price: 40,
      cover: "hard"
    }
  ]);
  console.log("cswefvfgrtyu:", books);


  return (
    <div>
      <Header/> 
      <Filters setFilterTitle={setFilterTitle}/>
      <BooksContext.Provider value={books}>
        <BooksList filterTitle={filterTitle}/>
      </BooksContext.Provider>
    </div>
  );
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div>
      
      <main className="pt-16 p-4 container mx-auto">
        <h1>{message}</h1>
        <p>{details}</p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto">
            <code>{stack}</code>
          </pre>
        )}
      </main>
    </div>
  );
}
