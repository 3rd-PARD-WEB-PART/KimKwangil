import { atom } from "recoil";

export const myInfoAge = atom({
    key: "myInfoAge",
    default : 24,
})
export const myInfoName = atom({
    key: "myInfoName",
    default : "김광일",
})