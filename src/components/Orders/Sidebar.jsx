import { useState } from "react";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { BsPlus } from "react-icons/bs";
import { BiEraser } from "react-icons/bi";
import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/common";
import { useWindowDimensions } from "../../hooks/ScreenWidth";
// import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const filter = useSelector((state) => state.common.filter);
  const dispatch = useDispatch();

  // const location = useLocation();
  const { width } = useWindowDimensions();

  return (
    <div
      className={`fixed top-0 right-0 transform ${filter && "translate-x-0"} ${
        width > 1199 ? "translate-x-0" : !filter ? "translate-x-full" : ""
      } overflow-y-scroll hide-scroll transition-all pt-20 sm:w-1/2 lg:w-2/6 xl:w-3/12 border-l border-grey-border shadow-sm h-screen bg-white`}
    >
      <IoMdClose
        onClick={() => dispatch(setFilter(false))}
        className="xl:hidden text-2xl cursor-pointer ml-auto mr-4"
      />
      <div className="py-6 px-4">
        {/* add item */}
        <button className="flex items-center justify-center w-full rounded-md py-2.5 mb-4 bg-blue text-white ctext-base font font-medium">
          Добавить товар <BsPlus className="text-xl" />
        </button>
        {/* title */}
        <div className="flex justify-between">
          <div className="text-black ctext-base font-bold mb-4">Фильтры:</div>
        </div>
        {/* fill */}
        <label
          htmlFor="item_name"
          className="text-grey-dark ctext-base font-medium"
        >
          Название товара
        </label>
        <input
          id="item_name"
          type="text"
          placeholder="Введите название..."
          className="text-grey-dark px-4 py-2 mt-1.5 mb-4 w-full rounded-md border border-grey-border focus:outline-none"
        />
        <label
          htmlFor="item_name"
          className="text-grey-dark ctext-base font-medium"
        >
          Автор
        </label>
        <input
          id="item_name"
          type="text"
          placeholder="Введите автора..."
          className="text-grey-dark px-4 py-2 mt-1.5 mb-4 w-full rounded-md border border-grey-border focus:outline-none"
        />
        <label
          htmlFor="item_name"
          className="text-grey-dark ctext-base font-medium"
        >
          Категории
        </label>
        <Select placeholder="Все категории" className="mt-1.5" />

        {/* format */}
        <div className="mt-8 pb-4 border-b border-grey-border">
          <div className="text-grey-dark ctext-base font-medium mb-3">
            Формат
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <input
                id="book_papper"
                type="checkbox"
                className="cursor-pointer"
              />
              <label
                className="ml-2 cursor-pointer text-grey-dark font-bold"
                htmlFor="book_papper"
              >
                Бумажные
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="book_audio"
                type="checkbox"
                className="cursor-pointer"
              />
              <label
                className="ml-2 cursor-pointer text-grey-dark font-bold"
                htmlFor="book_audio"
              >
                Аудио
              </label>
            </div>
            <div className="flex items-center">
              <input id="book_pdf" type="checkbox" className="cursor-pointer" />
              <label
                className="ml-2 cursor-pointer text-grey-dark font-bold"
                htmlFor="book_pdf"
              >
                PDF
              </label>
            </div>
          </div>
        </div>

        {/* types */}
        <div className="my-8 pb-4">
          <div className="text-grey-dark ctext-base font-medium mb-1">Типы</div>
          <div className="flex flex-wrap">
            <div className="flex items-center mr-8 mt-2">
              <input
                id="book_discount"
                type="checkbox"
                className="cursor-pointer"
              />
              <label
                className="ml-2 cursor-pointer text-grey-dark font-bold"
                htmlFor="book_discount"
              >
                Со скидкой
              </label>
            </div>
            <div className="flex items-center mr-8 mt-2">
              <input
                id="book_bestseller"
                type="checkbox"
                className="cursor-pointer"
              />
              <label
                className="ml-2 cursor-pointer text-grey-dark font-bold"
                htmlFor="book_bestseller"
              >
                Бестселлер
              </label>
            </div>
            <div className="flex items-center mr-8 mt-2">
              <input
                id="book_recomended"
                type="checkbox"
                className="cursor-pointer"
              />
              <label
                className="ml-2 cursor-pointer text-grey-dark font-bold"
                htmlFor="book_recomended"
              >
                Рекомендуемое
              </label>
            </div>
            <div className="flex items-center mr-8 mt-2">
              <input id="book_new" type="checkbox" className="cursor-pointer" />
              <label
                className="ml-2 cursor-pointer text-grey-dark font-bold"
                htmlFor="book_new"
              >
                Новинки
              </label>
            </div>
            <div className="flex items-center mr-8 mt-2">
              <input
                id="book_best_price"
                type="checkbox"
                className="cursor-pointer"
              />
              <label
                className="ml-2 cursor-pointer text-grey-dark font-bold"
                htmlFor="book_best_price"
              >
                Лучшие цены
              </label>
            </div>
          </div>
        </div>

        {/* amount */}
        <div>
          <label
            htmlFor="book_amount"
            className="text-grey-dark ctext-base font-medium"
          >
            Кол - во (относится к бумажным)
          </label>
          <input
            id="book_amount"
            type="text"
            placeholder="Введите количество"
            className="text-grey-dark px-4 py-2 mt-1.5 mb-4 w-full rounded-md border border-grey-border focus:outline-none"
          />
        </div>

        {/* footer-button */}
      <div className="mt-4 flex justify-between">
        <button className="flex items-center bg-white rounded-md border border-grey-border text-grey-dark font-medium  py-2 px-2 group hover:bg-blue hover:text-white">
          <BiEraser className="mr-2 text-lg group-hover:text-white" />
          Сбросить</button>
        <button className="flex items-center bg-white rounded-md border border-grey-border text-grey-dark font-medium  py-2 px-2 group hover:bg-blue hover:text-white">Применить фильтры</button>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
