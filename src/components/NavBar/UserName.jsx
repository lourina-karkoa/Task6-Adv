import React from 'react'
import { NavLink } from 'react-router-dom'

export default function UserName({userName,path}) {
  return (
    <NavLink to={path} className={({ isActive }) => {
      return `text-lg font-semibold leading-6 dark:text-white lg:text-xl ${isActive
          ? "border-b border-darkMode  dark:border-white"
          : ""}` }}>{userName}
    </NavLink>
  )
}

