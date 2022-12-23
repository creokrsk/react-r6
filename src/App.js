import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const elements = useRoutes(routes);
  return (
    <>
      <NavLink to="/users">Users list Page</NavLink>
      {elements}
    </>
  );
}

export default App;
