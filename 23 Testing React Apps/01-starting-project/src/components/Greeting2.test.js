import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting2 from "./Greeting2";

describe("Greeting2", () => {
  // const setChangedText = jest.fn();
  test("render How are you as text", () => {
    render(<Greeting2 />);

    const howAreYouElement = screen.getByText("How are you?");
    expect(howAreYouElement).toBeInTheDocument();
  });

  test("render good to see you if button was NOT clicked", () => {
    render(<Greeting2 />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button is clicked', () => {
    // Arrange
    render(<Greeting2 />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // expect(setChangedText).toBeCalledWith(true);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clciked', () => {
    render(<Greeting2 />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("It's good to see you!");
    expect(outputElement).toBeNull();
  });
});
