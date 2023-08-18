import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";



import Login from "../pages/login/Login";
import Movies from "../pages/movies/Movies";
import Podcast from "../pages/podcast/Podcast";
import Register from "../pages/register/Register";

import Series from "../pages/series/Series";
import Trailer from "../pages/trailer/Trailer";
import SeriesCard from "../components/series/SeriesCard";
import SeriesDetails from "../components/series/SeriesDetails";
import ErrorPage from '../pages/Error/ErrorPage';
import PrivacyPolicy from "../pages/privacy-policy/PrivacyPolicy";
import TermsConditions from "../pages/terms-conditions/TermsConditions";
import LiveTv from "../components/tvs/LiveTv";
import LiveVideo from "../components/tvs/LiveVideo";
import { getData } from "../api/getLiveData";
import Tvs from "../components/tvs/Tvs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trailer",
        element: <Trailer />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/series",
        element: <SeriesCard />,
      },
      {
        path: "/series/seriesDetails",
        element: <SeriesDetails/>,
        
      },
      {
        path: "/live-tv",
        element: <Tvs/>
      },
      {
        path:'/live-tv/live/:id',
        element:<LiveVideo/>,
        loader: ({ params }) =>
        fetch('/tvData.json')
        .then(res => res.json())
        .then(data => data)
    
      },
      {
        path: "/podcast",

        element: <Podcast />,
      },
      {
       path:'/PrivacyPolicy',
       element:<PrivacyPolicy/>
      },
      {
       path:'/TermsConditions',
       element:<TermsConditions/>
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);


export default router;
