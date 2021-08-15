import { Guitar } from "./guitar";
import { User } from "./user";

export class Bill {
    _id: string = '';
  user: User = new User();
  guitars: Guitar[] = [];
  price: number = 0;
  time: Date = new Date();
  note: string = '';
}
