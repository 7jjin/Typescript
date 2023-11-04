/**
 * 첫번째 사례
 */

import { get } from "http";

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("a", 2);

/**
 * 두번째 사례
 */

// 일단 어떤 타입인지는 모르겠는데 배열 타입이야
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, "hello", "mynameis"]);
// "hello"

/**
 * 세번째 사례
 */

// length 라는 프로퍼티를 꼭 가지고 있어야 할 때 extends를 사용해서 제한 해준다.
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

// let var4 = getLength(10);
