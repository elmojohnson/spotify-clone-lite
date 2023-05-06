import { FC } from "react";
import { Category } from "../../../types";
import { motion } from "framer-motion";

const CategoryItem: FC<Category> = (category) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      className={`relative ${
        category.name === "Party" && "bg-[#e56c95]"
      } flex items-center justify-center hover:cursor-pointer`}
    >
      <img src={category.icons[0].url} />
      <h1 className="font-semibold text-center text-white absolute bottom-3 w-full">
        {category.name}
      </h1>
    </motion.div>
  );
};

export default CategoryItem;
