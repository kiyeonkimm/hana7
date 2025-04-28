"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hong = { id: 1, name: "Hong" };
hong = Object.assign({ id: 1 }, { name: "Kim" });
hong = { id: 2, name: "Kim", addr: "Seoul" };
const hongx = { id: 2, name: "Kim", addr: "Seoul" };
hong = hongx;
