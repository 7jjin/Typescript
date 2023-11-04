/**
 * 제네릭
 */

// 제네릭 함수
// <T> : 타입을 저장하는 변수
// 내가 원하는 타입의 리턴 값을
function func<T>(value: T): T {
  return value;
}

let num = func(10);

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);
