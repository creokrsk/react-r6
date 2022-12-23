import React from 'react';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import EditUser from './editUser';
import UserProfile from './userProfile';
import UsersList from './usersList';

const Users = () => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <>
      <h1>Hello Users</h1>
      <NavLink to="/"> link to Main Page</NavLink>
      <Switch>
        <Route path={path} exact component={UsersList} />
        <Route path={path + '/:userId/profile'} component={UserProfile} />
        <Route path={path + '/:userId/edit'} component={EditUser} />
        <Redirect from={path + '/:userId'} to={path + '/:userId/profile'} />
      </Switch>
    </>
  );
};

export default Users;
