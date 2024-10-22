import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import './global.css'

function App() {
    return (
        <div className="app">
            <RouterProvider router={router}/>
        </div>
    )
}
export default App;
