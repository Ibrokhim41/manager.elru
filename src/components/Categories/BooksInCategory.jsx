import { VscChevronLeft } from "react-icons/vsc";
import { BsTrash } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import BookInCategory from "components/CBookInCategory";
import CategorySidebar from "./CategorySidebar";
import { useState } from "react";

const BooksInCategory = () => {
  const route = useHistory();
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="container mx-auto mb-10 overflow-x-scroll hide-scroll">
      <div className="pt-24"></div>
      <div
        onClick={() => {
          route.push("/categories");
        }}
        className="inline-flex items-center text-blue ctext-lg  cursor-pointer"
      >
        <VscChevronLeft className="text-2xl" /> Назад
      </div>

      {/* title */}
      <div className="text-grey-dark ctext-lg font-medium mt-6">
        Книги в категории
      </div>

      {/* actions */}
      <div className="w-full flex flex-col sm:flex-row justify-end xl:w-9/12">
        <button className="flex justify-center items-center mt-2 sm:mt-0 sm:mx-4 bg-red-dark rounded-md text-white ctext-base font-medium py-1 px-4">
          Удалить из категории
          <BsTrash className="ml-1 text-xl" />
        </button>
        <button
          onClick={() => setShowFilter(true)}
          className="flex justify-center items-center xl:hidden mt-2 sm:mt-0 sm:ml-4 cursor-pointer bg-blue rounded-md text-white ctext-base font-medium py-1 px-4"
        >
          <BiFilterAlt className="mr-1 text-lg" />
          Фильтр
        </button>
      </div>

      {/* table */}
      <div className="orders-table w-full xl:w-9/12 mt-4 pr-4 md:pr-0">
        <BookInCategory />
      </div>

      <CategorySidebar showFilter={showFilter} setShowFilter={setShowFilter} />
    </div>
  );
};

export default BooksInCategory;
