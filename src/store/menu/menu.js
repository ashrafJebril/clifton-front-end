import axios from "axios";

const Menu = {
  name: "menu",
  state: {
    isDark: "asasfasf",
  },
  reducers: {
    isDark(state, payload) {
      return { ...state, isDark: payload };
    },
    colors(state, payload) {
      return {
        ...state,
        colors: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getAboutUs() {
      await axios
        .get("http://localhost:1337/api/about?populate=deep")
        .then((res) => {});
      // dispatch.theme.colors(colors);
    },
  }),
};

export default Menu;
