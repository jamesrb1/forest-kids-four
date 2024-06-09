// app/layout.tsx
import './globals.css'
import React from "react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";
import Navbar2 from "../components/navbar2"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Forest Kids</title>
        <meta name="description" content="Welcome to Forest Kids" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-black">
        <Navbar2 />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;