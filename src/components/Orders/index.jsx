import "./style.css";
import { useEffect, useState } from "react";
import { BiPencil, BiUpArrowCircle } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { MdContentCopy, MdBlock } from "react-icons/md";
// import { BiBuildings } from "react-icons/bi";
import Sidebar from "./Sidebar";
import JsonData from "../../MOCK_DATA.json";
// import ReactPaginate from "react-paginate";
// import { VscChevronRight } from "react-icons/vsc";
// import { VscChevronLeft } from "react-icons/vsc";
import { BiFilterAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/common";
import animatedScrollTo from "animated-scroll-to";
import { useWindowScrollDimensions } from "hooks/WindowSroll";
// import OrderInside from "components/OrderInside";

const Orders = () => {
  const dispatch = useDispatch();

  const [items, setItems] = useState(JsonData);
  const [itemsNav, setItemsNav] = useState(true);
  // const [pageNumber, setPageNumber] = useState(0);

  // const forPerPage = 9;
  // const pagesVisited = pageNumber * forPerPage;
  const wScrollY = useWindowScrollDimensions();

  useEffect(() => {
    setItems(JsonData.slice(0,75));
    animatedScrollTo(0);
  }, []);

  // screenLeft: 0
  // screenTop: 0
  // screenX: 0
  // screenY: 0
  // scroll: ƒ scroll()
  // scrollBy: ƒ scrollBy()
  // scrollTo: ƒ scrollTo()
  // scrollX: 0
  // scrollY: 0

  const displayItems = items.map((item, i) => {
    return (
      <div key={i} className="flex">
        <div className="w-1/18 border border-grey-border flex items-center justify-center py-1">
          <input type="checkbox" className="cursor-pointer checked:bg-blue" />
        </div>
        <div className="w-1/18 border border-grey-border flex items-center justify-center py-1">
          <img src={item.image} alt="book_image" />
        </div>
        <div className="w-4/18 border border-grey-border flex items-center pl-2 py-1">
          {item.name}
        </div>
        <div className="w-4/18 border border-grey-border flex items-center pl-2 py-1 text-grey-black ctext-xs font-medium">
          {"Автор" + item.name}
        </div>
        <div className="w-2/18 border border-grey-border flex items-center pl-2 py-1 text-grey-black ctext-xs font-medium">
          Бумажная, аудио,PDF
        </div>
        <div className="w-2/18 border border-grey-border flex items-center justify-center pl-2 py-1 text-grey-black ctext-xs font-medium">
          <div className="bg-green-light px-2 py-0.5 rounded-md text-black">
            562623
          </div>
        </div>
        <div className="w-2/18 border border-grey-border flex items-center justify-center pl-2 py-1 text-grey-black ctext-xs font-medium">
          <div className="bg-brown-light px-2 py-0.5 rounded-md text-black">
            9653
          </div>
        </div>
        <div className="w-2/18 border border-grey-border flex items-center justify-center pl-2 py-1">
          <div className="p-2 bg-blue rounded-md cursor-pointer text-white text-lg">
            <BiPencil />
          </div>
        </div>
      </div>
    );
  });

  // const displayUsers = users
  //   .slice(pagesVisited, pagesVisited + forPerPage)
  //   .map((user, i) => {
  //     return (
  //       <div
  //         key={i}
  //         onClick={() => setModal(true)}
  //         className={`grid grid-cols-5 ${i % 2 === 0 ? 'bg-grey-hover' : 'bg-grey-white'} p-2 cursor-pointer hover:bg-grey-light`}>
  //         <div className="col-span-1 flex flex-col">
  //           <div className="text-black">№ 102 908 999</div>
  //           <div className="flex text-grey">
  //             02.05.2021 <span className="ml-1">16:00</span>
  //           </div>
  //         </div>
  //         <div className="col-span-1 flex flex-col">
  //           <div className="text-black">
  //             {user.name}
  //             {/* Абдувахидов Анвар */}
  //           </div>
  //           <div className="text-grey-dark">+998 99 314 42 63 </div>
  //         </div>
  //         <div className="col-span-1 text-green">12 000 сум</div>
  //         <div className="col-span-1 text-blue">12 000 сум</div>
  //         <div className="col-span-1 text-grey-dark">52 000 сум</div>
  //       </div>
  //     );
  //   });

  // const pageCount = Math.ceil(users.length / forPerPage);
  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  //   // animateScrollTo(0, { speed: 200 });
  // };

  // const prev = (
  //   <div className="flex items-center ctext-xs">
  //     <VscChevronLeft className="ml-1 text-2xl" />
  //     Назад
  //   </div>
  // );
  // const next = (
  //   <div className="flex items-center ctext-xs">
  //     Вперед
  //     <VscChevronRight className="mr-1 text-2xl" />
  //   </div>
  // );

  return (
    <div
      className="overflow-scroll hide-scroll-y container no-padding mx-auto bg-grey-bg"
    >
      {/* navigate-to-top */}
      <BiUpArrowCircle
        onClick={() => animatedScrollTo(0)}
        className={`${
          wScrollY > 900 ? "-translate-y-5" : "translate-y-full"
        } fixed transform transition-all bottom-0 right-4 text-5xl text-white cursor-pointer bg-green-light rounded-full`}
      />
      {/* navigate items */}
      <div className="mt-24 mb-8 mx-4 flex text-grey-dark ctext-lg font-medium">
        <div
          onClick={() => setItemsNav(true)}
          className={`${
            itemsNav && "text-blue underline"
          } hover:text-blue hover:underline cursor-pointer`}
        >
          Товары на сайте
        </div>
        <div
          onClick={() => setItemsNav(false)}
          className={`${
            !itemsNav && "text-blue underline"
          } ml-4 hover:text-blue hover:underline cursor-pointer`}
        >
          Отключенные
        </div>
      </div>

      <div className="orders-table px-4">
        {/* <ReactPaginate
          previousLabel={prev}
          nextLabel={next}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="pagination col-span-9 w-full flex text-grey-dark font-medium"
          activeClassName="text-white bg-blue"
        /> */}
        {/* actions */}
        <div className="w-full flex xl:justify-end xl:w-9/12">
          <div className="flex">
            <button className="flex items-center bg-brown-dark rounded-md text-white ctext-base font-medium py-1 px-4">
              <MdBlock className="mr-1" />
              Отключить
            </button>
            <button className="flex items-center mx-4 bg-green rounded-md text-white ctext-base font-medium py-1 px-4">
              <MdContentCopy className="mr-1" />
              Копировать
            </button>
            <button className="flex items-center bg-red-dark rounded-md text-white ctext-base font-medium py-1 px-4">
              <BsTrash className="mr-1" />
              Удалить
            </button>
            <div
              onClick={() => dispatch(setFilter(true))}
              className="flex items-center xl:hidden ml-4 cursor-pointer bg-blue rounded-md text-white ctext-base font-medium py-1 px-4"
            >
              <BiFilterAlt className="mr-1" />
              Фильтр
            </div>
          </div>
        </div>
      </div>

      <div className="orders-table w-full xl:w-9/12 mt-4">
        {/* title */}
        <div className="flex">
          <div className="w-1/18 border border-grey-border flex items-center justify-center py-1">
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <div className="w-1/18 border border-grey-border flex items-center justify-center py-1 text-grey-dark ctext-sm font-medium">
            Фото
          </div>
          <div className="w-4/18 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
            Название
          </div>
          <div className="w-4/18 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
            Автор
          </div>
          <div className="w-2/18 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
            Форматы
          </div>
          <div className="w-2/18 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
            Кол - во бумажных
          </div>
          <div className="w-2/18 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
            Осталось бумажных
          </div>
          <div className="w-2/18 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
            Действие
          </div>
        </div>
        {/* content */}
        {/* {displayUsers} */}
        {displayItems}
        {/* footer */}
      </div>
      <Sidebar />

      {/* modal */}
      {/* <OrderInside modal={modal} setModal={setModal} /> */}
    </div>
  );
};

export default Orders;
