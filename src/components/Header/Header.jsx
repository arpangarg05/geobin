import React from 'react'
import {LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Logo} from '../index'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  let home = {}
  if(authStatus){
    home = {
        name: 'Active Issues',
        slug: "/",
        active: true
    }
  }
  else{
    home = {name: 'Home',
      slug: "/",
      active: true}
  }

  const navItems = [
    home, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Issues",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Issue",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <>

<div className="relative w-full bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <Link to={"/"}>
                <div className="inline-flex items-center space-x-2 pt-2">
                    <Logo></Logo>
                    <span className="font-bold">GeoBin</span>
                </div>
                </Link>
                <div className="hidden grow items-start lg:flex">
                    <ul className="ml-12 inline-flex space-x-8">
                        {
                        navItems.map((item) => (
                            item.active ? (
                                <li key={item.name}>
                                    <Link to={item.slug} className='text-sm font-semibold text-gray-800 hover:text-gray-900'>{item.name}</Link>
                                </li>
                            ) : null
                        ))}
                    </ul>
                </div>
                {authStatus && (
                    <div className="hidden lg:block">
                        
                            <LogoutBtn className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" />
                    </div>
                )}
                <div className="lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 cursor-pointer">
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div> 

    </>
  )
}

export default Header