/*
* 객체 타입간의 호환성
* -> 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가?
*/

type Animal = {
    name:string;
    color:string;
}

type Dog = {
    name:string;
    color:string;
    bread:string;
}

let animal : Animal ={
    name:"기린",
    color:"yellow",
}

let dog: Dog = {
    name:"돌돌이",
    color:"brown",
    bread:"진도",
}

animal = dog;

type Book = {
    name:string,
    price:number
}
type ProgrammingBook = {
    name:string,
    price:number,
    skill:string,
}

let book : Book;
let programmingBook: ProgrammingBook = {
    name:"한 입 크기로 잘라먹는 리액트",
    price:33000,
    skill:"reactjs",
}
book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사 -> 아무리 다운 캐스팅일지라도 객체 타입에 초기값으로 직접 넣어주면 안됌
 * 초기값을 변수로 만들어서 그 변수를 넣어주자!!
 */

let book2: Book = {
    name:"한 입 크기로 잘라먹는 리액트",
    price:33000,
    // skill:"reactjs",
}
let book3:Book = programmingBook;

function func(book:Book){}
func({
    name:"한 입 크기로 잘라먹는 리액트",
    price:33000,
    // skill:"reactjs",
})
func(programmingBook);

