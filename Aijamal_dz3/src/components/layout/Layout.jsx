import { Link, Outlet } from 'react-router-dom';
import style from './layout.module.css';

const Layout = () => {
  return (
    <div>
      <Outlet />
      <footer>
        <nav>
          <Link to="/"> Все пользователи</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
