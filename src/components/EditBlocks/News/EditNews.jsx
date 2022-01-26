import { VscChevronLeft } from "react-icons/vsc";
import { IoMdImages } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditNews = () => {
  const route = useHistory();
  // eslint-disable-next-line
  const params = useParams()
  const [newsDetail, setNewsDetail] = useState({})

  const imageUpload = (e, o) => {
    const file = e.target.files[0]
    let formData = new FormData()
    formData.append('image', file, file.name)
    // setNewsDetail({...newsDetail, image: formData})
    o === 0 ? setNewsDetail({ ...newsDetail, image: formData })
      : o === 1 ? setNewsDetail({ ...newsDetail, image1: formData })
        : setNewsDetail({ ...newsDetail, image2: formData })
  }
   

  useEffect(() => {
    
  }, [])


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
        <label htmlFor="title_ru" className="text-grey-dark ctext-base ">
          Заголовок <span className={`text-blue text-sm`}>ru</span>
        </label>
        <input
          onChange={(e) => setNewsDetail({ ...newsDetail, title_ru: e.target.value })}
          placeholder={`${newsDetail.title_ru ? newsDetail.title_ru : 'Введите заголовок... '}`}
          id="title_ru"
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
          onChange={(e) => setNewsDetail({ ...newsDetail, content_ru: e.target.value })}
          placeholder={`${newsDetail.content_ru ? newsDetail.content_ru : "Введите текст..."}`}
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
          onChange={(e) => setNewsDetail({ ...newsDetail, title_uz: e.target.value })}
          placeholder={`${newsDetail.title_uz ? newsDetail.title_uz : 'Sarlavha kiriting... '}`}
          id="title_uz"
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
          onChange={(e) => setNewsDetail({ ...newsDetail, content_uz: e.target.value })}
          placeholder={`${newsDetail.content_uz ? newsDetail.content_uz : 'Matn kiriting... '}`}
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
          onChange={(e) => setNewsDetail({ ...newsDetail, title_en: e.target.value })}
          placeholder={`${newsDetail.title_en ? newsDetail.title_en : 'Enter a title...'}`}
          id="title_en"
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
          onChange={(e) => setNewsDetail({ ...newsDetail, content_en: e.target.value })}
          placeholder={`${newsDetail.content_en ? newsDetail.content_en : 'Enter a text...'}`}
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
              style={{ backgroundImage: `url(${newsDetail.image})` }}
              className={`bg-cover bg-center cursor-pointer border border-grey-border bg-white rounded-md w-60 h-28 flex flex-col justify-center items-center`}>
              {newsDetail.image === null && <IoMdImages className="text-4xl text-blue" />}
              <div className={`${newsDetail.image !== null && 'hidden'} text-grey-dark ctext-base`}>Загрузить фото</div>
            </div>
          </label>
          <input
            onChange={e => imageUpload(e, 0)}
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
            onChange={e => imageUpload(e, 1)}
            // onChange={(e) => setNewsDetail({ ...newsDetail, image1: e.target.files[0] })}
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
            onChange={e => imageUpload(e, 2)}
            // onChange={(e) => setNewsDetail({ ...newsDetail, image2: e.target.files[0] })}
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
      <button
        className="text-white ctext-xs w-full md:w-9/12 bg-blue border border-grey-border rounded-md focus:outline-none py-2 px-4 mt-8">
        Сохранить
      </button>
    </div>
  );
};

export default EditNews;
