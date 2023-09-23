import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBars,
  faUtensils,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import logo from "../logo.png";

const menuItems = [
  { icon: faHouse, text: "Home" },
  { icon: faBars, text: "Menu" },
  { icon: faUtensils, text: "Reservation" },
  { icon: faCartShopping, text: "Order online" },
  { icon: faUser, text: "Account" },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${visible ? 0 : "-100%"})`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#EDEFEE"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "200px", height: "auto" }}
          />
          <nav>
            <HStack spacing={8}>
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="/"
                  tsrget="_blank"
                  rel="noopener noreferrer"
                  style={{ textAlign: "center", textDecoration: "none" }}
                >
                  <FontAwesomeIcon icon={item.icon} size="2x" color="#F4CE14" />
                  <p
                    style={{
                      lineHeight: "1.5",
                      color: "#F4CE14",
                      marginTop: "6px",
                    }}
                  >
                    {item.text}
                  </p>
                </a>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
