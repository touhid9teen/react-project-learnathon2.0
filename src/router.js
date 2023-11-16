import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Contact from './components/Contact'
import About from "./components/About";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Contact",
        element: <Contact />,
    },
    {
        path: "/About",
        element: <About />,
    },
]);
export default router;