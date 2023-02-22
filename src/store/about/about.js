import http from "../../http/index";

const Menu = {
  name: "about",
  state: {
    data: "",
  },
  reducers: {
    data(state, payload) {
      return { ...state, data: payload };
    },
    story(state, payload) {
      return { ...state, data: payload };
    },
    colors(state, payload) {
      return {
        ...state,
        colors: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getCareers() {
      const data = await http.get("career?populate=deep");

      dispatch.about.data(data.data.data.attributes);
    },
    async getStory() {
      const data = await http.get("story?populate=deep");
      dispatch.about.story(data.data.data.attributes);
    },
  }),
};

export default Menu;
