import { VscChevronLeft, VscAdd } from "react-icons/vsc";
import { BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const News = () => {
  const route = useHistory();

  const list = [
    {
      text: "Джоанна Роулинг Что читать на карантине если очень очень скучно?",
      date: "21.03.2021",
    },
    {
      text: "Сьюзен Коллинз Что читать на карантине если очень очень скучно?",
      date: "21.03.2021",
    },
    {
      text: "Джоанна Роулинг Что читать на карантине если очень очень скучно?",
      date: "21.03.2021",
    },
    {
      text: "Джоанна Что читать на карантине если очень очень скучно?",
      date: "21.03.2021",
    },
    {
      text: "Роулинг Маркетинг Что читать на карантине если очень очень скучно?",
      date: "21.03.2021",
    },
    {
      text: "Медицина Роулинг Что читать на карантине если очень очень скучно?",
      date: "21.03.2021",
    },
    {
      text: "Сьюзен Менеджмент Что читать на карантине если очень очень скучно?",
      date: "21.03.2021",
    },
  ];

  return (
    <div className="container mx-auto mb-10 overflow-x-scroll hide-scroll">
      <div className="pt-24"></div>
      <div
        onClick={() => {
          route.push("/edit-blocks");
        }}
        className="inline-flex items-center text-blue ctext-lg  cursor-pointer"
      >
        <VscChevronLeft className="text-2xl" /> Назад
      </div>

      {/* title */}
      <div className="text-grey-dark ctext-lg font-medium mt-6 mb-5 flex flex-col sm:flex-row sm:justify-between">
        Новости
      </div>
      {/* actoins */}
      <div className="w-full md:w-9/12 grid grid-cols-12">
        <div className="col-span-12 text-grey-dark ctext-lg font-medium flex flex-col sm:flex-row sm:justify-between">
          <button
            onClick={() => route.push("/add-news")}
            className="bg-blue text-white ctext-base  py-1.5 px-8 rounded-md flex items-center justify-center"
          >
            Добавить статью <VscAdd className="text-md ml-1" />
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
        <div className="col-span-7 text-grey-dark ctext-sm  border border-grey-border py-1.5 px-2">
          Название
        </div>
        <div className="col-span-4 text-grey-dark ctext-sm  border border-grey-border py-1.5 px-2">
        Дата публикации
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
              <div className="col-span-7 flex justify-between items-center text-grey-dark ctext-sm  border border-grey-border py-1.5 px-2">
                <div
                  className="cursor-pointer hover:text-blue"
                  // onClick={() => route.push("/books-in-category")}
                >
                  {item.text}
                </div>
              </div>
              <div className="col-span-3 flex justify-between items-center text-grey-dark ctext-sm  border border-grey-border py-1.5 px-2">
                <div
                  className=""
                  // onClick={() => route.push("/books-in-category")}
                >
                  {item.date}
                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center border border-grey-border">
                <div
                  onClick={() => route.push("/edit-news")}
                  className="sm:p-1.5 sm:bg-blue rounded-md cursor-pointer text-blue sm:text-white text-lg"
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

export default News;