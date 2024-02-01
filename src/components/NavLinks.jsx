import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import PurpleBtn from "./PurpleBtn"
import { useCartContext } from "../context/cartContext";

const NavLinks = ({className}) => {

  return (
    <div className="   ">
       <ul className={`${className}  w-fit  flex items-center justify-center gap-8 text-lg  font-semibold text-fuchsia-950    py-6 `}>
        <li className=" hover:text-gray-500  ">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className=" hover:text-gray-500 ">
        <NavLink to="/about">About</NavLink>
        </li>
        
        <li className=" hover:text-gray-500 ">
          <NavLink to="/product">Products</NavLink>
        </li>
        <li className=" hover:text-gray-500 ">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {/* <li className=" hover:text-gray-500 ">
          <NavLink to="/signin" className=" rounded-md text-white">
            <PurpleBtn children={"Sign In"} className={'text-sm'} />
          </NavLink>
        </li>

        <li className=" hover:text-gray-500 ">
          <NavLink to="/signin" className=" rounded-md text-white">
            <PurpleBtn children={"Sign Up"} className={'lg:hidden block  text-sm'} bg={' bg-orange-600 hover:bg-orange-500'} />
          </NavLink>
        </li> */}
        {/* <li className=" relative">
          <NavLink to="/cart" className=" text-2xl">
            <FiShoppingCart className=" z-50" />
            <span className=" text-xs absolute bg-purple-800 w-5 h-6 rounded-lg -right-3 -top-3 items-center flex justify-center text-white">{cartProducts.length}</span>
          </NavLink>
        </li> */}

        
      </ul>
    </div>
  )
}

export default NavLinks
