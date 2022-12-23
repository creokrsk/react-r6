import React from 'react';
import { NavLink } from 'react-router-dom';

const usersArr = [];

for (let i = 0; i < 5; i++) {
  usersArr[i] = i;
}

const UsersList = () => {
  return (
    <div>
      <ul>
        {usersArr.map((el, i) => (
          <li key={i}>
            <NavLink to={`${i}/profile`}>{`user ${el}`}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
