import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import FormLayout from "../Layouts/FormLayout";
import AdventureDetails from "../Pages/AdventureDetails";
import PrivetRouter from "../components/PrivetRouter/PrivetRouter";
import UpdateProfile from "../Pages/UpdateProfile";
import Profile from "../components/myProfile/Profile";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/Travel.json'),
        },
        {
          path: "/AdventureDetails/:Details",
          element:<PrivetRouter><AdventureDetails></AdventureDetails></PrivetRouter> ,
          loader: () => fetch('/Travel.json')
        },
        {
          path: "/Update",
          element: <UpdateProfile></UpdateProfile>
        },
        {
          path: "/myProfile",
          element: <PrivetRouter><Profile></Profile></PrivetRouter> 
        }
      ]
    },
    {
      path: "/Form/:page",
      element: <FormLayout></FormLayout>,
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    },
  ]);

  export default router;