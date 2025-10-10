import {
  Navbar as HeroUINav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  
  Badge,
} from "@heroui/react";
import { FaBookReader } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProfileOptions from "../profile/ProfileOptions";

const NavBar = () => {
  return (
    <HeroUINav>
      <NavbarBrand>
        <Link to="/" className="flex items-center justify-center space-x-2">
          <FaBookReader size={24} />
          <p className="font-light text-inherit">Store</p>
        </Link>
      </NavbarBrand>


      <NavbarContent justify="end">
        <NavbarItem>
          <Link to="/cart">
            <Badge content = "0" color = "danger" shape="circle">
                <FaCartShopping size={24}/>
            </Badge>
          </Link>
        </NavbarItem>
        <NavbarItem>
            <ProfileOptions/>
        </NavbarItem>
      </NavbarContent>

    </HeroUINav>
  );
};

export default NavBar;
