import React from "react";

function Header({ title, showNavBar }) {
  return (
    <div className="header">
      <h1>—{title}—</h1>
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
