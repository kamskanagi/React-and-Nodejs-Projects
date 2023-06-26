import Home from "./Pages/Home/Home"
import './app.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Children } from "react";
import Gig from "./Pages/gig/Gig";
import Gigs from "./Pages/gigs/Gigs";
import Orders from "./Pages/orders/Orders";
import Messages from "./Pages/messages/Messages";
import Message from "./Pages/message/Message";
import Login from "./Pages/login/Login";
import Register from "./Pages/resgister/register";
import Add from "./Pages/add/Add";
import MyGigs from "./Pages/MyGigs/MyGigs";


function App() {

  const Layout =()=>{
    return(
      <div className="app">
        <Navbar />
        <Outlet  />
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/orders",
          element: <Orders/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element:<Register/>
        },
        {
          path: "/add",
          element:<Add/>
        },        {
          path: "/myGigs",
          element:<MyGigs/>
        }
      ]
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
