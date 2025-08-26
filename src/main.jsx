import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AddBlog from './AddBlog.jsx'
import DisplayShelf from './DisplayShelf.jsx'
import UpdateShelf from './UpdateShelf.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    // errorElement:<Error/>,
    children: [
      {
        index : true,
        element: <AddBlog/>
      },
      {
        path: "add",
        element: <AddBlog/>
      },
      {
        path: "display",
        element: <DisplayShelf/>
      },
      {
        path: "update/:id",
        element: <UpdateShelf/>
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
