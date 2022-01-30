import { VscChevronLeft } from "react-icons/vsc";
import { IoMdImages } from "react-icons/io";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
const MainPageBanners = () => {
  const route = useHistory();
  const [banner, setBanner] = useState("");
  console.log(banner);

  // const add_banner = () => {};

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
      <div className="text-grey-dark ctext-lg font-medium mt-6 mb-5 flex flex-col sm:flex-row sm:justify-between border-b border-grey-border pb-3">
        Баннеры главного экрана
      </div>
      {/* banners */}
      <div className="text-black ctext-lg font-bold mb-2">Большие баннеры:</div>
      <div className="flex flex-wrap">
        {/* 1 */}
        <div className="w-72 mt-4 sm:m-2">
          <label htmlFor="book_image1">
            <div className="cursor-pointer border border-grey-border bg-white rounded-md w-72 h-36 flex flex-col justify-center items-center">
              <IoMdImages className="text-4xl text-blue" />
              <div className="text-grey-dark ctext-base">Загрузить фото</div>
            </div>
          </label>
          <input
            type="file"
            id="book_image1"
            onChange={(e) => setBanner(e.target.files[0])}
            className="hidden"
          />
          <div className="text-grey-dark ctext-base mt-1 font-bold">
            Большой баннер 1
          </div>
          <div className="text-grey-dark ctext-base mt-1 font-medium">
            Минимальный размер: 1110х390
          </div>
          <div className="text-grey-dark ctext-base mt-1 mb-1.5">Ссылка:</div>
          <input
            type="text"
            className="w-full border border-grey-border rounded-md focus:outline-none bg-white py-1.5 px-2.5 text-grey-dark ctext-xs"
          />
        </div>
        {/* 2 */}
        <div className="w-72 mt-4 sm:m-2">
          <label htmlFor="book_image3">
            <div className="cursor-pointer border border-grey-border bg-white rounded-md w-72 h-36 flex flex-col justify-center items-center">
              <IoMdImages className="text-4xl text-blue" />
              <div className="text-grey-dark ctext-base">Загрузить фото</div>
            </div>
          </label>
          <input type="file" id="book_image3" className="hidden" />
          <div className="text-grey-dark ctext-base mt-1 font-bold">
            Большой баннер 2
          </div>
          <div className="text-grey-dark ctext-base mt-1 font-medium">
            Минимальный размер: 1110х390
          </div>
          <div className="text-grey-dark ctext-base mt-1 mb-1.5">Ссылка:</div>
          <input
            type="text"
            className="w-full border border-grey-border rounded-md focus:outline-none bg-white py-1.5 px-2.5 text-grey-dark ctext-xs"
          />
        </div>
        {/* 3 */}
        <div className="w-72 mt-4 sm:m-2">
          <label htmlFor="book_image3">
            <div className="cursor-pointer border border-grey-border bg-white rounded-md w-72 h-36 flex flex-col justify-center items-center">
              <IoMdImages className="text-4xl text-blue" />
              <div className="text-grey-dark ctext-base">Загрузить фото</div>
            </div>
          </label>
          <input type="file" id="book_image3" className="hidden" />
          <div className="text-grey-dark ctext-base mt-1 font-bold">
            Большой баннер 3
          </div>
          <div className="text-grey-dark ctext-base mt-1 font-medium">
            Минимальный размер: 1110х390
          </div>
          <div className="text-grey-dark ctext-base mt-1 mb-1.5">Ссылка:</div>
          <input
            type="text"
            className="w-full border border-grey-border rounded-md focus:outline-none bg-white py-1.5 px-2.5 text-grey-dark ctext-xs"
          />
        </div>
        {/* 4 */}
        <div className="w-72 mt-4 sm:m-2">
          <label htmlFor="book_image3">
            <div className="cursor-pointer border border-grey-border bg-white rounded-md w-72 h-36 flex flex-col justify-center items-center">
              <IoMdImages className="text-4xl text-blue" />
              <div className="text-grey-dark ctext-base">Загрузить фото</div>
            </div>
          </label>
          <input type="file" id="book_image3" className="hidden" />
          <div className="text-grey-dark ctext-base mt-1 font-bold">
            Большой баннер 4
          </div>
          <div className="text-grey-dark ctext-base mt-1 font-medium">
            Минимальный размер: 1110х390
          </div>
          <div className="text-grey-dark ctext-base mt-1 mb-1.5">Ссылка:</div>
          <input
            type="text"
            className="w-full border border-grey-border rounded-md focus:outline-none bg-white py-1.5 px-2.5 text-grey-dark ctext-xs"
          />
        </div>
      </div>
      {/* min banners */}
      <div className="text-black ctext-lg font-bold mt-6 border-t border-grey-border pt-4">
        Маленькие баннеры:
      </div>
      <div className="flex flex-wrap">
        {/* 1 */}
        <div className="w-64 m-2">
          <label htmlFor="book_image3">
            <div className="cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center">
              <IoMdImages className="text-4xl text-blue" />
              <div className="text-grey-dark ctext-base">Загрузить фото</div>
            </div>
          </label>
          <input type="file" id="book_image3" className="hidden" />
          <div className="text-grey-dark ctext-base mt-1 font-bold">
            Маленький баннер 1
          </div>
          <div className="text-grey-dark ctext-base mt-1 font-medium">
            Минимальный размер: 640х218
          </div>
          <div className="text-grey-dark ctext-base mt-1 mb-1.5">Ссылка:</div>
          <input
            type="text"
            className="w-full border border-grey-border rounded-md focus:outline-none bg-white py-1.5 px-2.5 text-grey-dark ctext-xs"
          />
        </div>
        {/* 2 */}
        <div className="w-64 m-2">
          <label htmlFor="book_image3">
            <div className="cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center">
              <IoMdImages className="text-4xl text-blue" />
              <div className="text-grey-dark ctext-base">Загрузить фото</div>
            </div>
          </label>
          <input type="file" id="book_image3" className="hidden" />
          <div className="text-grey-dark ctext-base mt-1 font-bold">
            Маленький баннер 2
          </div>
          <div className="text-grey-dark ctext-base mt-1 font-medium">
            Минимальный размер: 640х218
          </div>
          <div className="text-grey-dark ctext-base mt-1 mb-1.5">Ссылка:</div>
          <input
            type="text"
            className="w-full border border-grey-border rounded-md focus:outline-none bg-white py-1.5 px-2.5 text-grey-dark ctext-xs"
          />
        </div>
      </div>
      {/*  */}
      <button className="text-white ctext-xs w-full md:w-9/12 bg-blue border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-8">
        Сохранить
      </button>
    </div>
  );
};

export default MainPageBanners;
