import axios from "axios";
import { setUser } from "../../../reducers/userReducer";

export const logIN = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/auth/avtorization`,
        {
          username,
          password,
        }
      );
      console.log("response", response);
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};
