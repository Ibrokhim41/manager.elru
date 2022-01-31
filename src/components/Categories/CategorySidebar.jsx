import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdClose } from "react-icons/io";
import { BiEraser } from "react-icons/bi";
import { useWindowDimensions } from "../../hooks/ScreenWidth";
import data from "../../store/books"
import categories from "../../store/categories";
import { useEffect, useState } from "react";

const CategorySidebar = ({ showFilter, setShowFilter }) => {

  const [filters, setFilters] = useState({
    title: '',
    author: '',
    category: '',
    format: []
  })
  const { width } = useWindowDimensions();
  const [options, setOPtions] = useState([])

  useEffect(() => {
    categories.fetchCategories()
      .then(() => {
        categories.categories.forEach(category => {
          setOPtions(prev => [...prev, { value: category, label: category.title_ru }])
        })
        setOPtions(prev => [...prev, { value: '', label: 'Все' }])
      })
  }, [])

  console.log(filters);


  return (
    <div
      className={`fixed top-0 right-0 transform ${showFilter && "translate-x-0"} ${width > 1199 ? "translate-x-0" : !showFilter ? "translate-x-full" : ""
        } overflow-y-scroll hide-scroll transition-all pt-20 sm:w-1/2 lg:w-2/6 xl:w-3/12 border-l border-grey-border shadow-sm h-screen bg-white`}
    >
      <IoMdClose
        onClick={() => setShowFilter(false)}
        className="xl:hidden text-2xl cursor-pointer ml-auto mr-4"
      />
      <div className="py-6 px-4">
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
          onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          value={filters.title}
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
          onChange={(e) => setFilters({ ...filters, author: e.target.value })}
          value={filters.author}
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
        <Select
          onChange={(e) => setFilters({ ...filters, category: e.value.id })}
          options={options}
          placeholder="Все категории"
          className="mt-1.5"
        />

        {/* format */}
        <div className="mt-8 pb-4 border-b border-grey-border">
          <div className="text-grey-dark ctext-base font-medium mb-3">
            Формат
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <input
                onChange={(e) => e.target.checked ? setFilters({ ...filters, format: filters.format.concat(e.target.value) }) : setFilters({...filters, format: filters.format.filter(f => f !== e.target.value)})}
                value="paper"
                checked={filters.format.includes("paper")}
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
                onChange={(e) => e.target.checked ? setFilters({ ...filters, format: filters.format.concat(e.target.value) }) : setFilters({ ...filters, format: filters.format.filter(f => f !== e.target.value) })}
                value="audio"
                checked={filters.format.includes("audio")}
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
              <input
                onChange={(e) => e.target.checked ? setFilters({ ...filters, format: filters.format.concat(e.target.value) }) : setFilters({ ...filters, format: filters.format.filter(f => f !== e.target.value) })}
                checked={filters.format.includes("pdf")}
                value="pdf"
                id="book_pdf"
                type="checkbox"
                className="cursor-pointer"
              />
              <label
                className="ml-2 cursor-pointer text-grey-dark font-bold"
                htmlFor="book_pdf"
              >
                PDF
              </label>
            </div>
          </div>
        </div>

        {/* footer-button */}
        <div className="mt-4 flex justify-between">
          <button 
            onClick={() => setFilters({
              title: '',
              author: '',
              category: '',
              format: []
            })}
            className="flex items-center bg-white rounded-md border border-grey-border text-grey-dark font-medium  py-2 px-2 group hover:bg-blue hover:text-white">
            <BiEraser className="mr-2 text-lg group-hover:text-white" />
            Сбросить
          </button>
          <button
            onClick={() => data.filterBooks(filters)}
            className="flex items-center bg-white rounded-md border border-grey-border text-grey-dark font-medium  py-2 px-2 group hover:bg-blue hover:text-white">
            Применить фильтры
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
