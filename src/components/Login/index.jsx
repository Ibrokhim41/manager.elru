import { useHistory } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import Logo from "../../assets/images/logo_elru.svg";
import { api_url } from '../../store/api_ulr';
import data from '../../store/data'

const Login = () => {
  const route = useHistory();

  const [loginPassword, setLoginPassword] = useState({
    username: '',
    password: ''
  })
  const [err, setErr] = useState(false)
  const signIn = () => {
    axios.post(`${api_url}/api/token/`, loginPassword)
      .then(data => {
        sessionStorage.setItem('token', data.data.access)
        sessionStorage.setItem('refresh_token', data.data.access)
      })
      .then(() => {
        route.push("/orders");
        data.setLoged()
      })
      .catch(err => {
        setErr(true)
      })
  }


  return (
    <div className="z-50 fixed w-screen h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex items-end">
        <img src={Logo} alt="logo" className="w-52 sm:w-60" />
        <div className="text-grey-dark ctext-2xl ml-2">Manager</div>
      </div>
      <div className="px-4 sm:px-0 w-full sm:w-2/3 lg:w-2/4 grid grid-cols-12 gap-y-4 md:gap-8 mt-10">
        <div className="col-span-12 md:col-span-6">
          <div className="text-grey-dark ctext-base font-medium">
            Логин<span className="text-red">*</span>
          </div>
          <input
            onChange={(e) => setLoginPassword({ ...loginPassword, username: e.target.value })}
            type="text"
            placeholder="Введите логин"
            className={`border ${err ? 'border-red' : 'border-grey-border'} rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2`}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="text-grey-dark ctext-base font-medium">
            Пароль<span className="text-red">*</span>
          </div>
          <input
            onChange={(e) => setLoginPassword({ ...loginPassword, password: e.target.value })}
            type="password"
            placeholder="Введите пароль"
            className={`border ${err ? 'border-red' : 'border-grey-border'} rounded-md p-2.5 md:p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2`}
          />
        </div>
      </div>
      <button
        onClick={signIn}
        className="bg-blue rounded-md text-white ctetx-base font-bold py-4 w-11/12 sm:w-2/3 lg:w-2/4 mt-10"
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
