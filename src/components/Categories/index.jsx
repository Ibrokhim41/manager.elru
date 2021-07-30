import { VscAdd } from "react-icons/vsc";
import { BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Categories = () => {

  const route = useHistory()

  const list = [
    "Ужасы",
    "Ораторское искусство",
    "Детективы",
    "Фантастика",
    "Бизнес",
    "Книги о бирже",
    "Для детей",
    "Психология",
    "Маркетинг",
    "Медицина",
    "Менеджмент",
  ];

  return (
    <div className="container mx-auto mb-10">
      <div className="pt-24"></div>
      <div className="flex flex-col md:flex-row">
        <button 
          onClick={() => route.push('/add-category')}
          className="bg-blue text-white ctext-base  py-1.5 px-8 rounded-md flex items-center justify-center">
          Добавить категорию <VscAdd className="text-md ml-1" />
        </button>
        <div className="flex items-center justify-between md:justify-start ml-4 mt-2 md:mt-0">
          <label
            htmlFor="category_name"
            className="text-grey-dark ctext-base "
          >
            Поиск категории
          </label>
          <input
            id="category_name"
            type="text"
            placeholder="Введите название..."
            className="text-grey-dark ctext-xs w-2/3 md:w-80 bg-white border border-grey-border rounded-md focus:outline-none py-1.5 px-2 ml-2"
          />
        </div>
      </div>
      {/*  */}
      <div className="w-full md:w-9/12 flex justify-end my-4">
        <button className="flex items-center bg-red-dark rounded-md text-white ctext-base  py-1 px-4">
          <BsTrash className="mr-1" />
          Удалить
        </button>
      </div>

      {/* table */}
      <div>
        <div className="w-full md:w-9/12 grid grid-cols-12">
          <div className="col-span-1 border border-grey-border"></div>
          <div className="col-span-11 text-grey-dark ctext-sm  border border-grey-border py-1.5 px-2">
            Название
          </div>
        </div>
        {/*  */}
        <div className="w-full md:w-9/12 grid grid-cols-12">
          {list.map((item,i) => {
            return (
              <>
                <div className="col-span-1 border border-grey-border flex justify-center items-center">
                  <input type="checkbox" className="w-4 sm:w-5 h-4 sm:h-5 cursor-pointer" />
                </div>
                <div 
                  onClick={() => route.push('/books-in-category')}
                  className="cursor-pointer hover:text-blue col-span-11 flex justify-between items-center text-grey-dark ctext-sm  border border-grey-border py-1.5 px-2">
                  {item}
                  <div
                      onClick={() => route.push("/edit-category")}
                    className="p-1.5 bg-blue rounded-md cursor-pointer text-white text-lg"
                  >
                    <BiPencil />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
