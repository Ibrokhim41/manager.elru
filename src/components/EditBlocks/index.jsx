import { MdArrowForward } from "react-icons/md";
import { useHistory } from "react-router-dom";

const EditBlocks = () => {

    const route = useHistory()

  return (
    <div className="container mx-auto mb-10">
      <div className="pt-24"></div>
      <div className="text-grey-dark ctext-lg font-medium mb-6">
        Блоки на сайте
      </div>
      <div className="text-black ctext-lg font-bold mb-6">
        Главная страница:
      </div>
      {/*  */}
      <div 
      onClick={() => route.push('/main-page-banners')}
      className="w-full text-black ctext-base md:w-9/12 flex justify-between items-center border-t border-b border-grey-border  py-2.5 cursor-pointer hover:text-blue">
        Баннеры главного экрана
        <MdArrowForward className="text-blue text-lg sm:text-xl ml-2" />
      </div>
      <div 
      onClick={() => route.push('/selections')}
      className="w-full text-black ctext-base md:w-9/12 flex justify-between items-center border-t border-b border-grey-border  py-2.5 cursor-pointer hover:text-blue">
        Подборки
        <MdArrowForward className="text-blue text-lg sm:text-xl ml-2" />
      </div>
      <div 
      onClick={() => route.push('/tops')}
      className="w-full text-black ctext-base md:w-9/12 flex justify-between items-center border-t border-b border-grey-border  py-2.5 cursor-pointer hover:text-blue">
        Топ - 100 (главная и страница “Топ - 100”)
        <MdArrowForward className="text-blue text-lg sm:text-xl ml-2" />
      </div>
      <div 
      onClick={() => route.push('/book-of-month')}
      className="w-full text-black ctext-base md:w-9/12 flex justify-between items-center border-t border-b border-grey-border  py-2.5 cursor-pointer hover:text-blue">
        Книга месяца
        <MdArrowForward className="text-blue text-lg sm:text-xl ml-2" />
      </div>
      <div 
      onClick={() => route.push('/news')}
      className="w-full text-black ctext-base md:w-9/12 flex justify-between items-center border-t border-b border-grey-border  py-2.5 cursor-pointer hover:text-blue">
        Новости
        <MdArrowForward className="text-blue text-lg sm:text-xl ml-2" />
      </div>
      <div 
      onClick={() => route.push('/social-links')}
      className="w-full text-black ctext-base md:w-9/12 flex justify-between items-center border-t border-b border-grey-border  py-2.5 cursor-pointer hover:text-blue">
        Социальные сети
        <MdArrowForward className="text-blue text-lg sm:text-xl ml-2" />
      </div>

      {/*  */}
      <div className="text-black ctext-lg font-bold mt-6 mb-3">Акции и скидки:</div>
      <div 
      onClick={() => route.push('/discounts-banners')}
      className="w-full text-black ctext-base md:w-9/12 flex justify-between items-center border-t border-b border-grey-border  py-2.5 cursor-pointer hover:text-blue">
        Баннеры
        <MdArrowForward className="text-blue text-lg sm:text-xl ml-2" />
      </div>
    </div>
  );
};

export default EditBlocks;
