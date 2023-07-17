import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import css from './Navigation.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #333;
  &.active {
    color: white;
    background-color: #673ab7;
    border: white;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to='/' className={css.link}>
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink className={css.link} to='/contacts'>
          Contacts
        </StyledLink>
      )}
    </nav>
  );
};
