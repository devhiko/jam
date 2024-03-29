import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";
import Skeleton from "../components/Skeleton";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: res.items,
      revalidate: 1,
    },
  };
};

export default function Recipes({ recipes }) {
  if (!recipes) return <Skeleton />;

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.sys.id} recipe={recipe} />;
      })}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  );
}
