import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CounterProvider } from "@/entities";
import CounterLabel from "../counterLabel/counterLabel";
import { useCounter } from "../../hooks/useCounter";

jest.mock("../../hooks/useCounter", () => ({
  useCounter: jest.fn(),
}));

describe("CounterLabel", () => {
  it("should render the Counter button correctly", () => {
    (useCounter as jest.Mock).mockReturnValue({
      counter: 5,
    });

    render(
      <CounterProvider>
        <CounterLabel />
      </CounterProvider>
    );

    expect(screen.getByText("Counter")).toBeInTheDocument();
  });

  it("should pass the counter value to the Button component", () => {
    const mockCounter = 10;
    (useCounter as jest.Mock).mockReturnValue({
      counter: mockCounter,
    });

    render(
      <CounterProvider>
        <CounterLabel />
      </CounterProvider>
    );
  });

  it("should match snapshot", () => {
    (useCounter as jest.Mock).mockReturnValue({
      counter: 0,
    });

    const { asFragment } = render(
      <CounterProvider>
        <CounterLabel />
      </CounterProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
