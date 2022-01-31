import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { IoMdImages } from "react-icons/io";
import { useHistory, useParams } from "react-router-dom";
import top100 from "../../../store/top100";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const EditTop = observer(() => {
  const route = useHistory();
  const handle_image = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        top100.new_data.image = file;
        top100.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const { id } = useParams();
  useEffect(() => {
    top100.edit_tops(id);
    return () => (top100.new_data = {});
  }, [id]);
  return (
    <div className="container mx-auto mb-10 overflow-x-scroll hide-scroll">
      <div className="pt-24"></div>
      <div
        onClick={() => {
          route.push("/tops");
        }}
        className="inline-flex items-center text-blue ctext-lg  cursor-pointer"
      >
        <VscChevronLeft className="text-2xl" /> Назад
      </div>

      {/* title */}
      <div className="text-grey-dark ctext-lg font-medium mt-6 mb-5 flex flex-col sm:flex-row sm:justify-between">
        Редактирование топа
      </div>

      {/*  name */}
      {/*  name */}
      <div className="flex flex-col md:justify-start mt-4">
        <label htmlFor="top_name" className="text-grey-dark ctext-base ">
          Название топа UZ
        </label>
        <input
          id="top_name"
          value={top100.new_data.title_uz || ""}
          type="text"
          onChange={(e) => (top100.new_data.title_uz = e.target.value)}
          placeholder="Введите название..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>
      <div className="flex flex-col md:justify-start mt-4">
        <label htmlFor="top_name" className="text-grey-dark ctext-base ">
          Название топа RU
        </label>
        <input
          id="top_name"
          value={top100.new_data.title_ru || ""}
          type="text"
          onChange={(e) => (top100.new_data.title_ru = e.target.value)}
          placeholder="Введите название..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>
      <div className="flex flex-col md:justify-start mt-4">
        <label htmlFor="top_name" className="text-grey-dark ctext-base ">
          Название топа EN
        </label>
        <input
          id="top_name"
          value={top100.new_data.title_en || ""}
          type="text"
          onChange={(e) => (top100.new_data.title_en = e.target.value)}
          placeholder="Введите название..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>
      {/* description */}
      <div className="flex flex-col md:justify-start mt-4">
        <label htmlFor="top_description" className="text-grey-dark ctext-base ">
          Описание UZ
        </label>
        <textarea
          id="top_description"
          value={top100.new_data.content_uz || ""}
          type="text"
          rows="3"
          onChange={(e) => (top100.new_data.content_uz = e.target.value)}
          placeholder="Введите название..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>
      <div className="flex flex-col md:justify-start mt-4">
        <label htmlFor="top_description" className="text-grey-dark ctext-base ">
          Описание RU
        </label>
        <textarea
          id="top_description"
          value={top100.new_data.content_ru || ""}
          type="text"
          rows="3"
          onChange={(e) => (top100.new_data.content_ru = e.target.value)}
          placeholder="Введите название..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>
      <div className="flex flex-col md:justify-start mt-4">
        <label htmlFor="top_description" className="text-grey-dark ctext-base ">
          Описание EN
        </label>
        <textarea
          id="top_description"
          value={top100.new_data.content_en || ""}
          type="text"
          rows="3"
          onChange={(e) => (top100.new_data.content_en = e.target.value)}
          placeholder="Введите название..."
          className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
        />
      </div>

      {/*  banner */}
      <div className="w-64 mt-4">
        <label htmlFor="book_image3">
          <div className="cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center">
            {top100.new_data.image ? (
              <img
                src={top100.imagePreview}
                className="w-full h-full object-cover"
                alt="banner"
              />
            ) : (
              <>
                <IoMdImages className="text-4xl text-blue" />
                <div className="text-grey-dark ctext-base">Загрузить фото</div>
              </>
            )}
          </div>
        </label>
        <input
          type="file"
          onChange={(e) => handle_image(e.target.files[0])}
          id="book_image3"
          className="hidden"
        />
        <div className="text-grey-dark ctext-base mt-1 font-bold">Обложка</div>
        <div className="text-grey-dark ctext-base mt-1 font-medium">
          Минимальный размер: 400х266
        </div>
        <div className="text-grey-dark ctext-base mt-1 mb-1.5">Сылка:</div>
        <input
          type="text"
          value={top100.new_data.link || ""}
          onChange={(e) => (top100.new_data.link = e.target.value)}
          placeholder="сылка"
          className="w-full border border-grey-border rounded-md focus:outline-none bg-white py-1.5 px-2.5 text-grey-dark ctext-xs"
        />
      </div>
      {/*  */}
      <div className="text-black ctext-lg font-bold mt-6">
        Книги в подборке:
      </div>
      {/* add from list */}
      <div
        onClick={() => route.push("/add-smillar-books")}
        className="flex items-center text-blue ctext-lg font-medium cursor-pointer my-2"
      >
        Добавить из списка
        <VscChevronRight className="text-xl" />
      </div>

      {/*  */}
      <button
        onClick={() => top100.save_tops(id)}
        className="text-white ctext-xs w-full md:w-9/12 bg-blue border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-4"
      >
        Сохранить
      </button>
    </div>
  );
});

export default EditTop;
