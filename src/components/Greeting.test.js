import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting componet", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("Button not clicked!", () => {
    // Arrange
    render(<Greeting />);
    //Act
    // ..nothing
    // Assert
    const notChangedText = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(notChangedText).toBeInTheDocument();
  });
  test("Button Clicked!", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedText = screen.getByText("Changed!");

    expect(changedText).toBeInTheDocument();
  });

  test("Button Clicked Hide Element", () => {
    // Arrange
    render(<Greeting />);

    // Action
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const hideText = screen.queryByText("It's good to see you", {
      exact: false,
    });

    expect(hideText).not.toBeInTheDocument();
  });
});
