import { fireEvent, render, screen } from "@testing-library/react";
import Main from "./components/Main";


describe("Main", () => {

  test("Name input behaves correctly", () => {
  render(<Main />);
 const nameInput = screen.getByPlaceholderText("Your Name");

 expect(nameInput).toBeInTheDocument();
 fireEvent.change(nameInput, { target: { value: "John" } });

 expect(nameInput.value).toBe("John");
 fireEvent.change(nameInput, { target: { value: "A" } });

 expect(nameInput.value).toBe("A");
 fireEvent.change(nameInput, { target: { value: "JaneDoe" } });

 expect(nameInput.value).toBe("JaneDoe");
});


  test("Email input accepts a valid email address", () => {
    render(<Main />);

    const emailInput = screen.getByPlaceholderText("Your Email");

    expect(emailInput).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });

    expect(emailInput.value).toBe("johndoe@example.com");

    const submitButton = screen.getByText("Submit");
    expect(submitButton).not.toBeDisabled();
  });


  test("Phone Number input behaves correctly", () => {
    render(<Main />);
    const phoneNumberInput = screen.getByPlaceholderText("Your Phone Number");

    expect(phoneNumberInput).toBeInTheDocument();
    fireEvent.change(phoneNumberInput, { target: { value: "123-456-7890" } });

    expect(phoneNumberInput.value).toBe("123-456-7890");
    fireEvent.change(phoneNumberInput, { target: { value: "invalid" } });

    expect(phoneNumberInput.value).toBe("invalid");
    fireEvent.change(phoneNumberInput, { target: { value: "555-555-5555" } });

    expect(phoneNumberInput.value).toBe("555-555-5555");
  });


  test("Date and Time inputs have been chosen", () => {
    render(<Main />);
    const dateInput = screen.getByPlaceholderText("Your Date");
    const timeInput = screen.getByPlaceholderText("Your Time");

    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();

    fireEvent.change(dateInput, { target: { value: "2023-09-30" } });
    fireEvent.change(timeInput, { target: { value: "15:30" } });

    expect(dateInput.value).toBe("2023-09-30");
    expect(timeInput.value).toBe("15:30");
  });

  test("Number of Diners input has been chosen", () => {
    render(<Main />);

    const numberOfDinersInput = screen.getByPlaceholderText(
      "Your Number of Diners"
    );

    expect(numberOfDinersInput).toBeInTheDocument();
    fireEvent.change(numberOfDinersInput, { target: { value: "4" } });

    expect(numberOfDinersInput.value).toBe("4");
  });

});

