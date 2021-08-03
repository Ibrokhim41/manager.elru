import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { Squash as Hamburger } from "hamburger-react";
import "./style.css";

const Chat = () => {
  const [showMenu, setShowMenu] = useState(false);

  const users = [
    "Абдуманон Фарходов",
    "Фарходов Абдуманон",
    "Фарход Фарходов",
    "Абдуманон Фарходов",
    "Фарходов Абдуманон",
    "Фарход Фарходов",
    "Абдуманон Фарходов",
    "Фарходов Абдуманон",
    "Фарход Фарходов",
    "Фарходов Абдуманон",
    "Фарход Фарходов",
    "Абдуманон Фарходов",
    "Фарходов Абдуманон",
    "Фарход Фарходов",
  ];

  const [activeClass, setActiveClass] = useState(0);

  return (
    <div className="h-screen overflow-hidden">
      {/* top */}
      <div className="border-b-2 border-grey-border h-32 bg-gradient-to-r from-grey-bg to-white">
        <div className="container mx-auto grid grid-cols-12">
          {/* left */}
          <div className="col-span-7 sm:col-span-6 md:col-span-3 h-32 flex items-center justify-center pt-14 border-r border-grey-border">
            <div className="text-grey-dark ctext-lg">Чат с клиентами</div>
            <div
              onClick={() => setShowMenu(!showMenu)}
              className="2xl:hidden cursor-pointer"
            >
              <Hamburger size={24} color={"#01BEDE"} toggled={showMenu} />
            </div>
          </div>
          {/* right */}
          <div className="col-span-5 sm:col-span-6 md:col-span-9 h-32 flex pl-4 items-center border-l border-b-2 pt-14 border-grey-border bg-white">
            <div
              style={{
                backgroundImage: `url('https://data.whicdn.com/images/337666259/original.jpg')`,
              }}
              className="hidden sm:block bg-cover bg-center bg-blue w-14 h-14 rounded-full"
            ></div>
            <div className="text-black ctext-lg font-bold ml-4">
              Абдуманон Фарходов
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="bg-gradient-to-r from-grey-bg to-white">
        <div className="2xl:container mx-auto grid grid-cols-12">
          {/* left */}
          <div className={`transform transition-all ${showMenu ? 'translate-x-0' : '-translate-x-full 2xl:translate-x-0'} absolute 2xl:static left-0 flex w-11/12 sm:w-1/2 md:w-1/3 2xl:w-full 2xl:col-span-3 bg-grey-bg border-r border-grey-border`}>
            <div className="overflow-scroll h-screen w-full pb-10">
              {users.map((name, i) => {
                return (
                  <div
                    onClick={() => setActiveClass(i)}
                    key={i}
                    className={`${
                      activeClass === i ? "bg-blue text-white" : ""
                    } flex items-center justify-between p-3.5 cursor-pointer hover:bg-blue hover:text-white group border-l border-b border-grey-border`}
                  >
                    <div
                      style={{
                        backgroundImage: `url('https://data.whicdn.com/images/337666259/original.jpg')`,
                      }}
                      className="bg-cover bg-center bg-blue w-14 h-14 rounded-full"
                    ></div>
                    <div>{name}</div>
                    <span
                      className={`${
                        activeClass === i
                          ? "bg-white text-blue"
                          : "bg-blue text-white"
                      } w-7 h-7 group-hover:bg-white group-hover:text-blue ctext-xs font-bold rounded-full flex items-center justify-center`}
                    >
                      {i + Math.floor(Math.random() * 100)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* right */}
          <div className="col-span-12 2xl:col-span-9 h-screen pb-44 pl-4 border-l border-grey-border bg-white overflow-scroll">
            {/* user */}
            <div className="grid grid-cols-12">
              <div className="col-start-1 sm:col-start-5 xl:col-start-7 col-end-13 flex flex-col py-4">
                <div className="flex">
                  {/* message */}
                  <div className="bg-grey-light text-grey-dark ctext-base font-medium rounded-md p-3 mr-4">
                    Здравствуйте, я беспокою вас по поводу доставки моей
                    книги.Можно будет заказать ее как подарок моей бабушке?
                    Просто она живет в Самарканде
                  </div>
                  {/* profile-img */}
                  <div
                    style={{
                      backgroundImage: `url('https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg')`,
                    }}
                    className="chat-profile-img bg-no-repeat bg-center bg-cover rounded-full"
                  ></div>
                </div>
                <div className="w-full text-left text-grey-dark text-sm font-medium mt-2">
                  25.01.2021 21:00
                </div>
              </div>
            </div>
            {/* admin */}
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-8 xl:col-span-6 flex flex-col py-4">
                <div className="flex">
                  {/* profile-img */}
                  <div
                    style={{
                      backgroundImage: `url('http://www.venmond.com/demo/vendroid/img/avatar/big.jpg')`,
                    }}
                    className="chat-profile-img bg-no-repeat bg-center bg-cover rounded-full"
                  ></div>
                  {/* message */}
                  <div className="bg-blue text-white ctext-base font-medium rounded-md p-3 ml-4">
                    Здравствуйте, я беспокою вас по поводу доставки моей
                    книги.Можно будет заказать ее как подарок моей бабушке?
                    Просто она живет в Самарканде
                  </div>
                </div>
                <div className="w-full text-right text-grey-dark text-sm font-medium mt-2">
                  25.01.2021 21:00
                </div>
              </div>
            </div>
            {/* user */}
            <div className="grid grid-cols-12">
              <div className="col-start-1 sm:col-start-5 xl:col-start-7 col-end-13 flex flex-col py-4">
                <div className="flex">
                  {/* message */}
                  <div className="bg-grey-light text-grey-dark ctext-base font-medium rounded-md p-3 mr-4">
                    Здравствуйте, я беспокою вас по поводу доставки моей
                    книги.Можно будет заказать ее как подарок моей бабушке?
                    Просто она живет в Самарканде
                  </div>
                  {/* profile-img */}
                  <div
                    style={{
                      backgroundImage: `url('https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg')`,
                    }}
                    className="chat-profile-img bg-no-repeat bg-center bg-cover rounded-full"
                  ></div>
                </div>
                <div className="w-full text-left text-grey-dark text-sm font-medium mt-2">
                  25.01.2021 21:00
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12">
              <div className="col-start-1 sm:col-start-5 xl:col-start-7 col-end-13 flex flex-col py-4">
                <div className="flex">
                  {/* message */}
                  <div className="bg-grey-light text-grey-dark ctext-base font-medium rounded-md p-3 mr-4">
                    Здравствуйте, я беспокою вас по поводу доставки моей
                    книги.Можно будет заказать ее как подарок моей бабушке?
                    Просто она живет в Самарканде
                  </div>
                  {/* profile-img */}
                  <div
                    style={{
                      backgroundImage: `url('https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg')`,
                    }}
                    className="chat-profile-img bg-no-repeat bg-center bg-cover rounded-full"
                  ></div>
                </div>
                <div className="w-full text-left text-grey-dark text-sm font-medium mt-2">
                  25.01.2021 21:00
                </div>
              </div>
            </div>

            {/* input */}
            <div className="relative mt-5 mr-5 sm:mt-10">
              <input
                type="text"
                placeholder="Ваше сообщение..."
                className="p-1.5 sm:p-2.5 bg-grey-light border border-grey-border rounded-md text-grey-dark ctext-base font-medium w-full focus:outline-none focus:border-blue"
              />
              <button className="absolute top-0 right-0 h-full flex items-center px-5 bg-blue rounded-r-md">
                <AiOutlineSend className="text-white text-xl sm:text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
