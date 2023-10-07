import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Nav } from './styled';

export default function Header() {
  const buttonClicked = useSelector((state) => state.buttonClicked);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>

      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>

      <Link to="/fdf">
        <FaUserAlt size={24} />
      </Link>
      {buttonClicked ? 'Open' : 'Close'}
    </Nav>
  );
}
