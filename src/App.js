import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Main from './layouts/main';
import Users from './layouts/users';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/users">Users list Page</NavLink>
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/" component={Main} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
