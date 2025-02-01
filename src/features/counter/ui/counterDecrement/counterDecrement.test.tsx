import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CounterProvider } from "@/entities";
import CounterDecrement from "../counterDecrement/counterDecrement";
import { useCounter } from "../../hooks/useCounter";

jest.mock("../../hooks/useCounter", () => ({
  useCounter: jest.fn(),
}));

describe("CounterDecrement", () => {
  it("should render the decrement button correctly", () => {
    const mockHandleDecrement = jest.fn();
    (useCounter as jest.Mock).mockReturnValue({
      handleDecrement: mockHandleDecrement,
    });

    render(
      <CounterProvider>
        <CounterDecrement />
      </CounterProvider>
    );

    expect(screen.getByText("-")).toBeInTheDocument();
  });

  it("should call handleDecrement when button is clicked", () => {
    const mockHandleDecrement = jest.fn();
    (useCounter as jest.Mock).mockReturnValue({
      handleDecrement: mockHandleDecrement,
    });

    render(
      <CounterProvider>
        <CounterDecrement />
      </CounterProvider>
    );

    const button = screen.getByText("-");
    fireEvent.click(button);

    expect(mockHandleDecrement).toHaveBeenCalledTimes(1);
  });

  it("should match snapshot", () => {
    const mockHandleDecrement = jest.fn();
    (useCounter as jest.Mock).mockReturnValue({
      handleDecrement: mockHandleDecrement,
    });

    const { asFragment } = render(
      <CounterProvider>
        <CounterDecrement />
      </CounterProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
