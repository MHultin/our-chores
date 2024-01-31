import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'

import './globals.css'


const router  = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        }
    ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
)
