import {
  VscChevronLeft,
  VscAdd,
  VscClose,
  VscChevronRight,
} from "react-icons/vsc";
import { MdBlock } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { HiDocumentDownload } from "react-icons/hi";
import { IoMdImages } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef, useState } from "react";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const EditBook = () => {
  const route = useHistory();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [publicDate, setPublicDate] = useState(new Date());
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="flex items-center border rounded-md bg-white border-grey-border text-grey-dark ml-2 py-1 px-2 mt-1"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  return (
    <div className="container mx-auto">
      <DeleteModal
        confirmDelete={confirmDelete}
        setConfirmDelete={setConfirmDelete}
      />
      <div className="pt-24"></div>
      <div
        onClick={() => {
          route.push("/orders");
        }}
        className="inline-flexflex items-center text-blue ctext-lg  cursor-pointer"
      >
        <VscChevronLeft className="text-2xl" /> Назад
      </div>

      <div className="flex justify-between items-center my-6">
        <div className="text-grey-dark ctext-lg ">
          Добавление товара
        </div>
        <div className="flex">
          <button className="flex items-center mr-1 md:mr-4 bg-brown-dark rounded-md text-white ctext-base  py-1 px-1 md:px-4">
            <MdBlock className="mr-1" />
            Отключить
          </button>
          <button 
            onClick={() => setConfirmDelete(true)}
            className="flex items-center bg-red-dark rounded-md text-white ctext-base  py-1 px-1 md:px-4">
            <BsTrash className="mr-1" />
            Удалить
          </button>
        </div>
      </div>

      {/* fill */}
      <div className="flex flex-col">
        <label
          htmlFor="item_name"
          className="text-grey-dark ctext-base "
        >
          Название товара
        </label>
        <input
          id="item_name"
          type="text"
          placeholder="Введите название..."
          className="text-grey-dark ctext-xs px-4 py-2 mt-1.5 mb-4 w-full lg:w-1/2 rounded-md border border-grey-border focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="item_description"
          className="text-grey-dark ctext-base "
        >
          Описание
        </label>
        <textarea
          id="item_description"
          type="text"
          placeholder="Ваш текст..."
          rows="4"
          className="text-grey-dark ctext-xs px-4 py-2 mt-1.5 mb-4 w-full lg:w-1/2 rounded-md border border-grey-border focus:outline-none"
        />
      </div>

      {/* year-date-pages */}
      <div className="flex flex-wrap flex-col sm:flex-row">
        <div className="flex items-center  mt-2 sm:mt-0">
          <label
            htmlFor="item_year"
            className="text-grey-dark ctext-base "
          >
            Год:
          </label>
          <input
            id="item_year"
            type="text"
            placeholder="Введите Год..."
            className="text-grey-dark ctext-xs px-4 py-1.5 sm:py-2 ml-2 w-2/3 rounded-md border border-grey-border focus:outline-none"
          />
        </div>
        <div className="flex items-center  mt-2 sm:mt-0">
          <label
            htmlFor="item_year"
            className="text-grey-dark ctext-base "
          >
            Дата публикации:
          </label>
          <DatePicker
            id="item_year"
            selected={publicDate}
            onChange={(date) => setPublicDate(date)}
            customInput={<CustomInput />}
          />
        </div>
        <div className="flex items-center  mt-2 sm:mt-0">
          <label
            htmlFor="item_page_number"
            className="text-grey-dark ctext-base  sm:text-right"
          >
            Кол-во страниц:
          </label>
          <input
            id="item_page_number"
            type="text"
            placeholder="Введите Кол-во страниц..."
            className="text-grey-dark ctext-xs px-4 py-1.5 sm:py-2 ml-2 w-2/3 rounded-md border border-grey-border focus:outline-none"
          />
        </div>
      </div>

      {/* LDAC */}
      <div className="my-6">
        <div className="flex sm:items-center justify-between flex-col sm:flex-row md:w-2/3 mt-4">
          <div className="text-grey-dark ctext-base  w-1/5">
            Язык:
          </div>
          <div className="w-full sm:w-4/5 flex items-center justify-between">
            <Select
              className="w-4/5 cursor-pointer sm:mx-4 ctext-xs"
              placeholder="Выберите язык"
            />
            <div className="w-1/5 ml-4 text-blue ctext-base  flex items-center cursor-pointer">
              Добавить
              <VscAdd className="hidden sm:block text-lg ml-1" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex sm:items-center justify-between flex-col sm:flex-row md:w-2/3 mt-4">
          <div className="text-grey-dark ctext-base  w-1/5">
            Издательство:
          </div>
          <div className="w-full sm:w-4/5 flex items-center justify-between">
            <Select
              className="w-4/5 cursor-pointer sm:mx-4 ctext-xs"
              placeholder="Выберите издательство"
            />
            <div className="w-1/5 ml-4 text-blue ctext-base  flex items-center cursor-pointer">
              Добавить
              <VscAdd className="hidden sm:block text-lg ml-1" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex sm:items-center justify-between flex-col sm:flex-row md:w-2/3 mt-4">
          <div className="text-grey-dark ctext-base  w-1/5">
            Автор:
          </div>
          <div className="w-full sm:w-4/5 flex items-center justify-between">
            <Select
              className="w-4/5 cursor-pointer sm:mx-4 ctext-xs"
              placeholder="Выберите автора"
            />
            <div className="w-1/5 ml-4 text-blue ctext-base  flex items-center cursor-pointer">
              Добавить
              <VscAdd className="hidden sm:block text-lg ml-1" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex sm:items-center justify-between flex-col sm:flex-row md:w-2/3 mt-4">
          <div className="text-grey-dark ctext-base  w-1/5">
            Категории:
          </div>
          <div className="w-full sm:w-4/5 flex items-center justify-between">
            <Select
              className="w-4/5 cursor-pointer sm:mx-4 ctext-xs"
              placeholder="Выберите категории"
            />
            <div className="w-1/5 ml-4 text-blue ctext-base  flex items-center cursor-pointer">
              Добавить
              <VscAdd className="hidden sm:block text-lg ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* book type */}
      <div className="flex flex-wrap">
        <div className="flex items-center mr-8 mt-2">
          <input
            id="book_discount"
            type="checkbox"
            className="cursor-pointer w-5 h-5 mr-1"
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
            className="cursor-pointer w-5 h-5 mr-1"
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
            className="cursor-pointer w-5 h-5 mr-1"
          />
          <label
            className="ml-2 cursor-pointer text-grey-dark font-bold"
            htmlFor="book_recomended"
          >
            Рекомендуемое
          </label>
        </div>
        <div className="flex items-center mr-8 mt-2">
          <input
            id="book_new"
            type="checkbox"
            className="cursor-pointer w-5 h-5 mr-1"
          />
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
            className="cursor-pointer w-5 h-5 mr-1"
          />
          <label
            className="ml-2 cursor-pointer text-grey-dark font-bold"
            htmlFor="book_best_price"
          >
            Лучшие цены
          </label>
        </div>
      </div>

      {/* fotmat */}
      <div className="my-6">
        <div className="text-black ctext-lg font-bold">
          Форматы и стоимость:
        </div>
        {/* Бумажная */}
        <div className="flex flex-wrap flex-col xl:flex-row justify-between border-b border-grey-border py-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="book_papper"
              className="w-5 h-5 mr-2 cursor-pointer"
            />
            <label
              htmlFor="book_papper"
              className="text-grey-dark ctext-base font-bold cursor-pointer"
            >
              Бумажная
            </label>
          </div>
          <div className="flex items-center mt-4 xl:mt-0 xl:mx-2">
            <input
              type="checkbox"
              id="book_is_discount"
              className="w-5 h-5 mr-2 cursor-pointer"
            />
            <label
              htmlFor="book_is_discount"
              className="text-grey-dark ctext-base font-bold cursor-pointer"
            >
              Скидка
            </label>
          </div>
          <div className="flex items-center mt-4 xl:mt-0 xl:mx-2">
            <label
              htmlFor="book_without_discout"
              className="text-grey-dark ctext-base  cursor-pointer"
            >
              Цена без скидки (сум):
            </label>
            <input
              type="text"
              id="book_without_discout"
              placeholder="Введите Цена"
              className="text-grey-dark px-4 py-1.5 sm:py-2 ml-2 w-2/3 rounded-md border ctext-xs border-grey-border focus:outline-none"
            />
          </div>
          <div className="flex items-center mt-4 xl:mt-0 xl:mx-2">
            <label
              htmlFor="book_with_discout"
              className="text-grey-dark ctext-base  cursor-pointer"
            >
              Цена со скидкой (сум):
            </label>
            <input
              type="text"
              id="book_with_discout"
              placeholder="Введите Цена"
              className="text-grey-dark px-4 py-1.5 sm:py-2 ml-2 w-2/3 rounded-md border ctext-xs border-grey-border focus:outline-none"
            />
          </div>
          <div className="flex items-center mt-4 xl:mt-0 xl:mx-2">
            <label
              htmlFor="book_pages"
              className="text-grey-dark ctext-base  cursor-pointer"
            >
              Кол - во:
            </label>
            <input
              type="text"
              id="book_pages"
              placeholder="Введите Кол - во"
              className="text-grey-dark px-4 py-1.5 sm:py-2 ml-2 w-2/3 rounded-md border ctext-xs border-grey-border focus:outline-none"
            />
          </div>
        </div>
        {/* Аудио */}
        <div className="flex flex-wrap flex-col xl:flex-row justify-between border-b border-grey-border py-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="book_papper2"
              className="w-5 h-5 mr-2 cursor-pointer"
            />
            <label
              htmlFor="book_papper2"
              className="text-grey-dark ctext-base font-bold cursor-pointer"
            >
              Аудио
            </label>
          </div>
          <div className="flex items-center mt-4 xl:mt-0 xl:mx-2">
            <input
              type="checkbox"
              id="book_is_discount2"
              className="w-5 h-5 mr-2 cursor-pointer"
            />
            <label
              htmlFor="book_is_discount2"
              className="text-grey-dark ctext-base font-bold cursor-pointer"
            >
              Скидка
            </label>
          </div>
          <div className="flex items-center mt-4 xl:mt-0 xl:mx-2">
            <label
              htmlFor="book_without_discout2"
              className="text-grey-dark ctext-base  cursor-pointer"
            >
              Цена без скидки (сум):
            </label>
            <input
              type="text"
              id="book_without_discout2"
              placeholder="Введите Цена"
              className="text-grey-dark px-4 py-1.5 sm:py-2 ml-2 w-2/3 rounded-md ctext-xs border border-grey-border focus:outline-none"
            />
          </div>
          <div className="flex items-center mt-4 xl:mt-0 xl:mx-2">
            <label
              htmlFor="book_with_discout2"
              className="text-grey-dark ctext-base  cursor-pointer"
            >
              Цена со скидкой (сум):
            </label>
            <input
              type="text"
              id="book_with_discout2"
              placeholder="Введите Цена"
              className="text-grey-dark px-4 py-1.5 sm:py-2 ml-2 w-2/3 rounded-md ctext-xs border border-grey-border focus:outline-none"
            />
          </div>
          <div className="flex mt-4 xl:mt-0 xl:mx-2">
            <label
              htmlFor="book_file"
              className="text-blue ctext-base flex items-center cursor-pointer"
            >
              Загрузить файл <HiDocumentDownload className="text-2xl ml-1" />
            </label>
            <input type="file" id="book_file" className="hidden" />
          </div>
        </div>
        {/* PDF */}
        <div className="flex flex-wrap flex-col xl:flex-row justify-between border-b border-grey-border py-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="book_papper3"
              className="w-5 h-5 mr-2 cursor-pointer"
            />
            <label
              htmlFor="book_papper3"
              className="text-grey-dark ctext-base font-bold cursor-pointer"
            >
              PDF
            </label>
          </div>
          <div className="flex items-center mt-4 xl:mt-0 xl:mx-2">
            <input
              type="checkbox"
              id="book_is_discount3"
              className="w-5 h-5 mr-2 cursor-pointer"
            />
            <label
              htmlFor="book_is_discount3"
              className="text-grey-dark ctext-base font-bold cursor-pointer"
            >
              Скидка
            </label>
          </div>
          <div className="flex items-center mt-4 xl:mt-0 xl:mx-2">
            <label
              htmlFor="book_without_discout3"
              className="text-grey-dark ctext-base  cursor-pointer"
            >
              Цена без скидки (сум):
            </label>
            <input
              type="text"
              id="book_without_discout3"
              placeholder="Введите Цена"
              className="text-grey-dark px-4 py-1.5 sm:py-2 ml-2 w-2/3 rounded-md ctext-xs border border-grey-border focus:outline-none"
            />
          </div>
          <div className="flex items-center mt-4 xl:mt-0 xl:mx-2">
            <label
              htmlFor="book_with_discout3"
              className="text-grey-dark ctext-base  cursor-pointer"
            >
              Цена со скидкой (сум):
            </label>
            <input
              type="text"
              id="book_with_discout3"
              placeholder="Введите Цена"
              className="text-grey-dark px-4 py-1.5 sm:py-2 ml-2 w-2/3 rounded-md ctext-xs border border-grey-border focus:outline-none"
            />
          </div>
          <div className="flex mt-4 xl:mt-0 xl:mx-2">
            <label
              htmlFor="book_file"
              className="text-blue ctext-base flex items-center cursor-pointer"
            >
              Загрузить файл <HiDocumentDownload className="text-2xl ml-1" />
            </label>
            <input type="file" id="book_file" className="hidden" />
          </div>
        </div>
      </div>

      {/* images */}
      <div className="pb-6 border-b border-grey-border ">
        <div className="text-black ctext-lg font-bold mb-6">
          Фотографии товара:
        </div>
        <div className="flex flex-wrap">
          <div className="p-2">
            <label htmlFor="book_image">
              <div
                // style={{ backgroundImage: `url('${mainImage}')` }}
                className="cursor-pointer border border-grey-border bg-white rounded-md w-36 h-48 flex flex-col justify-center items-center"
              >
                <IoMdImages className="text-4xl text-blue" />
                <div className="text-grey-dark ctext-base">Загрузить фото</div>
              </div>
            </label>
            <input type="file" id="book_image" className="hidden" />
            <div className="text-grey-dark ctext-base mt-1 font-bold">
              Главное фото (обложка)
            </div>
            <div className="text-grey-dark ctext-base mt-1 ">
              Минимальный размер: 555х750
            </div>
          </div>
          {/*  */}
          <div className="p-2">
            <label htmlFor="book_image2">
              <div className="cursor-pointer border border-grey-border bg-white rounded-md w-36 h-48 flex flex-col justify-center items-center">
                <IoMdImages className="text-4xl text-blue" />
                <div className="text-grey-dark ctext-base">Загрузить фото</div>
              </div>
            </label>
            <input type="file" id="book_image2" className="hidden" />
            <div className="text-grey-dark ctext-base mt-1 font-bold">
              Главное фото (обложка)
            </div>
            <div className="text-grey-dark ctext-base mt-1 ">
              Минимальный размер: 555х750
            </div>
          </div>
          {/*  */}
          <div className="p-2">
            <label htmlFor="book_image3">
              <div className="cursor-pointer border border-grey-border bg-white rounded-md w-36 h-48 flex flex-col justify-center items-center">
                <IoMdImages className="text-4xl text-blue" />
                <div className="text-grey-dark ctext-base">Загрузить фото</div>
              </div>
            </label>
            <input type="file" id="book_image3" className="hidden" />
            <div className="text-grey-dark ctext-base mt-1 font-bold">
              Главное фото (обложка)
            </div>
            <div className="text-grey-dark ctext-base mt-1 ">
              Минимальный размер: 555х750
            </div>
          </div>
        </div>
      </div>

      {/* Похожие книги: */}
      <div className="py-6">
        <div className="text-black ctext-lg font-bold mb-4">Похожие книги:</div>
        <div className="flex flex-wrap">
          <div className="flex w-1/2 md:w-1/3 lg:w-1/5 mt-2">
            <VscClose className="w-1/4 text-blue ctext-2xl cursor-pointer" />
            <div className="ml-1">
              <div className="text-black ctext-xs">
                Уродина, в поисках пути к счастью и процветанию
              </div>
              <div className="text-grey-dark ctext-xs">Джулиан Бараньеро</div>
            </div>
          </div>
          <div className="flex w-1/2 md:w-1/3 lg:w-1/5 mt-2">
            <VscClose className="w-1/4 text-blue ctext-2xl cursor-pointer" />
            <div className="ml-1">
              <div className="text-black ctext-xs">
                Уродина, в поисках пути к счастью и процветанию
              </div>
              <div className="text-grey-dark ctext-xs">Джулиан Бараньеро</div>
            </div>
          </div>
          <div className="flex w-1/2 md:w-1/3 lg:w-1/5 mt-2">
            <VscClose className="w-1/4 text-blue ctext-2xl cursor-pointer" />
            <div className="ml-1">
              <div className="text-black ctext-xs">
                Уродина, в поисках пути к счастью и процветанию
              </div>
              <div className="text-grey-dark ctext-xs">Джулиан Бараньеро</div>
            </div>
          </div>
          <div className="flex w-1/2 md:w-1/3 lg:w-1/5 mt-2">
            <VscClose className="w-1/4 text-blue ctext-2xl cursor-pointer" />
            <div className="ml-1">
              <div className="text-black ctext-xs">
                Уродина, в поисках пути к счастью и процветанию
              </div>
              <div className="text-grey-dark ctext-xs">Джулиан Бараньеро</div>
            </div>
          </div>
          <div className="flex w-1/2 md:w-1/3 lg:w-1/5 mt-2">
            <VscClose className="w-1/4 text-blue ctext-2xl cursor-pointer" />
            <div className="ml-1">
              <div className="text-black ctext-xs">
                Уродина, в поисках пути к счастью и процветанию
              </div>
              <div className="text-grey-dark ctext-xs">Джулиан Бараньеро</div>
            </div>
          </div>
          <div className="flex w-1/2 md:w-1/3 lg:w-1/5 mt-2">
            <VscClose className="w-1/4 text-blue ctext-2xl cursor-pointer" />
            <div className="ml-1">
              <div className="text-black ctext-xs">
                Уродина, в поисках пути к счастью и процветанию
              </div>
              <div className="text-grey-dark ctext-xs">Джулиан Бараньеро</div>
            </div>
          </div>
          <div className="flex w-1/2 md:w-1/3 lg:w-1/5 mt-2">
            <VscClose className="w-1/4 text-blue ctext-2xl cursor-pointer" />
            <div className="ml-1">
              <div className="text-black ctext-xs">
                Уродина, в поисках пути к счастью и процветанию
              </div>
              <div className="text-grey-dark ctext-xs">Джулиан Бараньеро</div>
            </div>
          </div>
        </div>
        {/* add from list */}
        <div 
          onClick={() => route.push('/add-smillar-books')}
          className="flex items-center text-blue ctext-lg  cursor-pointer my-6">
          Добавить из списка
          <VscChevronRight className="text-xl" />
        </div>
      </div>

      {/* add, cancle */}
      <div className="flex flex-col md:flex-row md:justify-around pb-10">
        <button className="bg-blue w-full md:w-1/3 py-1 lg:py-2 cursor-pointer rounded-md flex justify-center text-white ctext-lg ">
          Сохранить изменения
        </button>
      </div>
    </div>
  );
};

export default EditBook;
