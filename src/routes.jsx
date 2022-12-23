import { Navigate, Outlet } from 'react-router-dom';
import EditUser from './layouts/editUser';
import Main from './layouts/main';
import UserProfile from './layouts/userProfile';
import Users from './layouts/users';
import UsersList from './layouts/usersList';

const routes = [
  {
    path: '',
    element: <Main />,
  },
  {
    path: 'users',
    element: <Users />,
    children: [
      {
        index: true,
        element: <UsersList />,
      },
      {
        path: ':userId',
        element: <Outlet />,
        children: [
          {
            path: 'edit',
            element: <EditUser />,
          },
          {
            path: 'profile',
            element: <UserProfile />,
          },
          {
            index: true,
            element: <Navigate to="./profile" />,
          },
          {
            path: '*',
            element: <Navigate to="../profile" />,
          },
        ],
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <Navigate to="/" />,
  // },
];

export default routes;
