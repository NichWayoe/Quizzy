import { UserContext } from "../Providers/UserProvider.react";
import React, {useContext} from "react";
import firebase from '../FirebaseManager/DatabaseManager.react'
import {Nav, NavBtn, NavBtnLink} from './NavBarElements.react'
export default function NavBar() {
  const user = useContext(UserContext);
  return (
      <Nav>
        {!!user ? (
          <NavBtn>
          <NavBtnLink to="/" onClick={() => firebase.auth().signOut()}>Sign Out</NavBtnLink>
        </NavBtn>
        ) : (
          <NavBtn>
            <NavBtnLink to="/signin">SIGN IN</NavBtnLink>
          </NavBtn>
        )}
      </Nav>
  );
}