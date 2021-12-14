import { VscChevronLeft } from "react-icons/vsc";
import { IoMdImages } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const AddNews = () => {
  const route = useHistory();

  const [newsDetail, setNewsDetail] = useState({
    "id": null,
    "image": "http://127.0.0.1:8000/media/image/Screenshot_from_2021-12-13_07-33-49.png",
    "image1": null,
    "image2": "https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815",
    "title_uz": null,
    "title_ru": null,
    "title_en": null,
    "info_uz": null,
    "info_ru": null,
    "info_en": null,
    "content_uz": null,
    "content_ru": null,
    "content_en": null,
    "created_at": null
  })



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

      {/* ru */}
      {/* title */}
      <div className="text-grey-dark ctext-lg font-medium mt-6 mb-5 flex flex-col sm:flex-row sm:justify-between">
        Добавить статью
      </div>

      {/*  title */}
      <div className="flex flex-col md:justify-start mt-4">
        <label htmlFor="category_name" className="text-grey-dark ctext-base ">
          Заголовок <span className={`text-blue text-sm`}>ru</span>
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
          Текст <span className={`text-blue text-sm`}>ru</span>
        </label>
        <textarea
          id="category_name"
          rows="4"
          type="text"
          placeholder="Введите заголовок..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>

      {/* uz */}
      {/*  title */}
      <div className="flex flex-col md:justify-start mt-6">
        <label htmlFor="category_name" className="text-grey-dark ctext-base ">
          Sarlavha <span className={`text-blue text-sm`}>uz</span>
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
          Matn <span className={`text-blue text-sm`}>uz</span>
        </label>
        <textarea
          id="category_name"
          rows="4"
          type="text"
          placeholder="Введите заголовок..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>

      {/* en */}
      {/*  title */}
      <div className="flex flex-col md:justify-start mt-6">
        <label htmlFor="category_name" className="text-grey-dark ctext-base ">
          Title <span className={`text-blue text-sm`}>en</span>
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
          Text <span className={`text-blue text-sm`}>en</span>
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
            <div
              style={{ backgroundImage: `url(${newsDetail.image})` }}
              className={`bg-cover bg-center cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center`}>
              {newsDetail.image === null && <IoMdImages className="text-4xl text-blue" />}
              <div className={`${newsDetail.image !== null && 'hidden'} text-grey-dark ctext-base`}>Загрузить фото</div>
            </div>
          </label>
          <input
            onChange={(e) => setNewsDetail({ ...newsDetail, image: URL.createObjectURL(e.target.files[0]) })}
            type="file" id="book_image3" className="hidden" />
          <div className="text-grey-dark ctext-base mt-1 font-bold">
            Фото обложки стати
          </div>
          <div className="text-grey-dark ctext-base mt-1 font-medium">
            Минимальный размер: 640х290
          </div>
        </div>
        {/* 2 */}
        <div className="w-64 mt-4">
          <label htmlFor="book_image4">
            <div
              style={{ backgroundImage: `url(${newsDetail.image1})` }}
              className={`bg-cover bg-center cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center`}>
              {newsDetail.image1 === null && <IoMdImages className="text-4xl text-blue" />}
              <div className={`${newsDetail.image1 !== null && 'hidden'} text-grey-dark ctext-base`}>Загрузить фото</div>
            </div>
          </label>
          <input
            onChange={(e) => setNewsDetail({ ...newsDetail, image1: URL.createObjectURL(e.target.files[0]) })}
            type="file" id="book_image4" className="hidden" />
          <div className="text-grey-dark ctext-base mt-1 font-bold">
            Первое фото статьи
          </div>
          <div className="text-grey-dark ctext-base mt-1 font-medium">
            Минимальный размер: 777х544
          </div>
        </div>
        {/* 3 */}
        <div className="w-64 mt-4">
          <label htmlFor="book_image5">
            <div
              style={{ backgroundImage: `url(${newsDetail.image2})` }}
              className={`bg-cover bg-center cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center`}>
              {newsDetail.image2 === null && <IoMdImages className="text-4xl text-blue" />}
              <div className={`${newsDetail.image2 !== null && 'hidden'} text-grey-dark ctext-base`}>Загрузить фото</div>
            </div>
          </label>
          <input 
            onChange={(e) => setNewsDetail({ ...newsDetail, image2: URL.createObjectURL(e.target.files[0]) })}
            type="file" id="book_image5" className="hidden" />
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
