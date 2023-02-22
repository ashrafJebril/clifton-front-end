import { init } from "@rematch/core";
import menu from "./menu";
import about from "./about";
const store = init({
  models: {
    ...menu,
    ...about,
  },
});
export default store;
