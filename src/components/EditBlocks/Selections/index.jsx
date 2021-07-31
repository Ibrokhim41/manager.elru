import { VscChevronLeft, VscAdd } from "react-icons/vsc";
import { BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Selections = () => {
  const route = useHistory();

  const list = [
    "Лучшие книги Джоанна Роулинг",
    "Лучшие книги Сьюзен Коллинз",
    "Лучшие книги Джоанна Роулинг",
    "Лучшие книги Сьюзен Коллинз",
    "Лучшие книги Бизнес",
    "Лучшие книги Книги о Сьюзен Коллинз",
    "Лучшие книги Сьюзен Коллинз детей",
    "Лучшие книги Джоанна",
    "Лучшие книги Роулинг Маркетинг",
    "Лучшие книги Медицина Роулинг",
    "Лучшие книги Сьюзен Менеджмент",
  ];

  return (
    <div className="container mx-auto mb-10 overflow-x-scroll hide-scroll">
      <div className="pt-24"></div>
      <div
        onClick={() => {
          route.push("/edit-blocks");
        }}
        className="flex items-center text-blue ctext-lg  cursor-pointer"
      >
        <VscChevronLeft className="text-2xl" /> Назад
      </div>

      {/* title */}
      <div className="text-grey-dark ctext-lg font-medium mt-6 mb-5 flex flex-col sm:flex-row sm:justify-between">
        Подборки
      </div>
      {/* actoins */}
      <div className="w-full md:w-9/12 grid grid-cols-12">
        <div className="col-span-12 text-grey-dark ctext-lg font-medium flex flex-col sm:flex-row sm:justify-between">
          <button 
            onClick={() => route.push('/add-selection')}
            className="bg-blue text-white ctext-base  py-1.5 px-8 rounded-md flex items-center justify-center">
            Добавить подборку <VscAdd className="text-md ml-1" />
          </button>
          <button className="flex items-center justify-center mt-2 sm:mt-0 bg-red-dark rounded-md text-white ctext-base font-medium py-1 px-4">
            <BsTrash className="mr-1 text-xl" />
            Удалить
          </button>
        </div>
      </div>

      {/*  */}
      <div className="w-full md:w-9/12 grid grid-cols-12  mt-4">
        <div className="col-span-1 border border-grey-border"></div>
        <div className="col-span-11 text-grey-dark ctext-sm  border border-grey-border py-1.5 px-2">
          Название
        </div>
      </div>
      <div className="w-full md:w-9/12 grid grid-cols-12">
        {list.map((item, i) => {
          return (
            <>
              <div className="col-span-1 border border-grey-border flex justify-center items-center">
                <input
                  type="checkbox"
                  className="w-4 sm:w-5 h-4 sm:h-5 cursor-pointer"
                />
              </div>
              <div className="col-span-11 flex justify-between items-center text-grey-dark ctext-sm  border border-grey-border py-1.5 px-2">
                <div
                  className="cursor-pointer hover:text-blue"
                  // onClick={() => route.push("/books-in-category")}
                >
                  {item}
                </div>
                <div
                  onClick={() => route.push("/edit-selection")}
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
  );
};

export default Selections;
