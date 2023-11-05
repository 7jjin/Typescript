/**
 * 조건부 타입
 */

import { isNullOrUndefined } from "util";

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};
type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

// T의 타입이 number 타입이면 string 타입으로 정하고 string 타입이면 number 타입으로 바꾸는 타입
type StringNumberSwitch<T> = T extends number ? string : number;
let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

// 함수 오버로딩을 통해 해결할 수 있음.
function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im 진형");
result.toUpperCase();

let result2 = removeSpaces(undefined);
