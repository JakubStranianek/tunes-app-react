import React from 'react';
import {NavLink} from "react-router-dom";
import styles from '../components/TheNavigation.module.scss';

function TheNavigation() {
  return (
    <nav className={styles.navigation}>
        <NavLink className={({ isActive }) => isActive ? styles.active : styles.none} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : styles.none} to="/about">About</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : styles.none} to="/tunes">Tunes</NavLink>
    </nav>
  
  )
}

export default TheNavigation;
