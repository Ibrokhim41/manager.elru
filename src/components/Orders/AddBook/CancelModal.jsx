import { IoMdClose } from "react-icons/io";

const CancleModal = ({ cancle, setCancle }) => {
  return (
    <div
      className={`z-50 fixed top-0 right-0 transform transition-all duration-300 overflow-hidden ${
        cancle ? "translate-x-0" : "-translate-x-full"
      } bg-white w-screen h-screen flex flex-col justify-center items-center`}
    >
      <div className="text-black ctext-xl font-bold text-center px-4">
        Вы уверены, что хотите отменить добавление?
      </div>
      <div className="text-grey-dark ctext-base font-medium my-4">Все внесенные вами данные удалятся</div>
      <div className="flex ">
        <button className="border border-grey-border rounded-md py-1 sm:py-3 px-10 sm:px-20 mr-2 hover:bg-blue hover:text-white">
          Да
        </button>
        <button className="border border-grey-border rounded-md py-1 sm:py-3 px-10 sm:px-20 ml-2 hover:bg-blue hover:text-white">
          Нет
        </button>
      </div>
      <IoMdClose
        onClick={() => setCancle(false)}
        className="absolute right-1 top-10 sm:right-10 text-4xl text-blue cursor-pointer"
      />
    </div>
  );
};

export default CancleModal;
