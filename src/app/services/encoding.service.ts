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
}
