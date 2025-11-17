import './App.css'
import Signup from './pages/signup.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Login } from './pages/login.jsx';
import { AddDetails } from './pages/add_details.jsx';
import { AddFriend } from './pages/add_friend.jsx';
import DisplayFriends from './pages/get_friend.jsx';


function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Signup />
    },
    {
      path: "/add_details",
      element: <AddDetails />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: '/add_friend',
      element: <AddFriend />
    },
    {
      path: '/get_friend',
      element: <DisplayFriends />
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
