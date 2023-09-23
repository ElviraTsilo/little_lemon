import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

import restaurantImage from "../restaurant.png";

const Main = () => {
  const initialFormValues = {
    Name: "",
    Email: "",
    "Phone Number": "",
    Date: "",
    Time: "",
    "Number of Diners": "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormValues(initialFormValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <main>
      <Box
        flex="1"
        backgroundColor="#495E57"
        textAlign="center"
        color="#F4CE14"
        padding="2rem"
        width="100vw"
      >
        <Heading marginTop="5rem" size="xl">
          Welcome to Our Restaurant
        </Heading>
        <Flex justifyContent="center" alignItems="center">
          <Image
            src={restaurantImage}
            alt="Restaurant"
            borderRadius="md"
            marginTop="2rem"
            width="80vw"
            height="600px"
          />
        </Flex>
        <Heading size="lg" marginTop="1rem">
          Discover the finest dining experience.
        </Heading>
      </Box>
      <Flex flex="1" padding="2rem" flexDirection="column" alignItems="center">
        <Heading size="lg">Make a Reservation</Heading>
        <form
          style={{ width: "100%", maxWidth: "400px" }}
          onSubmit={handleSubmit}
        >
          {Object.keys(formValues).map((controlName) => (
            <FormControl key={controlName} isRequired marginTop="1rem">
              <FormLabel>{controlName}</FormLabel>
              <Input
                type={
                  controlName === "Email"
                    ? "email"
                    : controlName === "Phone Number"
                    ? "tel"
                    : controlName === "Date"
                    ? "date"
                    : controlName === "Time"
                    ? "time"
                    : controlName === "Number of Diners"
                    ? "number"
                    : "text"
                }
                name={controlName}
                value={formValues[controlName]}
                placeholder={`Your ${controlName}`}
                onChange={handleInputChange}
              />
            </FormControl>
          ))}
          <Flex justifyContent="space-between" marginTop="1rem">
            <Button
              type="submit"
              backgroundColor="#495E57"
              color="#ffffff"
              size="lg"
              marginTop="1rem"
              _hover={{
                color: "#495E57",
                backgroundColor: "#ffffff",
                borderColor: "#495E57",
              }}
            >
              Submit
            </Button>
            <Button
              type="submit"
              backgroundColor="#495E57"
              color="#ffffff"
              size="lg"
              marginTop="1rem"
              _hover={{
                color: "#495E57",
                backgroundColor: "#ffffff",
                borderColor: "#495E57",
              }}
              onClick={resetForm}
            >
              Cancel
            </Button>
          </Flex>
        </form>
      </Flex>
    </main>
  );
};

export default Main;
