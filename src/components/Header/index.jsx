import "./style.css";
import elru_logo from "../../assets/images/logo_elru.svg";
import {AiOutlineAppstore} from "react-icons/ai"
import {FaUsers} from "react-icons/fa"
import { FiBox } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { BiExit, BiUserCircle, BiEdit } from "react-icons/bi";
import { Squash as Hamburger } from "hamburger-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Exit from "components/Modals/Exit";
import Delete from "components/Modals/Delete";

const Header = () => {
  const login = useSelector((state) => state.common.login);
  const [showMenu, setShowMenu] = useState(false);

  const [exit, setExit] = useState();
  const [remove, setRemove] = useState();

  const route = useHistory();
  const location = useLocation();

  return (
    <div
      className={`fixed top-0 z-40 ${
        login ? "block" : "hidden"
      } shadow-md w-full container-full bg-white`}
    >
      <div className="container mx-auto flex justify-between items-center xl:grid grid-cols-12">
        {/* logo */}
        <div className="z-50 col-span-1 flex items-center justify-start pl-1 cursor-pointer py-4">
          <img src={elru_logo} alt="logo" />
        </div>
        {/* menu */}
        <div className="col-span-11 hidden xl:grid grid-cols-7 ml-10">
          <div className="col-span-6 2xl:col-span-5 flex">
            <div
              onClick={() => route.push("/orders")}
              className={`${
                location.pathname === "/orders" && "bg-blue"
              } px-4 cursor-pointer hover:bg-blue group flex items-center justify-center py-4 flex-grow`}
            >
              <FiBox
                className={`${
                  location.pathname === "/orders" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/orders"
                    ? "text-white"
                    : "text-grey-dark"
                }  ctext-base group-hover:text-white font-bold`}
              >
                Все товары
              </div>
            </div>
            <div
              onClick={() => route.push("/categories")}
              className={`${
                location.pathname === "/categories" && "header-active"
              } px-4 cursor-pointer hover:bg-blue group flex items-center justify-center py-4 flex-grow`}
            >
              <AiOutlineAppstore
                className={`${
                  location.pathname === "/categories" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/categories"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Категории
              </div>
            </div>
            <div
              onClick={() => route.push("/authors")}
              className={`${
                location.pathname === "/authors" && "header-active"
              } px-4 cursor-pointer hover:bg-blue group flex items-center justify-center py-4 flex-grow`}
            >
              <BiUserCircle
                className={`${
                  location.pathname === "/authors" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/authors"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Авторы
              </div>
            </div>
            <div
              onClick={() => route.push("/edit-blocks")}
              className={`${
                location.pathname === "/edit-blocks" && "header-active"
              } px-4 cursor-pointer hover:bg-blue group flex items-center justify-center py-4 flex-grow`}
            >
              <BiEdit
                className={`${
                  location.pathname === "/edit-blocks" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/edit-blocks"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Редактирование блоков
              </div>
            </div>
            <div
              onClick={() => route.push("/users")}
              className={`${
                location.pathname === "/users" && "header-active"
              } px-4 cursor-pointer hover:bg-blue group flex items-center justify-center py-4 flex-grow`}
            >
              <FaUsers
                className={`${
                  location.pathname === "/users" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/users"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Пользователи
              </div>
            </div>
          </div>
          <div className="col-span-1 2xl:col-span-2 flex justify-end">
            <div
              onClick={() => setRemove(true)}
              className="flex items-center h-full text-grey-dark font-bold ctext-base cursor-pointer"
            >
              Чат
              <BsChatDots className="text-2xl ml-2" />
            </div>
            <div
              onClick={() => setExit(true)}
              className="flex items-center h-full ml-4 text-grey-dark ctext-base font-bold cursor-pointer"
            >
              Выйти
              <BiExit className="text-2xl ml-2" />
            </div>
          </div>
        </div>
        {/* mobile-menu */}
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="xl:hidden cursor-pointer"
        >
          <Hamburger size={24} color={"#3E4549"} toggled={showMenu} />
        </div>
        {/* mob-menu */}
        <div
          className={`fixed top-0 ${
            showMenu ? "left-0" : "-left-full"
          } transition-all bg-white h-screen z-40 pt-14 shadow-xl`}
        >
          <div className="flex flex-col justify-around">
            <div
              onClick={() => {
                setShowMenu(false);
                route.push("/orders");
              }}
              className={`${
                location.pathname === "/orders" && "bg-blue"
              } px-6 cursor-pointer hover:bg-blue group flex items-center py-4 flex-grow`}
            >
              <FiBox
                className={`${
                  location.pathname === "/orders" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/orders"
                    ? "text-white"
                    : "text-grey-dark"
                }  ctext-base group-hover:text-white font-bold`}
              >
                Все товары
              </div>
            </div>
            <div
              onClick={() => {
                setShowMenu(false);
                route.push("/categories");
              }}
              className={`${
                location.pathname === "/categories" && "header-active"
              } px-6 cursor-pointer hover:bg-blue group flex items-center py-4 flex-grow`}
            >
              <AiOutlineAppstore
                className={`${
                  location.pathname === "/categories" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/categories"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Категории
              </div>
            </div>
            <div
              onClick={() => {
                setShowMenu(false);
                route.push("/authors");
              }}
              className={`${
                location.pathname === "/authors" && "header-active"
              } px-6 cursor-pointer hover:bg-blue group flex items-center py-4 flex-grow`}
            >
              <BiUserCircle
                className={`${
                  location.pathname === "/authors" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/authors"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Авторы
              </div>
            </div>
            <div
              onClick={() => {
                setShowMenu(false);
                route.push("/edit-blocks");
              }}
              className={`${
                location.pathname === "/edit-blocks" && "header-active"
              } px-6 cursor-pointer hover:bg-blue group flex items-center py-4 flex-grow`}
            >
              <BiEdit
                className={`${
                  location.pathname === "/edit-blocks" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/edit-blocks"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Редактирование блоков
              </div>
            </div>
            <div
              onClick={() => {
                setShowMenu(false);
                route.push("/users");
              }}
              className={`${
                location.pathname === "/users" && "header-active"
              } px-6 cursor-pointer hover:bg-blue group flex items-center py-4 flex-grow`}
            >
              <FaUsers
                className={`${
                  location.pathname === "/users" ? "text-white" : "text-blue"
                } text-2xl mr-2 group-hover:text-white`}
              />
              <div
                className={`${
                  location.pathname === "/users"
                    ? "text-white"
                    : "text-grey-dark"
                } ctext-base group-hover:text-white font-bold`}
              >
                Пользователи
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col">
            <div
              onClick={() => setRemove(true)}
              className="flex items-center h-full px-6 mt-6 text-grey-dark font-bold ctext-base cursor-pointer"
            >
              Чат
              <BsChatDots className="text-2xl ml-2" />
            </div>
            <div
              onClick={() => setExit(true)}
              className="flex items-center h-full px-6 mt-6 text-grey-dark ctext-base font-bold cursor-pointer"
            >
              Выйти
              <BiExit className="text-2xl ml-2" />
            </div>
          </div>
        </div>
      </div>
      <Exit exit={exit} setExit={setExit} />
      <Delete remove={remove} setRemove={setRemove} />
    </div>
  );
};

export default Header;
