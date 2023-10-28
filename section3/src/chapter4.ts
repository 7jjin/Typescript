/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다.
 */

/**
 * 1. 합집합 - Union 타입
 */
let a:string | number | boolean;
a =1;
a = "hello";

a = true

let arr:(string|number|boolean)[] = [1,"hello",true];



type Untion1 = Dog|Person

let union1 : Untion1 = {
    name:"",
    color:"",
}
let union2 : Untion1 = {
    name:"",
    language:"",
}
let union3 : Untion1 = {
    name:"",
    language:"",
    color:"",
}
let union5 : Untion1 = {
    color:"",
    name:""
}
// 
// let union4 : Untion1 = {
//     name:"",
// }

/**
 *  2. 교집합 타입 - intersection 타입
 */
let variable: number & string;  // never 타입
type Dog = {
    name:string,
    color:string,
}
type Person = {
    name:string,
    language:string,
}

type Intersection = Dog & Person;

let intersection:Intersection = {
    name:"",
    color:"",
    language:""
}

/**
 *  "|" 연산자일 떈 둘중 하나의 객체를 다 가지고 있던가 아니면 둘개의 객체를 다 가지고 있던가 
 *  "&" 연산자일 땐 모두의 프로퍼티를 가지고 있어야 한다. 
 */
