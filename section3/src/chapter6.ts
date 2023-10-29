/**
 * 타입 단언
 */

type Person = {
    name:string,
    age:number,
}


// 초기화 값을 만들고 이후에 값을 넣고 싶을 때 as 사용
let person = {} as Person;
person.name = "조진형";
person.age= 25;

type Dog = {
    name:string,
    color:string,
}

let dog = {
    name:"돌돌이",
    color:"brown",
    bread:"진도"
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <= 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// 치트키
let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;

// 객체에 적용할 경우 readonly가 적용됨.
let cat = {
    name:"야옹이",
    color:"yellow"
} as const;

// cat.name = "";


/**
 *  Non Null 단언
 */
type Post = {
    title:string;
    author?:string;
};
let post:Post = {
    title:"게시글1",
    author:"조진형"
}

// !연산자 : 타입스크립트에게 이 값은 null이나 undefined값이 아니다 라는 것을 알려줌.(무조건 값이 있다고 알려줌)
const len : number = post.author!.length;

// 타입 단언은 타입을 바꾸는 것이 아님! 잠깐 타입스크립트의 컴파일러의 눈을 속이는 것임.
// 그래서 사용할 때 신중히 사용하자