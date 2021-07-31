import { VscChevronLeft } from "react-icons/vsc";
import { BsTrash } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const EditAuthor = () => {
  const route = useHistory();

  return (
    <div className="container mx-auto mb-10 overflow-x-scroll hide-scroll">
      <div className="pt-24"></div>
      <div
        onClick={() => {
          route.push("/authors");
        }}
        className="flex items-center text-blue ctext-lg  cursor-pointer"
      >
        <VscChevronLeft className="text-2xl" /> Назад
      </div>

      {/* title */}
      <div className="text-grey-dark ctext-lg font-medium mt-6 flex flex-col sm:flex-row sm:justify-between">
      Редактирование автора
        <button className="flex justify-center items-center mt-2 sm:mt-0 sm:mx-4 bg-red-dark rounded-md text-white ctext-base font-medium py-1 px-4">
          <BsTrash className="mr-1 text-xl" />
          Удалить
        </button>
      </div>
      {/*  */}
      <div className="flex flex-col md:justify-start mt-4">
        <label
          htmlFor="category_name"
          className="text-grey-dark ctext-base "
        >
          Имя и фамилия автора
        </label>
        <input
          id="category_name"
          type="text"
          placeholder="Введите название..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>
      {/*  */}
        <button className="text-white ctext-xs w-full md:w-9/12 bg-blue border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-4">Сохранить изменения</button>

    </div>
  );
};

export default EditAuthor;
