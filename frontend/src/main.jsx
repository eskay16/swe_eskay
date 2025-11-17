import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/login.jsx';
import { AddDetails } from './pages/add_details.jsx';
import { AddFriend } from './pages/add_friend.jsx';
import DisplayFriends from './pages/get_friend.jsx';

const router = createBrowserRouter([
  {
    path: "",
    element: <App/>
  },
  {
    path: "/add_details",
    element: <AddDetails/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: '/add_friend',
    element: <AddFriend/>
  },
  {
    path: '/get_friend',
    element: <DisplayFriends/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
