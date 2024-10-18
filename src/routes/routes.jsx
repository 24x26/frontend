// src/routes/routes.js
import Auth from '../pages/Auth/Auth';
import Dashboard from '../pages/Dashboard/index';

const routes = [
  {
    path:"/",
    element: <Auth />,
  },
  {
    path:"/dashboard",
    element: <Dashboard />,
  }
];

export default routes;
