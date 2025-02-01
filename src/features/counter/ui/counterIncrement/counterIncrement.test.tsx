import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CounterProvider } from "@/entities";
import CounterIncrement from "../counterIncrement/counterIncrement";
import { useCounter } from "../../hooks/useCounter";

jest.mock("../../hooks/useCounter", () => ({
  useCounter: jest.fn(),
}));

describe("CounterIncrement", () => {
  it("should render the increment button correctly", () => {
    const mockHandleIncrement = jest.fn();
    (useCounter as jest.Mock).mockReturnValue({
      handleIncrement: mockHandleIncrement,
    });

    render(
      <CounterProvider>
        <CounterIncrement />
      </CounterProvider>
    );

    expect(screen.getByText("+")).toBeInTheDocument();
  });

  it("should call handleIncrement when button is clicked", () => {
    const mockHandleIncrement = jest.fn();
    (useCounter as jest.Mock).mockReturnValue({
      handleIncrement: mockHandleIncrement,
    });

    render(
      <CounterProvider>
        <CounterIncrement />
      </CounterProvider>
    );

    const button = screen.getByText("+");
    fireEvent.click(button);

    expect(mockHandleIncrement).toHaveBeenCalledTimes(1);
  });

  it("should match snapshot", () => {
    const mockHandleIncrement = jest.fn();
    (useCounter as jest.Mock).mockReturnValue({
      handleIncrement: mockHandleIncrement,
    });

    const { asFragment } = render(
      <CounterProvider>
        <CounterIncrement />
      </CounterProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
