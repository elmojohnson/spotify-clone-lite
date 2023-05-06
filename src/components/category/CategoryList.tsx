import useCategories from "../../hooks/useCategories";
import LoadingState from "../utils/LoadingState";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const { categories, isLoading, handleLoadMore, nextUrl } = useCategories();

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div>
      <h1 className="font-bold text-xl mb-6 text-white">Browse Categories</h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {categories.map((category, i) => {
          return <CategoryItem key={i} {...category} />;
        })}
      </div>
      {nextUrl && <button className="btn w-full mt-6 bg-secondary shadow-xl text-white" onClick={handleLoadMore}>Load more</button>}
    </div>
  );
};

export default CategoryList;
