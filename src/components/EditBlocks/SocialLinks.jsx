import {VscChevronLeft} from "react-icons/vsc";
import {useHistory} from "react-router-dom";
import network from "../../store/network"
import {observer} from "mobx-react-lite";

const SocialLinks = observer(() => {
    const route = useHistory();

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
                Социальные сети
            </div>

            {/*  socail-links */}
            <div className="flex flex-col sm:flex-row sm:items-center mt-4">
                <label htmlFor="top_name" className="w-full sm:w-2/12 md:w-1/12 text-grey-dark ctext-base ">
                    Instagram:
                </label>
                <input
                    id="top_name"
                    type="text"
                    placeholder="Введите..."
                    onChange={e => network.new_data.instagram = e.target.value}
                    value={network.new_data.instagram || ""}
                    className="text-grey-dark ctext-xs w-full sm:w-7/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 sm:ml-2"
                />
            </div>
            {/* 2 */}
            <div className="flex flex-col sm:flex-row sm:items-center mt-4">
                <label htmlFor="top_name" className="sm:w-2/12 md:w-1/12 text-grey-dark ctext-base ">
                    Telegram:
                </label>
                <input
                    id="top_name"
                    type="text"
                    placeholder="Введите..."
                    value={network.new_data.telegram || ""}
                    onChange={e => network.new_data.telegram = e.target.value}
                    className="text-grey-dark ctext-xs w-full sm:w-7/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 sm:ml-2"
                />
            </div>
            {/* 3 */}
            <div className="flex flex-col sm:flex-row sm:items-center mt-4">
                <label htmlFor="top_name" className="sm:w-2/12 md:w-1/12 text-grey-dark ctext-base ">
                    Facebook:
                </label>
                <input
                    id="top_name"
                    type="text"
                    placeholder="Введите..."
                    value={network.new_data.facebook || ""}
                    onChange={e => network.new_data.facebook = e.target.value}
                    className="text-grey-dark ctext-xs w-full sm:w-7/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 sm:ml-2"
                />
            </div>

            {/*  */}
            <button
                onClick={() => network.create_network()}
                className="text-white ctext-xs w-full sm:w-8/12 bg-blue border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-4">
                Сохранить
            </button>
        </div>
    );
});

export default SocialLinks;
