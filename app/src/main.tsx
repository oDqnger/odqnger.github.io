import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from "./routes/root.tsx"
import ErrorPage from "./routes/error-page.tsx"
import "./styles/output.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/test-page",
    element: 
      <>
        <h1>Hello World!</h1>
      </>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
