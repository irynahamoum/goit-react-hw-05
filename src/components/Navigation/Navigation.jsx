import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const getNavLinkClass = ({ isActive }) => {
  return isActive ? css.active : css.link;
};
const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={getNavLinkClass}>
        HOME
      </NavLink>
      <NavLink to="/movies" className={getNavLinkClass}>
        MOVIES
      </NavLink>
      <NavLink to="/movies/:movieId" className={getNavLinkClass}></NavLink>
      <NavLink to="/movies/:movieId/cast" className={getNavLinkClass}></NavLink>
      <NavLink to="/movies/:movieId/reviews" className={getNavLinkClass}></NavLink>
      <NavLink to="*" className={getNavLinkClass}></NavLink>
    </nav>
  );
};

export default Navigation;
