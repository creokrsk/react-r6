import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const usersArr = [];

for (let i = 0; i < 5; i++) {
  usersArr[i] = i;
}

const UsersList = () => {
  const { path } = useRouteMatch();
  console.log('path: ', path);
  return (
    <div>
      <ul>
        {usersArr.map((el, i) => (
          <li key={i}>
            <NavLink to={`${path}/${i}`}>{`user ${el}`}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
