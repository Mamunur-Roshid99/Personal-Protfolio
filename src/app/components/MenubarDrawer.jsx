"use client";

import * as React from "react";
import { Box, Drawer } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

export default function MenubarDrawer() {
  const [open, setOpen] = React.useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/service", label: "Service" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/client", label: "Client" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
        height: "100%",
        position: "relative",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <div className="flex items-start justify-between">
        <ul className="flex flex-col space-y-5 p-6 pt-10">
          <li>
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#skill"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#work"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              My work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Contact Me
            </a>
          </li>
        </ul>

        {/* Close button */}
        <button onClick={() => setOpen(false)} className="pt-10 p-6">
          <RxCross2 />
        </button>
      </div>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)}>
        <GiHamburgerMenu />
      </button>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(255, 255, 255, 0.923)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            color: "black",
          },
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
}