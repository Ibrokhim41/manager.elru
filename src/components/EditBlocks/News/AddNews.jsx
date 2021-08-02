import { VscChevronLeft } from "react-icons/vsc";
import { IoMdImages } from "react-icons/io";
import { useHistory } from "react-router-dom";

const AddNews = () => {
  const route = useHistory();

  return (
    <div className="container mx-auto mb-10 overflow-x-scroll hide-scroll">
      <div className="pt-24"></div>
      <div
        onClick={() => {
          route.push("/news");
        }}
        className="inline-flex items-center text-blue ctext-lg  cursor-pointer"
      >
        <VscChevronLeft className="text-2xl" /> Назад
      </div>

      {/* title */}
      <div className="text-grey-dark ctext-lg font-medium mt-6 mb-5 flex flex-col sm:flex-row sm:justify-between">
        Добавить статью
      </div>

      {/*  title */}
      <div className="flex flex-col md:justify-start mt-4">
        <label htmlFor="category_name" className="text-grey-dark ctext-base ">
          Заголовок 1
        </label>
        <input
          id="category_name"
          type="text"
          placeholder="Введите заголовок..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>

      {/*  text */}
      <div className="flex flex-col md:justify-start mt-4">
        <label htmlFor="category_name" className="text-grey-dark ctext-base ">
          Абзац 1
        </label>
        <textarea
          id="category_name"
          rows="4"
          type="text"
          placeholder="Введите заголовок..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>

      {/* 2 */}
      {/*  title */}
      <div className="flex flex-col md:justify-start mt-6">
        <label htmlFor="category_name" className="text-grey-dark ctext-base ">
          Заголовок 2
        </label>
        <input
          id="category_name"
          type="text"
          placeholder="Введите заголовок..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>

      {/*  text */}
      <div className="flex flex-col md:justify-start mt-4">
        <label htmlFor="category_name" className="text-grey-dark ctext-base ">
          Абзац 2
        </label>
        <textarea
          id="category_name"
          rows="4"
          type="text"
          placeholder="Введите заголовок..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>

      {/*  photos */}
      <div className="flex flex-wrap">
        <div className="w-64 mt-4">
          <label htmlFor="book_image3">
            <div className="cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center">
              <IoMdImages className="text-4xl text-blue" />
              <div className="text-grey-dark ctext-base">Загрузить фото</div>
            </div>
          </label>
          <input type="file" id="book_image3" className="hidden" />
          <div className="text-grey-dark ctext-base mt-1 font-bold">
            Фото обложки стати
          </div>
          <div className="text-grey-dark ctext-base mt-1 font-medium">
            Минимальный размер: 640х290
          </div>
        </div>
        {/* 2 */}
        <div className="w-64 mt-4">
          <label htmlFor="book_image3">
            <div className="cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center">
              <IoMdImages className="text-4xl text-blue" />
              <div className="text-grey-dark ctext-base">Загрузить фото</div>
            </div>
          </label>
          <input type="file" id="book_image3" className="hidden" />
          <div className="text-grey-dark ctext-base mt-1 font-bold">
          Первое фото статьи
          </div>
          <div className="text-grey-dark ctext-base mt-1 font-medium">
          Минимальный размер: 777х544
          </div>
        </div>
        {/* 3 */}
        <div className="w-64 mt-4">
          <label htmlFor="book_image3">
            <div className="cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center">
              <IoMdImages className="text-4xl text-blue" />
              <div className="text-grey-dark ctext-base">Загрузить фото</div>
            </div>
          </label>
          <input type="file" id="book_image3" className="hidden" />
          <div className="text-grey-dark ctext-base mt-1 font-bold">
          Второе фото статьи
          </div>
          <div className="text-grey-dark ctext-base mt-1 font-medium">
          Минимальный размер: 777х544
          </div>
        </div>
      </div>

      {/*  */}
      <button className="text-white ctext-xs w-full md:w-9/12 bg-blue border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-8">
        Сохранить
      </button>
    </div>
  );
};

export default AddNews;
