import { useState } from "react";
import ChangePassword from "./ChangePassword";

const Users = () => {
  const [change, setChange] = useState()

  const list = [
    {
      name: "Аброр Ниязов Акилхонович",
      link: "gosha@mail.ru",
    },
    {
      name: "Ниязов Аброр Акилхонович",
      link: "+998 99 314 42 63",
    },
    {
      name: "Акилхонович Ниязов Аброр",
      link: "gosha@mail.ru",
    },
    {
      name: "Ниязов Аброр Акилхонович",
      link: "+998 99 314 42 63 ",
    },
    {
      name: "Акилхонович Ниязов Аброр",
      link: "+998 99 314 42 63 ",
    },
    {
      name: "Ниязов Аброр Акилхонович",
      link: "+998 99 314 42 63 ",
    },
    {
      name: "Ниязов Акилхонович",
      link: "gosha@mail.ru",
    },
  ];

  return (
    <div className="container mx-auto mb-10 overflow-x-scroll hide-scroll">
      
      <ChangePassword change={change} setChange={setChange} />
      {/*  */}
      <div className="pt-24"></div>

      {/*  find user */}
      <div className="flex flex-col sm:flex-row sm:items-center mt-4">
        <label
          htmlFor="top_name"
          className="w-full sm:w-40 text-grey-dark ctext-base "
        >
          Поиск пользователя
        </label>
        <input
          id="top_name"
          type="text"
          placeholder="Введите Имя, фамилия или отчество"
          className="text-grey-dark ctext-xs w-full sm:w-80 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 sm:ml-2"
        />
      </div>

      {/*  */}
      <div className="w-full md:w-9/12 grid grid-cols-12 mt-6">
        {list.map((item, i) => {
          return (
            <>
              <div className="col-span-6 sm:col-span-6 flex justify-between items-center text-grey-dark ctext-sm  border-b border-grey-border py-4 px-2">
                <div className="cursor-pointer hover:text-blue">
                  {item.name}
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 flex justify-end sm:justify-start items-center text-grey-dark ctext-sm  border-b border-grey-border py-4 px-2">
                {item.link}
              </div>
              <div 
              onClick={() => setChange(true)}
              className="col-span-12 sm:col-span-3 flex justify-start sm:justify-end items-center text-blue ctext-base font-medium underline cursor-pointer border-b border-grey-border hover:text-green-light py-4 px-2 mb-8 sm:mb-0">
                Изменить пароль
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
