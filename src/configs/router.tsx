import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import Main from '../pages/Main';
import Other from '../pages/Other';
import Project from '../pages/Project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Main />,
    children: [
      { path: '/', element: <About /> },
      {
        path: '/projects',
        element: <Project />,
      },
      {
        path: '/others',
        element: <Other />,
      },
    ],
  },
]);

export default router;
