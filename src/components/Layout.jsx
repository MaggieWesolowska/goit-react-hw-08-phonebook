import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
// import styled from 'styled-components';

// const StyledLink = styled(NavLink)`
//   color: white;
//   &.active {
//     color: orangered;
//   }
// `;

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
