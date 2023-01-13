import { render } from "@testing-library/react";
import Layout from "../components/Layout";

describe("Layout", () => {
  it("should render Layout page and link in it", () => {
    const { debug, getByRole, getByText } = render(<Layout />);
    debug();
    const link = getByRole("link", {
      name: /just add marmite spread the joy/i,
    });
    const footer = getByText(/copyright 2023 just add marmite :\)/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
    expect(footer).toBeInTheDocument();
  });
});
