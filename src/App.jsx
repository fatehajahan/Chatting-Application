import './App.css'
import Registration from './components/Registration/Registration'
import Login from './components/LogIn/Login'
import HomePage from './components/HomePage/HomePage'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<HomePage />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/login" element={<Login />} />
  </>
  )
);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
