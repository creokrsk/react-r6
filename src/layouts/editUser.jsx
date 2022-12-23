import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const EditUser = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>Edit Profile</h1>
      <NavLink to={'/users/' + userId}>Go to user profile</NavLink>
      <br />
      <NavLink to={'/users/' + (+userId + 1)}> Go to next user</NavLink>
      <br />
      <NavLink to={'/users'}> Users List page</NavLink>
    </div>
  );
};

export default EditUser;
