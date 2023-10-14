import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'
import Products from './pages/products.jsx'
import NotFound404 from './pages/404.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello</div>,
    errorElement: <NotFound404/>
  },
  {
    path: 'products/',
    element: <Products/>
  },
  {
    path: 'products/',
    element: <Products/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />  
    </Provider>
  </React.StrictMode>,
)
