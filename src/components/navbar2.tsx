'use client';

import { usePathname } from 'next/navigation'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Navbar2 = () => {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Program', path: '/program' },
    { name: 'Contact Us', path: '/contact' },
  ]

    return (
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">FOREST KIDS</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
            Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
            About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
            Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        {/* <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent> */}
      </Navbar>
    );
  }

  export default Navbar2