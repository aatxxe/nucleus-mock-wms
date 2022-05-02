import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

// Default page layout
export function Layout() {
  return (
    <>
      <header>
        <img src='../images/logo.png' />
        <h1>Nucleus</h1>
        <nav>
          <ul>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to='/invoices'>
                Invoices
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer></footer>
    </>
  )
}