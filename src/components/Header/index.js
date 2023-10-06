import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="">
        <FaHome size={24} />
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="">
        <FaSignInAlt size={24} />
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="">
        <FaUserAlt size={24} />
      </a>
    </Nav>
  );
}
