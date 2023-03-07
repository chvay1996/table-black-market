import axios from "axios";

export const registration = async (username, password) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/auth/registration`,
      {
        username,
        password,
      }
    );
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};
