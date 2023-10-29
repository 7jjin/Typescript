/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 
 * 타입을 상황에 따라 좁히는 방법
 */



type Person = {
    name:string,
    age:number
}

function func(value:number|string|Date|null|Person){
    value;

    // 타입 가드
    // value => number: tofixed
    // value => string: toUpperCase
    // value => Date: getTime
    // value => Person : name은 age살 입니다. 
    if(typeof value ==="number"){
        console.log(value.toFixed());
    }else if(typeof value === "string"){
        console.log(value.toUpperCase());
    }else if(value instanceof Date){
        console.log(value.getDate())
    }else if(value && "age" in value){
        console.log(`${value.name}은 ${value.age}살 입니다.`)
    }
}