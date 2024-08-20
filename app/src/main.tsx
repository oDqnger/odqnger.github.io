import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from "./routes/root.tsx"
import ErrorPage from "./routes/error-page.tsx"
import "./styles/output.css"
import "@radix-ui/themes/styles.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Theme } from "@radix-ui/themes"

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
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>,
)
