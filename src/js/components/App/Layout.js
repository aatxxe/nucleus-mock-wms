import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

// Default page layout
export function Layout() {
  return (
    <>
      <header>
        <img src='../images/logo.png' />
        <h1>
          Nucleus <span>Mock</span>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                to='/vendors'>
                Vendors
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                to='/invoices'>
                Invoices
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                to='/orders'>
                Orders
              </NavLink>
            </li>
          </ul>
        </nav>
        <div id='github-logo'>
          <a href='https://github.com/aatxxe/nucleus-mock-wms'>
            <img src='/images/github-mark.svg' />
          </a>
        </div>
      </header>
      <Outlet />
      <footer></footer>
    </>
  )
}
