import { render } from "@testing-library/react";
import Skeleton from "../components/Skeleton";

describe("Skeleton", () => {
  it("should render Skeleton page", () => {
    const { debug, getByTitle } = render(<Skeleton />);
    debug();
    const skel = getByTitle("skel");
    expect(skel).toBeInTheDocument();
    expect(skel).toHaveClass("skeleton");
  });
});
