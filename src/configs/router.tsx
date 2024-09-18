import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import Main from '../pages/Main';
import Project from '../pages/Project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Main />,
    children: [
      { path: '/', element: <About /> },
      {
        path: '/project',
        element: <Project />,
      },
    ],
  },
]);

export default router;
