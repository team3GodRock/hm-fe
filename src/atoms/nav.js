import { atom } from "recoil";

const navMenusState = atom({
  key: "navMenusState",
  default: [],
});

const navSubMenusState = atom({
  key: "navSubMenusState",
  default: [],
});

export { navMenusState, navSubMenusState };
