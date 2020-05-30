import React from "react";
import { Jumbotron } from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/4k.svg";

const Header = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <Jumbotron style={{ textAlign: "center" }}>
      <div className="wrap" onClick={refreshPage}>
        <Logo className="header-icon" />
      </div>
    </Jumbotron>
  );
};

export default Header;
