import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import MenuMobile from "./MenuMobile"
import { FaBars } from "react-icons/fa"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  `)

  return (
    <div className="w-100 bg-black text-white">

      <div className="container py-6">
        <div className="flex justify-between items-center">
          <Link to="/">
            <span class="font-bold uppercase">O design de Luis Jardim</span>
          </Link>

          <button
            className="sm:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            <FaBars className="h-6 w-auto text-gray-900 fill-current -mt-1" />
          </button>

          <div className="hidden sm:block">
            {site.data.menu.map((link, key) => (
              <Link
                key={`menu_desktop_link${key}`}
                className="ml-6 sm:ml-8 text-sm sm:text-base font-medium px-px border-b-2 pb-2 border-transparent text-gray-300 hover:text-white hover:border-gray-200 transition duration-150 ease-in-out"
                activeClassName="border-green-900 text-white hover:border-green-600"
                to={link.to}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <MenuMobile
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          links={site.data.menu}
        />
      </div>
    </div>
  )
}

export default Header
