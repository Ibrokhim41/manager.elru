import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { useHistory } from "react-router-dom";

const AddCategory = () => {
  const route = useHistory();

  return (
    <div className="container mx-auto mb-10">
      <div className="pt-24"></div>
      <div
        onClick={() => {
          route.push("/categories");
        }}
        className="inline-flex items-center text-blue ctext-lg  cursor-pointer"
      >
        <VscChevronLeft className="text-2xl" /> Назад
      </div>
      <div className="text-grey-dark ctext-lg  my-4">
        Добавление категории
      </div>
      <div className="flex flex-col md:justify-start mt-2 md:mt-0">
        <label
          htmlFor="category_name"
          className="text-grey-dark ctext-base "
        >
          Название категории
        </label>
        <input
          id="category_name"
          type="text"
          placeholder="Введите название..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>
      {/*  */}
      <div className="text-black ctext-base font-bold mt-6 mb-4">
        Книги в категории:
      </div>

      {/*  */}
      <div 
        onClick={() => route.push('/add-books-from-cat')}
        className="flex items-center text-blue ctext-base  cursor-pointer">
        Добавить из списка <VscChevronRight className="text-2xl" />
      </div>
      {/*  */}
      <button className="bg-blue text-white py-1.5 md:py-2.5 rounded-md text-center w-full md:w-9/12 mt-8">Добавить</button>
    </div>
  );
};

export default AddCategory;
