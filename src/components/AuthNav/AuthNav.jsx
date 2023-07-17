import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: white;
    background-color: orangered;
    border: white;
  }
`;

export const AuthNav = () => {
  return (
    <div>
      <StyledLink className={css.linkReg} to='/register'>
        Register
      </StyledLink>
      <StyledLink className={css.linkLog} to='/login'>
        Login
      </StyledLink>
    </div>
  );
};
