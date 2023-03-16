import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')

  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full flex items-center py-5 fixed top-0 z-20 bg-primary
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gpa-2"
          onClick={() => {
            setActive("")
            window.scroll(0, 0)
          }}
        >
          <img 
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white font-bold cursor-pointer text-[18px]">
            VJS
            <span className="sm:block hidden">
              | React + Javascript
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                ? "text-white"
                : "text-secondary"
              }`}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar