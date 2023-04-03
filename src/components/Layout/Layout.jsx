import { Link, Outlet, useLocation } from "react-router-dom";
import css from './Layout.module.css'



export const Layout = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
      <div>
        <header>
          <ul className={css.layoutList}>
            <li className={css.layoutItem}>
              <Link to='/' className={css.button} style={isActive("/") ? {color: '#f92056'} : {}}>
                <span className={css.linkContent}>Home</span>
              </Link>
            </li>
            <li className={css.layoutItem}>
              <Link to='/movies' className={css.button} style={isActive("/movies") ? {color: '#f92056'} : {}}>
                <span className={css.linkContent}>Movies</span>
              </Link>
            </li>
          </ul>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    );
  }