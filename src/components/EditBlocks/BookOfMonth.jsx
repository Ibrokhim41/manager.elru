import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { IoMdImages } from "react-icons/io";
import { useHistory } from "react-router-dom";


const BookOfMonth = () => {

    const route = useHistory()

    return (
        <div className="container mx-auto mb-10 overflow-x-scroll hide-scroll">
          <div className="pt-24"></div>
          <div
            onClick={() => {
              route.push("/edit-blocks");
            }}
            className="flex items-center text-blue ctext-lg  cursor-pointer"
          >
            <VscChevronLeft className="text-2xl" /> Назад
          </div>
    
          {/* title */}
          <div className="text-grey-dark ctext-lg font-medium mt-6 mb-5 flex flex-col sm:flex-row sm:justify-between">
          Книга месяца
          </div>

          {/*  banner */}
          <div className="w-72 mt-4">
            <label htmlFor="book_image3">
              <div className="cursor-pointer border border-grey-border bg-white rounded-md w-72 h-36 flex flex-col justify-center items-center">
                <IoMdImages className="text-4xl text-blue" />
                <div className="text-grey-dark ctext-base">Загрузить фото</div>
              </div>
            </label>
            <input type="file" id="book_image3" className="hidden" />
            <div className="text-grey-dark ctext-base mt-1 font-bold">Баннер</div>
            <div className="text-grey-dark ctext-base mt-1 font-medium">
            Минимальный размер: 1445х460
            </div>
            <div className="text-grey-dark ctext-base mt-1 mb-1.5">Сылка:</div>
            <input
              type="text"
              placeholder="сылка"
              className="w-full border border-grey-border rounded-md focus:outline-none bg-white py-1.5 px-2.5 text-grey-dark ctext-xs"
            />
          </div>
          {/*  */}
          <div className="text-black ctext-lg font-bold mt-6">
            Книга:
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
          <button className="text-white ctext-xs w-full md:w-9/12 bg-blue border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-4">
            Сохранить
          </button>
        </div>
      );
}


export default BookOfMonth;