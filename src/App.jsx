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
import firebaseConfig from './components/Authentication/firebase.config';
import ProfilePage from './components/ProfilePage/ProfilePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path='/profilepage' element={<ProfilePage />} />
    </Route>
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
