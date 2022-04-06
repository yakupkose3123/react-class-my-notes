import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
     
      <NavLink to="/" className={({isActive})=>isActive ? styles.activeStyle: undefined}>Home</NavLink>
      <NavLink to="/about" className={({isActive})=>isActive ? styles.activeStyle: undefined}>About</NavLink>
      <NavLink to="/products" className={({isActive})=>isActive ? styles.activeStyle: undefined}>Products</NavLink>
       
      {/*
       <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link> 
      */}

      {/* 
      <a href="/">Home</a>     
      <a href="/about">Abouts</a>     
      <a href="/products">Products</a> 
      //Burada a tagi ile oluşturduğumuzda her geçişte sayfayı render ediyor, Link te direk geçiyor. NavLink te ise üzerine style gibi eklemeler yapabiliyoruz isActive kullanabiliyoruz*/}    
    </div>
  );
};

export default Navbar;
