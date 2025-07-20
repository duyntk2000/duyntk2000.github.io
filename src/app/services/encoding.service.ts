import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class EncodingService {

  to_base64(str: string) {
    return Buffer.from(str).toString('base64');
  }
  from_base64(str: string) {
    return Buffer.from(str, 'base64').toString('ascii');
  }
  reverse_str(str: string) {
    return str.split(/(?:)/u).reverse().join("");
  }
  defang_ip(str: string) {
    return str.split('.').join('[.]');
  }
  defang_url(str: string) {
    return str.replace("http", "hxxp").replace("://","[://]").replace(".", "[.]");
  }
  to_hex(str: string) {
    let bytes = new TextEncoder().encode(str);
    let ret = "";
    bytes.forEach((b) => ret = ret + b.toString(16));
    return ret;
  }
  from_hex(str: string) {
    str = str.replace(/[^a-fA-F0-9]/g, ' ');
    str = str.replace(/\b([a-fA-F0-9])\b/g, '0$1');
    str = str.replaceAll(" ", "");
    return Buffer.from(str, 'hex').toString();
  }
}
