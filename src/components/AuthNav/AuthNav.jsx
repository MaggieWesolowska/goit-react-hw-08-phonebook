import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
// import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.linkReg} to='/register'>
        <ToggleButton value='web'>Register</ToggleButton>
      </NavLink>
      <NavLink className={css.linkLog} to='/login'>
        <ToggleButton value='ios'>Log In</ToggleButton>
      </NavLink>
    </div>
  );
};
