import './App.css'
import Signup from './pages/signup.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  Login, AddDetails, AddFriend, DisplayFriends
} from "./imports.jsx";


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
