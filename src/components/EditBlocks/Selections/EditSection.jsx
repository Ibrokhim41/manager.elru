import {VscChevronLeft, VscChevronRight} from "react-icons/vsc";
import {IoMdImages} from "react-icons/io";
import {useHistory, useParams} from "react-router-dom";
import {useEffect} from "react/cjs/react.development";
import {observer} from "mobx-react-lite";
import selection from "../../../store/selection";

const EditSelection = observer(() => {
    const route = useHistory();

    const {id} = useParams();
    useEffect(() => {
        selection.getSelection(id);
        return () => {
            selection.new_data = {};
        };
    }, [id]);

    const update_selection = () => {
        selection.update_selection(id);
    };

    console.log(selection.new_data.image);
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
                Редактирование подборки
            </div>

            {/*  name */}
            <div className="flex flex-col md:justify-start mt-4">
                <label htmlFor="category_name" className="text-grey-dark ctext-base ">
                    Название подборки
                </label>
                <input
                    id="category_name"
                    type="text"
                    value={selection.new_data.detail || ""}
                    onChange={(e) => {
                        selection.new_data.detail = e.target.value;
                    }}
                    placeholder={selection.single_selection.detail}
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
                                    src={typeof selection.new_data.image == "object" ? URL.createObjectURL(selection.new_data.image) : selection.new_data.image}
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
                        onChange={(e) => selection.new_data.image = (e.target.files[0])}
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
                        placeholder={selection.single_selection.link}
                        className="w-60 border border-grey-border rounded-md focus:outline-none bg-white py-1.5 px-2.5 text-grey-dark ctext-xs"
                    />
                </div>
                <div className="w-2/4">
                    <div>
                        <label htmlFor="title_uz">Title_uz</label>
                        <input
                            value={selection.new_data.title_uz || ""}
                            onChange={(e) => {
                                selection.new_data.title_uz = e.target.value;
                            }}
                            type="text"
                            placeholder={selection.single_selection.title_uz}
                            className="text-grey-dark ctext-xs w-full  bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
                        />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="title_en">Title_ru</label>
                        <input
                            value={selection.new_data.title_ru || ""}
                            onChange={(e) => {
                                selection.new_data.title_ru = e.target.value;
                            }}
                            type="text"
                            placeholder={selection.single_selection.title_ru}
                            className="text-grey-dark ctext-xs w-full  bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 "
                        />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="title_en">Title_en</label>
                        <input
                            value={selection.new_data.title_en || ""}
                            onChange={(e) => {
                                selection.new_data.title_en = e.target.value;
                            }}
                            type="text"
                            placeholder={selection.single_selection.title_en}
                            className="text-grey-dark ctext-xs w-full  bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4"
                        />
                    </div>
                </div>
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
                <VscChevronRight className="text-xl"/>
            </div>

            {/*  */}
            <button
                onClick={update_selection}
                className="text-white ctext-xs w-full md:w-9/12 bg-blue border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-4"
            >
                Сохранить
            </button>
        </div>
    );
});

export default EditSelection;
