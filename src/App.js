import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Rout/Rout';

function App() {
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
