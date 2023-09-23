import React from "react";
import { Box, Flex, Image, Text, Spacer } from "@chakra-ui/react";
import footerLogo from "../footer.png";

const Footer = () => {
  return (
    <Box
      backgroundColor="#EDEFEE"
      color="white"
      padding="2rem"
      textAlign="center"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Image
          src={footerLogo}
          alt="Footer Logo"
          maxW="100px"
          marginLeft="10rem"
        />
        <Spacer />
        <Text fontSize="lg" marginRight="10rem" color="#495E57">
          &copy; 2023 Little Lemon Restaurant. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
