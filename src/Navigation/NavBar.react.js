import { UserContext } from "../Providers/UserProvider.react";
import React, {useContext} from "react";
import firebase from '../FirebaseManager/DatabaseManager.react'
import {Nav, NavBtn, NavBtnLink, NavLink} from './NavBarElements.react'
import { AiFillHome} from "react-icons/ai";
import {FaUserAlt} from "react-icons/fa";
import {BsFillBarChartFill} from "react-icons/bs";

export default function NavBar() {
  const user = useContext(UserContext);
  return (
      <div>
        {!!user ? (
        <Nav>
        <NavLink to="/home">
          <hi>Quizzy</hi>
        </NavLink>
        <NavLink to="/home">
          <AiFillHome/>
        </NavLink>
        <NavLink to="/leaderboard">
          <BsFillBarChartFill/>
        </NavLink>
        <NavLink to="/myprofile">
          <FaUserAlt/>
        </NavLink>

        <NavBtn>
          <NavBtnLink to="/" onClick={() => firebase.auth().signOut()}>Sign Out</NavBtnLink>
        </NavBtn>
        </Nav>
        ) : (
          <Nav>
          <NavBtn>
            <NavBtnLink to="/signin">SIGN IN</NavBtnLink>
          </NavBtn>
          </Nav>
        )}
      </div>
  );
}