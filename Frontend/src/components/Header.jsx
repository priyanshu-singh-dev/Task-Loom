import React from "react";
import style from "./styles/Header.module.css";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header
        className={style.mainHeaderStyle}
        style={
          {
            // minHeight: "60px",
            // height: "5vh",
          }
        }
      >
        <ul className={style.innerContainer}>
          <li>
            <NavLink
              title="home"
              to="/home"
              end
              className={({ isActive }) =>
                isActive ? style.activeNavigation : style.inActiveNavigation
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              title="create-task"
              to="create-task"
              className={({ isActive }) =>
                isActive ? style.activeNavigation : style.inActiveNavigation
              }
            >
              Create Task
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}
