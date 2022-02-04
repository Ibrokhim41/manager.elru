import {VscChevronLeft, VscChevronRight} from "react-icons/vsc";
import {IoMdImages} from "react-icons/io";
import {useHistory} from "react-router-dom";
import selection from "../../../store/selection";
import {observer} from "mobx-react-lite";

const AddSelection = observer(() => {
    const route = useHistory();
    return (
        <div className="container mx-auto mb-10 overflow-x-scroll hide-scroll">
            <div className="pt-24"></div>
            <div
                onClick={() => {
                    route.push("/selections");
                }}
                className="inline-flex items-center text-blue ctext-lg  cursor-pointer"
            >
                <VscChevronLeft className="text-2xl"/> Назад
            </div>

            {/* title */}
            <div className="text-grey-dark ctext-lg font-medium mt-6 mb-5 flex flex-col sm:flex-row sm:justify-between">
                Добавление подборки
            </div>

            {/*  name */}
            <div className="flex flex-col md:justify-start mt-4">
                <label htmlFor="category_name" className="text-grey-dark ctext-base ">
                    Название подборки
                </label>
                <input
                    value={selection.new_data.detail || ""}
                    onChange={(e) => {
                        selection.new_data.detail = e.target.value;
                    }}
                    id="category_name"
                    type="text"
                    placeholder="Введите название..."
                    className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
                />
            </div>

            {/*  banner */}
            <div className="flex mt-4">
                <div className="w-1/4">
                    <label htmlFor="book_image3">
                        <div
                            className="cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center">
                            {selection.new_data.image ? (
                                <img
                                    src={URL.createObjectURL(selection.new_data.image)}
                                    className="w-full h-full object-cover"
                                    alt="banner"
                                />
                            ) : (
                                <>
                                    <IoMdImages className="text-4xl text-blue"/>
                                    <div className="text-grey-dark ctext-base">
                                        Загрузить фото
                                    </div>
                                </>
                            )}
                        </div>
                    </label>
                    <input
                        onChange={(e) => selection.new_data.image = e.target.files[0]}
                        type="file"
                        id="book_image3"
                        className="hidden"
                    />
                    <div className="text-grey-dark ctext-base mt-1 font-bold">Баннер</div>
                    <div className="text-grey-dark ctext-base mt-1 font-medium">
                        Минимальный размер: 640х218
                    </div>
                    <div className="text-grey-dark ctext-base mt-1 mb-1.5">Сылка:</div>
                    <input
                        type="text"
                        value={selection.new_data.link || ""}
                        onChange={(e) => {
                            selection.new_data.link = e.target.value;
                        }}
                        placeholder="сылка"
                        className="w-60 border border-grey-border rounded-md focus:outline-none bg-white py-1.5 px-2.5 text-grey-dark ctext-xs"
                    />
                </div>
                <div className="w-2/4">
                    <input
                        value={selection.new_data.title_uz || ""}
                        onChange={(e) => {
                            selection.new_data.title_uz = e.target.value;
                        }}
                        type="text"
                        placeholder="Title_uz"
                        className="text-grey-dark ctext-xs w-full  bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
                    />
                    <input
                        value={selection.new_data.title_ru || ""}
                        onChange={(e) => {
                            selection.new_data.title_ru = e.target.value;
                        }}
                        type="text"
                        placeholder="Title_ru"
                        className="text-grey-dark ctext-xs w-full mt-14  bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 "
                    />
                    <input
                        value={selection.new_data.title_en || ""}
                        onChange={(e) => {
                            selection.new_data.title_en = e.target.value;
                        }}
                        type="text"
                        placeholder="Title_en"
                        className="text-grey-dark ctext-xs w-full mt-14  bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4"
                    />
                </div>
            </div>
            {/* /banner */}
            <div className="text-black ctext-lg font-bold mt-6">
                Книги в подборке:
            </div>
            {/* add from list */}
            <div
                onClick={() => route.push("/add-smillar-books")}
                className="flex items-center text-blue ctext-lg font-medium cursor-pointer my-2"
            >
                Добавить из списка
                <VscChevronRight className="text-xl"/>
            </div>

            {/*  */}
            <button
                onClick={() => selection.createSelections()}
                className="text-white ctext-xs w-full md:w-9/12 bg-blue border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-4"
            >
                Сохранить
            </button>
        </div>
    );
});

export default AddSelection;
