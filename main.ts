import { is, integer, typeOf } from '@deepkit/type';

console.log('starting')

console.log(is<integer>(12)) //true
console.log(is<integer>(12.5)) //false

// interface User {
//   id: number;
//   username: string;
// }

// const typeOfUser = typeOf<User['username']>();
// console.log(typeOfUser)