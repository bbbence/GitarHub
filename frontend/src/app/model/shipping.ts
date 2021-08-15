import { Guitar } from "./guitar";
import { User } from "./user";

export class Shipping {
  _id: string = '';
  user: User = new User();
  guitars: Guitar[] = [];
  address: string = '';
  price?: number = 0;
  active?: boolean = true;
}
