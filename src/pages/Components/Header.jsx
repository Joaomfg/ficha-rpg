import React from "react";
import styles from "./Header.module.css";

function Header({ title, showNavBar }) {
  return (
    <div className={ styles.header }>
      <h1 className="text-3xl font-bold mt-0">—{title}—</h1>
      {showNavBar && (
        <nav>
          <span>PERFIL</span>
          <span>ATRIBUTOS</span>
          <span>RITUAIS</span>
          <span>INVETARIO</span>
          <span>HISTORIA</span>
        </nav>
      )}
    </div>
  );
}

export default Header;
