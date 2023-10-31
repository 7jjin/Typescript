/**
 *  함수 타입 호환성
 * 특정 함수 타입을 다른 함술 타입으로 취급해도 괜찮은가를 판단하는 것
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b=a;     // 다운 캐스팅 -> 반환값이 넘버리터럴 타입이기 때문에 number 타입이 number literal타입으로 다운캐스팅 될 수 없다.

// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: number) => void;

let c: C = (value) => {};
let d: D = (value) => {};

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal, name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;
dogFunc = animalFunc;

// animalFunc = dogFunc인 경우
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //   console.log(animal.color);
};

// dogFunc = animalFunc인 경우
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;   // 매개변수의 개수가 적은 쪽에서 많은 쪽으로 호환하는 것은 됨. 반대의 경우는 안됌.
