import {VscChevronLeft, VscAdd} from "react-icons/vsc";
import {BsTrash} from "react-icons/bs";
import {BiPencil} from "react-icons/bi";
import {useHistory} from "react-router-dom";
import top100 from "store/top100";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";

const Tops = observer(() => {
    const route = useHistory();
    useEffect(() => {
        top100.fetchTop100();
    }, []);

    return (
        <div className="container mx-auto mb-10 overflow-x-scroll hide-scroll">
            <div className="pt-24"></div>
            <div
                onClick={() => {
                    route.push("/edit-blocks");
                }}
                className="inline-flex items-center text-blue ctext-lg  cursor-pointer"
            >
                <VscChevronLeft className="text-2xl"/> Назад
            </div>

            {/* title */}
            <div className="text-grey-dark ctext-lg font-medium mt-6 mb-5 flex flex-col sm:flex-row sm:justify-between">
                Топ - 100
            </div>
            {/* actoins */}
            <div className="w-full md:w-9/12 grid grid-cols-12">
                <div
                    className="col-span-12 text-grey-dark ctext-lg font-medium flex flex-col sm:flex-row sm:justify-between">
                    <button
                        onClick={() => route.push("/add-top")}
                        className="bg-blue text-white ctext-base  py-1.5 px-8 rounded-md flex items-center justify-center"
                    >
                        Добавить топ <VscAdd className="text-md ml-1"/>
                    </button>
                    <button
                        onClick={() => top100.removeTops()}
                        className="flex items-center justify-center mt-2 sm:mt-0 bg-red-dark rounded-md text-white ctext-base font-medium py-1 px-4"
                    >
                        <BsTrash className="mr-1 text-xl"/>
                        Удалить
                    </button>
                </div>
            </div>

            {/*  */}
            <div className="w-full md:w-9/12 grid grid-cols-12  mt-4">
                <div className="col-span-1 border border-grey-border"></div>
                <div className="col-span-11 text-grey-dark ctext-sm  border border-grey-border py-1.5 px-2">
                    Название
                </div>
            </div>
            <div className="w-full md:w-9/12 grid grid-cols-12">
                {top100.data.map((item, i) => {
                    return (
                        <div className="col-span-12 grid grid-cols-12" key={item.id}>
                            <div className="col-span-1 border border-grey-border flex justify-center items-center">
                                <input
                                    type="checkbox"
                                    onChange={(e) => {
                                        e.currentTarget.checked
                                            ? top100.remove_tops.push(item.id)
                                            : (top100.remove_tops = top100.remove_tops.filter(
                                                (id) => id !== item.id
                                            ));
                                    }}
                                    className="w-4 sm:w-5 h-4 sm:h-5 cursor-pointer"
                                />
                            </div>
                            <div
                                className="col-span-11 flex justify-between items-center text-grey-dark ctext-sm  border border-grey-border py-1.5 px-2">
                                <div
                                    className="cursor-pointer hover:text-blue"
                                    // onClick={() => route.push("/books-in-category")}
                                >
                                    {item.content_uz}
                                </div>
                                <div
                                    onClick={() => route.push(`/edit-top/${item.id}`)}
                                    className="p-1.5 bg-blue rounded-md cursor-pointer text-white text-lg"
                                >
                                    <BiPencil/>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default Tops;
