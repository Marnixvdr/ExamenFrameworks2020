import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

   p1 = new Product("iPod","Apple","A cool phone",200);
   p2 = new Product("Appel","GoldApples","a fresh apple",1)
   constructor() {}
   getAllProducts(){
      return (this.p1,this.p2);
   }
}
