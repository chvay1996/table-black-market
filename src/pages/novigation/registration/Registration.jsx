import React, { useState } from "react";
import "./registration.css";
import Input from "../utils/input/Input";
import { registration } from "../actions/userReg";

const Registration = () => {
  const [Login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="registration">
        <div className="registration__header">Регистрация</div>
        <Input
          value={Login}
          setValue={setLogin}
          type="text"
          placeholder="Введите Login..."
        />
        <Input
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Введите пароль..."
        />
        <button
          className="registration__btn"
          onClick={() => registration(Login, password)}
        >
          Войти
        </button>
      </div>
    </>
  );
};

export default Registration;
