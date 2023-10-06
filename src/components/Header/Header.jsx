import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import css from './Header.module.css'


export const Header = () => {
  const StyledLink = styled(NavLink)`
  color:  #fff;

  &.active {
    color: orange;
  }
`;

  return (
    <nav className={css.header}>
        <StyledLink className={css.list} to='/'>
            HOME
        </StyledLink>
        <StyledLink className={css.list} to='movies'>
          MOVIES
        </StyledLink>
    </nav>
  )
}
