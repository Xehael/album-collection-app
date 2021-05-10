import React, { Fragment, FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';


type NavbarComponentProps = {
}

const NavbarComponent: FunctionComponent<NavbarComponentProps> = (props: NavbarComponentProps) => {
  return (
    <Fragment>
        <ul>
            <NavLink to='/listAlbums'>
                <li>Albums</li>
            </NavLink>
            <NavLink to='/artiste'>
                <li>Artistes</li>
            </NavLink>
            <NavLink to='/admin'>
                <li>Admin</li>
            </NavLink>
        </ul>
    </Fragment>
  );
};

export default NavbarComponent;
