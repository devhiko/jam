import { render } from "@testing-library/react";
import NotFound from "../pages/404";

describe("NotFound", () => {
  it("should render NotFound page and link in it", () => {
    const { debug, getByRole, getByText } = render(<NotFound />);
    debug();
  });
});
