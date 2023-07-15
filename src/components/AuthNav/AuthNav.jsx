import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.linkReg} to='/register'>
        <Button variant='contained'>Register</Button>
      </NavLink>
      <NavLink className={css.linkLog} to='/login'>
        <Button variant='contained'>Log In</Button>
      </NavLink>
    </div>
  );
};
