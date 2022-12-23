import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Users = () => {
  return (
    <>
      <h1>Hello Users</h1>
      <NavLink to="/"> link to Main Page</NavLink>
      <Outlet />
    </>
  );
};

export default Users;
