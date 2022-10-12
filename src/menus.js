import React from 'react';
import { NavLink } from 'react-router-dom';
import './stylesheets/menus.scss';

const selectedStyle = {
  backgroundColor: 'white',
  color: 'grey',
};

export function AboutMenu({ match }) {
  return (
    <div className='about-menu'>
      <li>
        <NavLink
          end
          to='/about'
          className={({ isActive }) => 'navLink' + (isActive ? 'actived' : '')}
          style={({ isActive }) => (isActive ? selectedStyle : {})}
        >
          걸어온 길
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => 'navLink' + (isActive ? 'actived' : '')}
          to='/about/history'
          style={({ isActive }) => (isActive ? selectedStyle : {})}
        >
          교육과정
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => 'navLink' + (isActive ? 'actived' : '')}
          to='/about/services'
          style={({ isActive }) => (isActive ? selectedStyle : {})}
        >
          한것들
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => 'navLink' + (isActive ? 'actived' : '')}
          to='/about/location'
          style={({ isActive }) => (isActive ? selectedStyle : {})}
        >
          연락처
        </NavLink>
      </li>
    </div>
  );
}
export function MainMenu() {
  return (
    <nav className='main-menu'>
      <NavLink
        className={({ isActive }) => 'navLink' + (isActive ? 'actived' : '')}
        to='/'
        style={({ isActive }) => (isActive ? selectedStyle : {})}
      >
        성향
      </NavLink>
      <NavLink
        className={({ isActive }) => 'navLink' + (isActive ? 'actived' : '')}
        to='/products'
        style={({ isActive }) => (isActive ? selectedStyle : {})}
      >
        프로젝트
      </NavLink>
      <NavLink
        className={({ isActive }) => 'navLink' + (isActive ? 'actived' : '')}
        to='/about'
        style={({ isActive }) => (isActive ? selectedStyle : {})}
      >
        소개
      </NavLink>
      <NavLink
        className={({ isActive }) => 'navLink' + (isActive ? 'actived' : '')}
        to='/contact'
        style={({ isActive }) => (isActive ? selectedStyle : {})}
      >
        깃허브
      </NavLink>
    </nav>
  );
}
