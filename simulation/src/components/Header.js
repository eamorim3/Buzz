import React from "react";

const Header = ({ title }) => {

  return (
    <div className= 'header' style= {{color: 'white'}}>
        <h1> {title} </h1>
    </div>
  );
}
Header.defaultProps = {
  title: 'BUZZMEDIA',
  color: 'white'
}
export default Header;
