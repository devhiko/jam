import { render } from "@testing-library/react";
import Image from "next/image";
import Link from "next/link";

describe("RecipeCard", () => {
  const MockRecipeCard = () => {
    return (
      <div title="recipecard" className="card">
        <div className="featured">
          <Image src={`http://localhost:3000/recipes/hamburger`} width={300} height={300} />
        </div>

        <div className="content">
          <div className="info">
            <h4>Some Title</h4>
            <p>Takes approx 30 mins to make</p>
          </div>
          <div className="actions">
            <Link href={`/recipes/hamburger`}>
              <a>Cook this</a>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  it("should render RecipeCard page and item", () => {
    const { debug, getByRole, getByTitle } = render(<MockRecipeCard />);
    debug();
    const recipecard = getByTitle(/recipecard/i);
    const img = getByRole("img");
    const link = getByRole("link", {
      name: /cook this/i,
    });
    expect(recipecard).toBeInTheDocument();
    expect(recipecard).toMatchSnapshot();
    expect(img).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/recipes/hamburger");
  });
});
