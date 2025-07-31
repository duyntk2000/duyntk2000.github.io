import { Buffer } from "buffer";
"use strict";

export function to_base64(str) {
    return Buffer.from(str).toString('base64');
}
export function from_base64(str) {
    return Buffer.from(str, 'base64').toString('ascii');
}
export function reverse_str(str) {
    return str.split(/(?:)/u).reverse().join("");
}
export function to_hex(str) {
    let bytes = new TextEncoder().encode(str);
    let ret = "";
    bytes.forEach((b) => ret = ret + b.toString(16));
    return ret;
}
export function from_hex(str) {
    str = str.replace(/[^a-fA-F0-9]/g, ' ');
    str = str.replace(/\b([a-fA-F0-9])\b/g, '0$1');
    str = str.replaceAll(" ", "");
    return Buffer.from(str, 'hex').toString();
}
export function from_decimal(str) {
    let dec = str.split(" ");
    let ret = "";
    dec.forEach((d) => ret += String.fromCharCode(d));
    return ret;
}
export function to_decimal(str) {
    let ret = str.charCodeAt(0).toString();
    for (let i = 1; i<str.length; i++) {
        ret = ret + " " + str.charCodeAt(i).toString();
    }
    return ret;
}