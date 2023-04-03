import { NavLink, Outlet } from "react-router-dom";
import css from './Layout.module.css'

export const Layout = () => {
    return (
        <div>
            <header>
                <ul className={css.layoutList}>
                    <li className={css.layoutItem}>
                        <NavLink to='/' className={css.button}><span className={css.linkContent}>Home</span></NavLink>
                    </li>
                    <li className={css.layoutItem}>
                        <NavLink to='/movies' className={css.button}><span className={css.linkContent}>Movies</span></NavLink>
                    </li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}