import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes'


createRoot(document.getElementById('root')).render(
    <div className='bg-base-200'>
        <RouterProvider router={router}>
        </RouterProvider>
    </div>

)
