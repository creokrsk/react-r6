import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>Profile</h1>
      <NavLink to="/users">Users List page</NavLink>
      <br />
      <NavLink to={`/users/${userId}/edit`}>Go to edit user {userId}</NavLink>
      <h3>User id: {userId}</h3>
    </div>
  );
};

export default UserProfile;
