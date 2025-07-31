"use strict";
export function defang_ip(str) {
    return str.split('.').join('[.]');
}
export function defang_url(str) {
    return str.replace("http", "hxxp").replace("://","[://]").replace(".", "[.]");
}