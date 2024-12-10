import './App.css'
import Registration from './pages/Registration/Registration'
import Login from './pages/LogIn/Login'
import HomePage from './pages/HomePage/HomePage'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import firebaseConfig from './components/Authentication/firebase.config';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ForgotPassword from './pages/ForgotPass/ForgotPassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path='/forgotpassword' element={<ForgotPassword />} />
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
