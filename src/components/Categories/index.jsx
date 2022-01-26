import { VscAdd } from "react-icons/vsc";
import { BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import data from "store/categories";
import { useEffect, useState } from 'react';

const Categories = observer(() => {
  const route = useHistory();

  const [selected, setSelected] = useState([])
  const [categories, setCategories] = useState([])
  const [searchTitle, setSearchTitle] = useState('')

  const removeCategory = () => {
    // selected.length === 0 && alert("pusta")
    // selected.forEach(id => {
    //   data.removeCategory(id)
    // })
    data.removeCategory(selected)
  }

  useEffect(() => {
    data.fetchCategories();
  }, [])

  useEffect(() => {
    if(data.searched_categories.length > 0 || searchTitle.length > 0) {
      setCategories(data.searched_categories)
    } else {
      setCategories(data.categories)
    }
  }, [data.categories, data.searched_categories])


  return (
    <div className="container mx-auto mb-10">
      <div className="pt-24"></div>
      <div className="flex flex-col md:flex-row">
        <button
          onClick={() => route.push("/add-category")}
          className="bg-blue text-white ctext-base  py-1.5 px-8 rounded-md flex items-center justify-center"
        >
          Добавить категорию <VscAdd className="text-md ml-1" />
        </button>
        <div className="flex items-center justify-between md:justify-start ml-4 mt-2 md:mt-0">
          <label htmlFor="category_name" className="text-grey-dark ctext-base ">
            Поиск категории
          </label>
          <input
            onChange={(e) => {
              setSearchTitle(e.target.value)
              data.searchCategory(e.target.value)
            }}
            id="category_name"
            type="text"
            placeholder="Введите название..."
            className="text-grey-dark ctext-xs w-2/3 md:w-80 bg-white border border-grey-border rounded-md focus:outline-none py-1.5 px-2 ml-2"
          />
        </div>
      </div>
      {/*  */}
      <div className="w-full md:w-9/12 flex justify-end my-4">
        <button
          onClick={removeCategory}
          className="flex items-center bg-red-dark rounded-md text-white ctext-base  py-1 px-4">
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
        {categories.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full md:w-9/12 grid grid-cols-12">
              <div
                className="col-span-1 border border-grey-border flex justify-center items-center">
                <input
                  onClick={(e) => e.currentTarget.checked ? setSelected(selected.concat(item.id)) : setSelected(selected.filter(id => id !== item.id))}
                  type="checkbox"
                  className="w-4 sm:w-5 h-4 sm:h-5 cursor-pointer"
                />
              </div>
              <div className="col-span-11 flex justify-between items-center text-grey-dark ctext-sm  border border-grey-border py-1.5 px-2">
                <div className="cursor-pointer hover:text-blue" onClick={() => route.push("/books-in-category")}>
                  {item.title_ru}
                </div>
                <div
                  onClick={() => route.push(`/edit-category/${item.id}`)}
                  className="p-1.5 bg-blue rounded-md cursor-pointer text-white text-lg"
                >
                  <BiPencil />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Categories;
