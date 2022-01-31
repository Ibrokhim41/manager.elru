import React from 'react';
import {VscChevronLeft} from "react-icons/vsc";
import {IoMdImages} from "react-icons/io";
import {useHistory} from "react-router-dom";
import news from "../../../store/news";
import {observer} from "mobx-react-lite";

const AddNews = observer(() => {
    const route = useHistory();


    return (<div className="container mx-auto mb-10 overflow-x-scroll hide-scroll">
        <div className="pt-24"></div>
        <div
            onClick={() => {
                route.push("/news");
            }}
            className="inline-flex items-center text-blue ctext-lg  cursor-pointer"
        >
            <VscChevronLeft className="text-2xl"/> Назад
        </div>

        {/* ru */}
        {/* title */}
        <div className="text-grey-dark ctext-lg font-medium mt-6 mb-5 flex flex-col sm:flex-row sm:justify-between">
            Добавить статью
        </div>

        {/* <form onSubmit={onSubmit}> */}
        {/*  title */}
        <div className="flex flex-col md:justify-start mt-4">
            <label htmlFor="title_ru" className="text-grey-dark ctext-base ">
                Заголовок <span className={`text-blue text-sm`}>ru</span>
            </label>
            <input
                onChange={(e) => news.new_data.title_ru = e.target.value}
                value={news.new_data.title_ru || ""}
                placeholder={'Введите заголовок... '}
                id="title_ru"
                type="text"
                className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
            />
        </div>

        {/* info */}
        <div className="flex flex-col md:justify-start mt-4">
            <label htmlFor="info_ru" className="text-grey-dark ctext-base ">
                Info <span className={`text-blue text-sm`}>ru</span>
            </label>
            <input
                onChange={(e) => news.new_data.info_ru = e.target.value}
                value={news.new_data.info_ru || ""}
                placeholder={'Введите заголовок... '}
                id="info_ru"
                type="text"
                className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
            />
        </div>


        {/*  text */}
        <div className="flex flex-col md:justify-start mt-4">
            <label htmlFor="contnet_ru" className="text-grey-dark ctext-base ">
                Текст <span className={`text-blue text-sm`}>ru</span>
            </label>
            <textarea
                onChange={(e) => news.new_data.content_ru = e.target.value}
                value={news.new_data.content_ru || ""}
                placeholder="Введите текст..."
                id="contnet_ru"
                rows="4"
                type="text"
                className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
            />
        </div>

        {/* uz */}
        {/*  title */}
        <div className="flex flex-col md:justify-start mt-6">
            <label htmlFor="title_uz" className="text-grey-dark ctext-base ">
                Sarlavha <span className={`text-blue text-sm`}>uz</span>
            </label>
            <input
                onChange={(e) => news.new_data.title_uz = e.target.value}
                value={news.new_data.title_uz || ""}
                placeholder='Sarlavha kiriting... '
                id="title_uz"
                type="text"
                className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
            />
        </div>

        {/* info */}

        <div className="flex flex-col md:justify-start mt-4">
            <label htmlFor="info_uz" className="text-grey-dark ctext-base ">
                Info <span className={`text-blue text-sm`}>uz</span>
            </label>
            <input
                onChange={(e) => news.new_data.info_uz = e.target.value}
                value={news.new_data.info_uz || ""}
                placeholder={'Введите заголовок... '}
                id="info_uz"
                type="text"
                className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
            />
        </div>


        {/*  text */}
        <div className="flex flex-col md:justify-start mt-4">
            <label htmlFor="content_uz" className="text-grey-dark ctext-base ">
                Matn <span className={`text-blue text-sm`}>uz</span>
            </label>
            <textarea
                onChange={(e) => news.new_data.content_uz = e.target.value}
                value={news.new_data.content_uz || ""}
                placeholder='Matn kiriting... '
                id="content_uz"
                rows="4"
                type="text"
                className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
            />
        </div>

        {/* en */}
        {/*  title */}
        <div className="flex flex-col md:justify-start mt-6">
            <label htmlFor="title_en" className="text-grey-dark ctext-base ">
                Title <span className={`text-blue text-sm`}>en</span>
            </label>
            <input
                onChange={(e) => news.new_data.title_en = e.target.value}
                value={news.new_data.title_en || ""}
                placeholder='Enter a title...'
                id="title_en"
                type="text"
                className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
            />
        </div>

        {/* info */}

        <div className="flex flex-col md:justify-start mt-4">
            <label htmlFor="info_en" className="text-grey-dark ctext-base ">
                Info <span className={`text-blue text-sm`}>en</span>
            </label>
            <input
                onChange={(e) => news.new_data.info_en = e.target.value}
                value={news.new_data.info_en || ""}
                placeholder={'Введите заголовок... '}
                id="info_en"
                type="text"
                className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
            />
        </div>


        {/*  text */}
        <div className="flex flex-col md:justify-start mt-4">
            <label htmlFor="content_en" className="text-grey-dark ctext-base ">
                Text <span className={`text-blue text-sm`}>en</span>
            </label>
            <textarea
                onChange={(e) => news.new_data.content_en = e.target.value}
                value={news.new_data.content_en || ""}
                placeholder='Enter a text...'
                id="content_en"
                rows="4"
                type="text"
                className="text-grey-dark ctext-xs w-full md:w-9/12 bg-white border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-1"
            />
        </div>

        {/*  photos */}
        <div className="flex flex-wrap">
            <div className="w-64 mt-4">
                <label htmlFor="book_image3">
                    <div
                        className="cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center">
                        {news.new_data.image ? (<img
                            src={URL.createObjectURL(news.new_data.image)}
                            className="w-full h-full object-cover"
                            alt="banner"
                        />) : (<>
                            <IoMdImages className="text-4xl text-blue"/>
                            <div className="text-grey-dark ctext-base">Загрузить фото</div>
                        </>)}
                    </div>
                </label>
                <input
                    onChange={(e) => news.new_data.image = e.target.files[0]}
                    type="file"
                    id="book_image3"
                    className="hidden"/>
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
                        className="cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center">
                        {news.new_data.image1 ? (<img
                            src={URL.createObjectURL(news.new_data.image1)}
                            className="w-full h-full object-cover"
                            alt="banner"
                        />) : (<>
                            <IoMdImages className="text-4xl text-blue"/>
                            <div className="text-grey-dark ctext-base">Загрузить фото</div>
                        </>)}
                    </div>
                </label>
                <input
                    onChange={(e) => news.new_data.image1 = e.target.files[0]}
                    type="file"
                    id="book_image4"
                    className="hidden"/>
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
                        className="cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center">
                        {news.new_data.image2 ? (<img
                            src={URL.createObjectURL(news.new_data.image2)}
                            className="w-full h-full object-cover"
                            alt="banner"
                        />) : (<>
                            <IoMdImages className="text-4xl text-blue"/>
                            <div className="text-grey-dark ctext-base">Загрузить фото</div>
                        </>)}
                    </div>
                </label>
                <input
                    onChange={(e) => news.new_data.image2 = e.target.files[0]}
                    type="file"
                    id="book_image5"
                    className="hidden"/>
                <div className="text-grey-dark ctext-base mt-1 font-bold">
                    Второе фото статьи
                </div>
                <div className="text-grey-dark ctext-base mt-1 font-medium">
                    Минимальный размер: 777х544
                </div>
            </div>
        </div>

        {/*  */}
        <button
            // type="submit"
            onClick={() => news.create_news()}
            className="text-white ctext-xs w-full md:w-9/12 bg-blue border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-8">
            Сохранить
        </button>
        {/* </form > */}
    </div>);
})

export default AddNews;
