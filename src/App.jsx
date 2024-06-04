import "./App.css";

// react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // v6...
import {useState, useEffect} from "react"
import axios from "axios"

// pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx"
import News from "./pages/News.jsx"
import Contact from "./pages/Contact.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
import NewsDetail from "./pages/NewsDetail"
import Contract from "./pages/Contract"

// layouts
import RootLayout from "./layouts/RootLayout";
import NewsLayout from "./layouts/NewsLayout"

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contract",
          element: <Contact />,
        },
        {
          path: "news",
          element: <NewsLayout />,
          children: [
            {
              index: true,
              element: <News />,
            },
            {
              path: ":id",
              element: <NewsDetail />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;