import { act, render, screen } from "@testing-library/react";
import LoadUser from "../LoadUser";
import { mockFetch } from "projects/shared/lib/@utils/mock-fetch";

describe("Loaduser api testing with component", () => {
  beforeEach(() => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Doe" },
          ]),
      })
    ) as jest.Mock;

    // window.fetch = mockFetch();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should Load the component", () => {
    act(() => render(<LoadUser />));
    const headingElement = screen.getByText(/loading/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("should first", () => {});
});
