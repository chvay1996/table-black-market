import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../reducers/userReducer";

const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <>
      <Nav>
        <NavMenu>
          <div style={{ marginRight: "50px", marginTop: "10px" }}>
            <NavLink style={{ fontSize: "30px", background: "blue" }} to="/">
              Главная
            </NavLink>
          </div>
          <div style={{ display: "contents" }}>
            <NavLink to="/two">T 2</NavLink>
            <NavLink to="/three">T 3</NavLink>
            <>
              <NavLink to="/tfour">T 4.0</NavLink>
              <NavLink to="/fourOne">T 4.1</NavLink>
            </>
            <>
              <NavLink to="/tfive">Т 5.0</NavLink>
              <NavLink to="/fiveOne">Т 5.1</NavLink>
            </>
            <>
              <NavLink to="/tsix">T 6.0</NavLink>
              <NavLink to="/sixOne">T 6.1</NavLink>
            </>
            <>
              <NavLink to="/seven">T 7.0</NavLink>
              <NavLink to="/sevenOne">T 7.1</NavLink>
            </>
            <>
              <NavLink to="/eight">T 8.0</NavLink>
              <NavLink to="/eightOne">T 8.1</NavLink>
            </>
            <NavLink to="/contact">Контакты</NavLink>
          </div>
          {!isAuth && (
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <NavLink
                style={{
                  fontSize: "30px",
                  background: "blue",
                  marginLeft: "100px",
                }}
                to="/signIn"
              >
                Регистрация
              </NavLink>
              <NavLink
                style={{
                  fontSize: "30px",
                  background: "blue",
                  marginLeft: "20px",
                }}
                to="/signUp"
              >
                Войти
              </NavLink>
            </div>
          )}
          {isAuth && (
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                alignItems: "center",
              }}
              onClick={() => dispatch(logout())}
            >
              <NavLink
                style={{
                  fontSize: "30px",
                  background: "blue",
                  marginLeft: "100px",
                }}
                to="/signUp"
              >
                Выход
              </NavLink>
              <p
                style={{
                  marginLeft: "20px",
                  color: "white",
                  fontSize: "15px",
                  margin: "0 0 0 20px",
                }}
              >
                Приветсвую Тебя{" "}
                <p style={{ fontSize: "20px", margin: " 0", color: "#39ff36" }}>
                  Игрок
                </p>
              </p>
            </div>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
