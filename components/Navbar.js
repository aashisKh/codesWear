import React from 'react'
import Link from 'next/link'
import { useRef } from 'react'
const Navbar = () => {
  const ref = useRef()
  const toggleCart = () => {
    ref.current.classList.toggle('hideShowCart')
  }
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={'/'} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} className="mr-5 hover:text-white">Home</Link>
          <Link href={'/hoodies'} className="mr-5 hover:text-white">Hoodies</Link>
          <Link href={'/tshirt'} className="mr-5 hover:text-white">Tshirt</Link>
          <Link href={'/mugs'} className="mr-5 hover:text-white">Mugs</Link>
          <Link href={'/order'} className="mr-5 hover:text-white">Order</Link>
          <Link href={'/checkout'} className="mr-5 hover:text-white">Checkout</Link>
          <Link href={'/about'} className="mr-5 hover:text-white">About</Link>
          <Link href={'/contact'} className="mr-5 hover:text-white">Contact</Link>

        </nav>
        <button onClick={toggleCart} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"> <i className="fa-sharp fa-solid fa-cart-plus"></i>
        </button>
        <div className="cartDesign hideShowCart" ref={ref}>
          <i className="fa fa-close" onClick={toggleCart}></i>
          <h1>Your Items </h1>
          <ol className=''>
            <li className='flex flex-row justify-around text-start items-center my-2'>
              <span className='w-3/5'>  Tshirt - Wear the code</span>
              <span> <i className="fa-solid fa-circle-minus"></i> <span> 1 </span> <i className="fa-solid fa-circle-plus"></i> </span>
            </li>
          </ol>
          <div>
          <button className="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Checkout</button>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
