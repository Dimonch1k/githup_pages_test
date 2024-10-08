import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import LeskivDO from "../../components/leskivdo/LeskivDO";
import Services from "../../components/services/Services";
import Service from "../../components/services/service/Service";
import Doctors from "../../components/doctors/Doctors";
import AboutUs from "../../components/about-us/AboutUs";
import ContactUs from "../../components/contact-us/ContactUs";
import Location from "../../components/location/Location";

const ErrorPage = () => {
  return <div>Page Not Found 404</div>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LeskivDO />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:title",
        element: <Service />,
      },
      { path: "/doctors", element: <Doctors /> },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/location",
        element: <Location />,
      },
    ],
  },
]);

export default router;
