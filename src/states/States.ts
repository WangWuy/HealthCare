import { atom } from "recoil";

export const loadingState = atom({
    key: "baseLoadingScreenState",
    default: false,
})