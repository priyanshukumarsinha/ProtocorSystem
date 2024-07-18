import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.jsx'
import Student from './pages/Student.jsx'
import Teacher from './pages/Teacher.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/teacher",
    element: <Teacher />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <RouterProvider router = {router}>
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
