import React, { Fragment, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignIN from "./pages/novigation/registration/Registration.jsx";
import SignUp from "./pages/novigation/authorization/Login.jsx";
import Contact from "./pages/contact";
import Two from "./pages/two/two";
import THree from "./pages/three/three";
import Three2 from "./pages/three/three2";
import Three3 from "./pages/three/three3";
import Three4 from "./pages/three/three4";
import Three5 from "./pages/three/three5";
import TFour from "./pages/four/tfour";
import Tfour2 from "./pages/four/tfour2";
import Tfour3 from "./pages/four/tfour3";
import Tfour4 from "./pages/four/tfour4";
import Tfour5 from "./pages/four/tfour5";
import FourOne from "./pages/four/fourOne/fourOne";
import FourOne2 from "./pages/four/fourOne/fourOne2";
import FourOne3 from "./pages/four/fourOne/fourOne3";
import FourOne4 from "./pages/four/fourOne/fourOne4";
import FourOne5 from "./pages/four/fourOne/fourOne5";
import TFive from "./pages/five/tfive";
import TFive2 from "./pages/five/tfive2";
import TFive3 from "./pages/five/tfive3";
import TFive4 from "./pages/five/tfive4";
import TFive5 from "./pages/five/tfive5";
import FiveOne from "./pages/five/fiveOne/fiveOne";
import FiveOne2 from "./pages/five/fiveOne/fiveOne2";
import FiveOne3 from "./pages/five/fiveOne/fiveOne3";
import FiveOne4 from "./pages/five/fiveOne/fiveOne4";
import FiveOne5 from "./pages/five/fiveOne/fiveOne5";
import TSix from "./pages/six/tsix";
import Tsix2 from "./pages/six/tsix2";
import Tsix3 from "./pages/six/tsix3";
import Tsix4 from "./pages/six/tsix4";
import Tsix5 from "./pages/six/tsix5";
import SixOne from "./pages/six/tsixOne/sixOne";
import SixOne2 from "./pages/six/tsixOne/sixOne2";
import SixOne3 from "./pages/six/tsixOne/sixOne3";
import SixOne4 from "./pages/six/tsixOne/sixOne4";
import SixOne5 from "./pages/six/tsixOne/sixOne5";
import Seven from "./pages/seven/seven";
import Seven2 from "./pages/seven/seven2";
import Seven3 from "./pages/seven/seven3";
import Seven4 from "./pages/seven/seven4";
import Seven5 from "./pages/seven/seven5";
import SevenOne from "./pages/seven/sevenOne/sevenOne";
import SevenOne2 from "./pages/seven/sevenOne/sevenOne2";
import SevenOne3 from "./pages/seven/sevenOne/sevenOne3";
import SevenOne4 from "./pages/seven/sevenOne/sevenOne4";
import SevenOne5 from "./pages/seven/sevenOne/sevenOne5";
import Eight from "./pages/eight/eight";
import Eight2 from "./pages/eight/eight2";
import Eight3 from "./pages/eight/eight3";
import Eight4 from "./pages/eight/eight4";
import Eight5 from "./pages/eight/eight5";
import EightOne from "./pages/eight/eightOne/eightOne";
import EightOne2 from "./pages/eight/eightOne/eightOne2";
import EightOne3 from "./pages/eight/eightOne/eightOne3";
import EightOne4 from "./pages/eight/eightOne/eightOne4";
import EightOne5 from "./pages/eight/eightOne/eightOne5";
import Craft from "./pages/crafting/craft";
import ScrollButton from "./pages/ScrollButton/ScrollButton";
import { Content } from "./pages/ScrollButton/Styles";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./pages/novigation/actions/userAuth";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<THree />} />
          <Route path="/three2" element={<Three2 />} />
          <Route path="/three3" element={<Three3 />} />
          <Route path="/three4" element={<Three4 />} />
          <Route path="/three5" element={<Three5 />} />
          <Route path="/tfour" element={<TFour />} />
          <Route path="/tfour2" element={<Tfour2 />} />
          <Route path="/tfour3" element={<Tfour3 />} />
          <Route path="/tfour4" element={<Tfour4 />} />
          <Route path="/tfour5" element={<Tfour5 />} />
        </Routes>
        {isAuth ? (
          <Routes>
            <Route path="/fourOne" element={<FourOne />} />
            <Route path="/fourOne2" element={<FourOne2 />} />
            <Route path="/fourOne3" element={<FourOne3 />} />
            <Route path="/fourOne4" element={<FourOne4 />} />
            <Route path="/fourOne5" element={<FourOne5 />} />
            <Route path="/tfive" element={<TFive />} />
            <Route path="/tfive2" element={<TFive2 />} />
            <Route path="/tfive3" element={<TFive3 />} />
            <Route path="/tfive4" element={<TFive4 />} />
            <Route path="/tfive5" element={<TFive5 />} />
            <Route path="/fiveOne" element={<FiveOne />} />
            <Route path="/fiveOne2" element={<FiveOne2 />} />
            <Route path="/fiveOne3" element={<FiveOne3 />} />
            <Route path="/fiveOne4" element={<FiveOne4 />} />
            <Route path="/fiveOne5" element={<FiveOne5 />} />
            <Route path="/tsix" element={<TSix />} />
            <Route path="/tsix2" element={<Tsix2 />} />
            <Route path="/tsix3" element={<Tsix3 />} />
            <Route path="/tsix4" element={<Tsix4 />} />
            <Route path="/tsix5" element={<Tsix5 />} />
            <Route path="/sixOne" element={<SixOne />} />
            <Route path="/sixOne2" element={<SixOne2 />} />
            <Route path="/sixOne3" element={<SixOne3 />} />
            <Route path="/sixOne4" element={<SixOne4 />} />
            <Route path="/sixOne5" element={<SixOne5 />} />
            <Route path="/seven" element={<Seven />} />
            <Route path="/seven2" element={<Seven2 />} />
            <Route path="/seven3" element={<Seven3 />} />
            <Route path="/seven4" element={<Seven4 />} />
            <Route path="/seven5" element={<Seven5 />} />
            <Route path="/sevenOne" element={<SevenOne />} />
            <Route path="/sevenOne2" element={<SevenOne2 />} />
            <Route path="/sevenOne3" element={<SevenOne3 />} />
            <Route path="/sevenOne4" element={<SevenOne4 />} />
            <Route path="/sevenOne5" element={<SevenOne5 />} />
            <Route path="/eight" element={<Eight />} />
            <Route path="/eight2" element={<Eight2 />} />
            <Route path="/eight3" element={<Eight3 />} />
            <Route path="/eight4" element={<Eight4 />} />
            <Route path="/eight5" element={<Eight5 />} />
            <Route path="/eightOne" element={<EightOne />} />
            <Route path="/eightOne2" element={<EightOne2 />} />
            <Route path="/eightOne3" element={<EightOne3 />} />
            <Route path="/eightOne4" element={<EightOne4 />} />
            <Route path="/eightOne5" element={<EightOne5 />} />
            <Route path="/craft" element={<Craft />} />
          </Routes>
        ) : (
          <div>
            <h1>У вас нет доступа для просмотри полной таблицы!</h1>
          </div>
        )}
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {!isAuth && (
          <Routes>
            <Route path="/signin" element={<SignIN />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        )}
      </Router>
      <Fragment>
        <Content />
        <ScrollButton />
      </Fragment>
    </>
  );
}

export default App;
