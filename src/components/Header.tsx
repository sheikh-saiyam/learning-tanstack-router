import { Button } from '@/components/ui/button'
import { Home, MenuIcon, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Link } from '@tanstack/react-router'

const Header = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  // const cart = useSelector((state) => state.cart)

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-50 drop-shadow-lg">
      <nav className="mx-auto w-11/12 md:w-[90%] max-w-screen-2xl flex items-center justify-between px-4 py-5">
        {/* logo */}
        <div>
          <Button className={'hover:scale-105'}>
            Tanstack Router with Zustand
          </Button>
        </div>
        <div className="flex gap-12 items-center">
          {/* nav links */}
          <ul className="items-center gap-[20px] text-[1rem] hidden md:flex">
            <Link
              to={'/'}
              className="flex items-center gap-[5px] cursor-pointer hover:text-muted-foreground duration-500 transition-all"
            >
              <Home size={18} />
              Home
            </Link>
            <Link
              to={'/products'}
              className="flex items-center gap-[5px] cursor-pointer hover:text-muted-foreground duration-500 transition-all"
            >
              <ShoppingBag size={18} />
              Products
            </Link>
            <Link
              to={'/cart'}
              className="flex items-center gap-[5px] cursor-pointer duration-500 transition-all relative"
            >
              <div className="absolute">
                <ShoppingCart
                  size={28}
                  className="group-hover:text-muted-foreground"
                />
              </div>
              <div className="absolute -bottom-0.5 left-4">
                <Badge className={'text-xs px-1.5 rounded-full py-[1px]'}>
                  {/* {cart?.length || 0} */} 0
                </Badge>
              </div>
            </Link>
          </ul>

          {/* user account */}
          <div className="flex items-center gap-[10px]">
            <li className="flex md:hidden items-center gap-[5px] mr-10 cursor-pointer duration-500 transition-all relative">
              <div className="absolute">
                <ShoppingCart
                  size={28}
                  className="group-hover:text-muted-foreground"
                />
              </div>
              <div className="absolute -bottom-0.5 left-4">
                <Badge className={'text-xs px-1.5 rounded-full py-[1px]'}>
                  {7}
                </Badge>
              </div>
            </li>
            <div className="flex items-center gap-[10px] cursor-pointer relative">
              <div className="relative">
                <img
                  src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
                  alt="avatar"
                  className="w-[35px] h-[35px] rounded-full object-cover"
                />
                <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
              </div>
            </div>

            <MenuIcon
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="text-[1.8rem] text-[#424242]c cursor-pointer md:hidden flex"
            />
          </div>

          {/* mobile sidebar */}
          <aside
            className={` ${
              mobileSidebarOpen
                ? 'translate-x-0 opacity-100 z-20'
                : 'translate-x-[200px] opacity-0 z-[-1] hidden'
            } md:hidden bg-white p-4 text-center absolute top-[55px] right-0 w-[300px]  rounded-md transition-all duration-300 border`}
          >
            <ul className="items-start gap-4 text-[1rem] text-gray-600 flex flex-col">
              <li className="hover:bg-gray-100 w-full p-2 text-left rounded transition-all duration-500 cursor-pointer capitalize">
                Home
              </li>
              <li className="hover:bg-gray-100 w-full p-2 text-left rounded transition-all duration-500 cursor-pointer capitalize">
                Products
              </li>
            </ul>
          </aside>
        </div>
      </nav>
    </div>
  )
}

export default Header
