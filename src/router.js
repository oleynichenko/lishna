import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import {Work} from "./pages/Work";
import {About} from "./pages/About";
import {Books} from "./pages/Books";
import {Collaboration} from "./pages/Collaboration";
import Contacts from "./pages/Contacts";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'work',
        element: <Work />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'books',
        element: <Books />,
      },
      {
        path: 'collaboration',
        element: <Collaboration />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },

    ],
  },
]);

export default router;
